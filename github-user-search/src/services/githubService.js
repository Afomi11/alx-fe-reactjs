import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  // Construct the query string
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }
  
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${BASE_URL}/search/users?${query}&page=${page}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
