'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EmblaCarousel from '../EmblaCarousel';

const BannerV2 = () => {
  const pathname = usePathname();

  const OPTIONS = { loop: true };
  const SLIDES = [
    { title: 'Fun Mobile Games', desc: 'Choose from 100+ fun games and start earning', img: '/game-banner-01.svg' },
    { title: 'Free to Use', desc: 'No fees, just fun. Download and play now', img: '/game-banner-02.svg' },
    { title: 'Play More, Earn More', desc: 'Get rewards just by doing what you love', img: '/game-banner-03.svg' },
    { title: 'Cash Out Fast ', desc: 'PayPal or gift cards, earn real rewards your way', img: '/game-banner-04.svg' },
  ];

  if (pathname === '/signup-v3' || pathname === '/login-v3') {
    return (
      <div className="relative hidden max-h-[70vh] w-6/12 overflow-y-auto bg-[#F0F1F3] px-8 py-16 sm:h-full md:block lg:px-16">
        <Image alt="tyr rewards logo" className="max-w-48" height={0} src="/logo-signin-v3.svg" width={200} priority />

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    );
  }
};

export default BannerV2;
