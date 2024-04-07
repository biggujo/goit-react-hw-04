import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'vffV2E50mdrR3FLyJgbiqJm_dL8Lms3rg3giE2kAIpE';

export const fetchImages = async ({
  query,
  page,
  perPage,
}) => {
  const urlParameters = new URLSearchParams({
    client_id: API_KEY,
    query,
    page,
    per_page: perPage,
    orientation: 'landscape',
  });

  const response = await axios.get(`/search/photos?${urlParameters}`);

  return response.data;
};
