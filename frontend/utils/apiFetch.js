/*

src/utils/apiFetch.js

*/

// initial database fetch for job data

export const fetchJobs = async (url, opt = {}) => {
  try {
    const response = await fetch(url, opt);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};
