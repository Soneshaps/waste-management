import axios from 'axios';
import type { Skip } from '@/types/Skip';

const API_URL = import.meta.env.VITE_API_URL || 'https://app.wewantwaste.co.uk/api';

export const getSkipsByLocation = async (postcode: string, area: string): Promise<Skip[]> => {
  const response = await axios.get<Skip[]>(`${API_URL}/skips/by-location`, {
    params: {
      postcode,
      area,
    },
  });
  return response.data;
};
