import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchUserData(username, location, minRepos);
      if (!data.items || data.items.length === 0) {
        setError("Looks like we can't find the user.");
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError("An error occurred while fetching user data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center">
            <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-10 h-10 rounded-full mr-2" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
            <span>{user.location ? ` (${user.location})` : ' Location not specified'}</span>
            <span className="ml-2">Repos: {user.public_repos}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(prev => prev + 1)} className="mt-4 bg-blue-500 text-white p-2 rounded">Load More</button>
    </div>
  );
};

export default Search;
