import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '38308184-41247c978e0d2604524b8abfa';

export const fetchImages = async ({
  query,
  page,
  perPage,
}) => {
  const urlParameters = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    q: query,
    page,
    per_page: perPage,
  });

  const response = await axios.get(`/?${urlParameters}`);

  return response.data;
};
