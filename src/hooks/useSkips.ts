import { useQuery } from '@tanstack/react-query';
import { getSkipsByLocation } from '../services/skipService';

export const useSkips = (postcode: string, area: string) => {
  return useQuery({
    queryKey: ['skips', postcode, area],
    queryFn: () => getSkipsByLocation(postcode, area),
    enabled: Boolean(postcode && area),
  });
};
