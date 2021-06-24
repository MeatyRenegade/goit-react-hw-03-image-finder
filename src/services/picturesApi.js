import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21331461-15f5bdfd142a82f8595dd354e';
const PROPS = '&image_type=photo&orientation=horizontal&per_page=12';

const fetchPictures = searchQuery => {
  return axios
    .get(`${BASE_URL}/?key=${API_KEY}&q=${searchQuery}${PROPS}`)
    .then(response => response.data.hits)
    .catch(error => console.log(error));
};

export default fetchPictures;
