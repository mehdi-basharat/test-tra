import Image from 'next/image';
import { useParams } from 'next/navigation';

import { setFallbackImage } from '@/utils/images';

import { useRedeemDetailsContext } from '../../_context';

const ProductBanner = () => {
  const { redeemId } = useParams<{ redeemId: string }>();
  const { product } = useRedeemDetailsContext();

  const image = redeemId === 'paypal' ? '/assets/logo/paypal.webp' : product.icon;

  return (
    <section className="relative m-auto h-[25vw] max-h-[15rem] min-h-[11rem] w-full overflow-hidden rounded-2xl bg-[url('/assets/webpay.webp')] bg-cover bg-no-repeat md:bg-left-bottom lg:bg-[left_bottom_-10rem]">
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-white sm:gap-3">
        {image && (
          <Image
            alt={product.product_name || ''}
            className="max-h-[7.5rem] w-auto rounded-2xl drop-shadow-lg"
            height={200}
            src={image}
            width={200}
            onError={setFallbackImage}
          />
        )}
        <div className="text-lg font-semibold drop-shadow-lg sm:text-2xl">{product.product_name}</div>
      </div>
    </section>
  );
};

export default ProductBanner;
