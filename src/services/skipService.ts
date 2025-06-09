import axios from 'axios';

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const getSkipsByLocation = async (postcode: string, area: string): Promise<Skip[]> => {
  const response = await axios.get<Skip[]>(`https://app.wewantwaste.co.uk/api/skips/by-location`, {
    params: {
      postcode,
      area,
    },
  });
  return response.data;
};
