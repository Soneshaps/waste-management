import Card from '@/components/card';
import Pill from '@/components/pill';

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
        <div className="text-2xl font-semibold pt-2">{selectedSkip.size} Yard Skip</div>
        <div className="text-lg font-semibold text-gray-500 pb-2">
          {formatCurrency(totalPrice(selectedSkip.price_before_vat, selectedSkip.vat))}
          <span className="text-xs text-gray-500 ml-2">VAT Included</span>
        </div>
        <hr className="border-gray-200" />
        <div className="text-sm  text-gray-500 flex flex-col gap-2 pt-2">
          <div className="flex flex-col gap-2 pb-2">
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
              label="Delivery"
              value={formatCurrency(selectedSkip.transport_cost ?? 0)}
            />
          </div>
          <hr className="border-gray-200 pt-2" />
          <div className="flex flex-col gap-2 pb-2">
            <SkipDetailList
              label="Allow Heavy Waste"
              value={selectedSkip.allows_heavy_waste ? <Pill>Yes</Pill> : <Pill>No</Pill>}
            />
            <SkipDetailList
              label="Allow in Road"
              value={selectedSkip.allowed_on_road ? <Pill>Yes</Pill> : <Pill>No</Pill>}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const SkipDetailList = ({
  label,
  value,
}: {
  label: string;
  value: string | number | React.ReactNode;
}) => {
  return (
    <div className="flex justify-between">
      <div className="font-semibold">{label}</div>
      <div className="font-normal">{value}</div>
    </div>
  );
};

export default SkipDetail;
