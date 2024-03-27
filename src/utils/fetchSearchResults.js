import axios from "axios";

const fetchSearchResults = async (searchTerm) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/products/search?q=${searchTerm}`
    );
    console.log("Search Results:", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchSearchResults;
