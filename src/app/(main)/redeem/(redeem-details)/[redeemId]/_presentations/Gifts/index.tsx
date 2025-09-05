import { uniqueId } from 'lodash';

import { TypographyH4 } from '@/components/ui/typography';

import { useRedeemDetailsContext } from '../../_context';

import SKUs from './_components/SKUs';

const Gifts = () => {
  const { product } = useRedeemDetailsContext();

  return (
    <section>
      <TypographyH4 className="mb-3">Gifts</TypographyH4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.values(product?.redeem_options || {}).map(amount => {
          return <SKUs key={uniqueId()} amount={Number(amount)} />;
        })}
      </div>
    </section>
  );
};

export default Gifts;
