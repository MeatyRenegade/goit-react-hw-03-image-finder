import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '21331461-15f5bdfd142a82f8595dd354e';
const PROPS = '&image_type=photo&orientation=horizontal';

const fetchPictures = async ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 12,
}) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&per_page=${pageSize}&page=${currentPage}${PROPS}`,
  );
  return response.data.hits;
};

export { fetchPictures };
