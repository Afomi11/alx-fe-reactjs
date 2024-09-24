import axios from 'axios';

export const fetchUserData = async ({ username, location, repos }) => {
  let query = '';

  // Construct the query string
  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  // Ensure the query string is properly formatted
  query = query.trim().replace(/\s+/g, '+'); // Replace spaces with '+'

  try {
    const response = await axios.get(`${process.env.REACT_APP_GITHUB_API_BASE_URL}?q=${query}`);
    return response.data.items; // The search API returns items array
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
