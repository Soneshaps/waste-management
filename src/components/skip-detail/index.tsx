import type { Skip } from '@/types/Skip';
import Card from '@/components/card';

const SkipSizeToImageMap = {
  4: '/images/4-yard-skip.jpg',
  6: '/images/6-yard-skip.jpg',
  8: '/images/8-yard-skip.jpg',
  10: '/images/10-yard-skip.jpg',
  12: '/images/12-yard-skip.jpg',
  14: '/images/14-yard-skip.jpg',
  16: '/images/16-yard-skip.jpg',
  20: '/images/20-yard-skip.jpg',
  40: '/images/40-yard-skip.jpg',
};

const SkipSizeToDimensionMap = {
  4: '1.8m X 1.3m X 0.9m',
  6: '2.6m X 1.7m X 1m',
  8: '3.6m X 1.7m X 1.2m',
  10: '3.6m X 1.8m X 1.5m',
  12: '3.7m X 1.7m X 1.8m',
  14: '3.9m X 1.8m X 1.9m',
  16: '4.1m X 1.9m X 2.1m',
  20: '6.1m X 2.4m X 1.07m',
  40: '8.1m X 3.1m X 2.2m',
};

interface SkipDetailProps {
  selectedSkip: Skip;
}

const SkipDetail = ({ selectedSkip }: SkipDetailProps) => {
  return (
    <Card>
      <div className="flex justify-center items-center border bg-[#ffffff] border-4 w-full md:w-[350px] border-[#f4c300] rounded-md shadow-sm">
        <img
          src={SkipSizeToImageMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
          alt="skip"
          className="w-full md:w-[300px] h-[221px] object-contain md:object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="text-xl font-medium">{selectedSkip.size} Yard Skip</div>
        <div className="text-lg font-medium text-gray-500">
          &#163;{selectedSkip.price_before_vat}
        </div>
        <hr className="border-gray-200" />
        <div className="text-sm  text-gray-500 pt-2 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="font-medium">Dimensions</div>
            <div>
              {SkipSizeToDimensionMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Capacity</div>
            <div>35 to 40 bin bags</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Hire Period</div>
            <div>{selectedSkip.hire_period_days} Days</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Allow Heavy Waste</div>
            <div>{selectedSkip.allows_heavy_waste ? 'Yes' : 'No'}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Delivery</div>
            <div>&#163;{selectedSkip.transport_cost ?? 0}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Allow in Road</div>
            <div>{selectedSkip.allowed_on_road ? 'Yes' : 'No'}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkipDetail;
