import Card from '@/components/card';

import { formatCurrency, totalPrice } from '@/utils';

import type { Skip } from '@/types/Skip';
import {
  ActiveStateToCapacityMap,
  SkipSizeToDimensionMap,
  SkipSizeToImageMap,
} from '@/constants/constantMap';

interface SkipDetailProps {
  selectedSkip: Skip;
}

const SkipDetail = ({ selectedSkip }: SkipDetailProps) => {
  return (
    <Card>
      <div className="flex justify-center items-center border bg-[#ffffff] border-4 w-full md:w-[350px] border-[#f4c300] rounded-md shadow-sm">
        <img
          src={SkipSizeToImageMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
          alt={`${selectedSkip.size} Yard Skip`}
          className="w-full md:w-[300px] h-[221px] object-contain md:object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="text-xl font-medium">{selectedSkip.size} Yard Skip</div>
        <div className="text-lg font-medium text-gray-500">
          {formatCurrency(totalPrice(selectedSkip.price_before_vat, selectedSkip.vat))}
        </div>
        <hr className="border-gray-200" />
        <div className="text-sm  text-gray-500 pt-2 flex flex-col gap-2">
          <SkipDetailList
            label="Dimensions"
            value={SkipSizeToDimensionMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
          />
          <SkipDetailList
            label="Capacity"
            value={
              ActiveStateToCapacityMap[selectedSkip.size as keyof typeof ActiveStateToCapacityMap]
            }
          />
          <SkipDetailList label="Hire Period" value={`${selectedSkip.hire_period_days} Days`} />
          <SkipDetailList
            label="Allow Heavy Waste"
            value={selectedSkip.allows_heavy_waste ? 'Yes' : 'No'}
          />
          <SkipDetailList
            label="Delivery"
            value={formatCurrency(selectedSkip.transport_cost ?? 0)}
          />
          <SkipDetailList
            label="Allow in Road"
            value={selectedSkip.allowed_on_road ? 'Yes' : 'No'}
          />
        </div>
      </div>
    </Card>
  );
};

const SkipDetailList = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <div className="flex justify-between">
      <div className="font-medium">{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default SkipDetail;
