'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Banner = () => {
  const pathname = usePathname();

  if (pathname === '/signup-v3' || pathname === '/login-v3') {
    return;
  } else {
    return (
      <div className="relative hidden h-full w-3/12 bg-primary bg-[url('/assets/banner-signup.png')] bg-[length:40rem] bg-bottom bg-no-repeat px-8 py-16 text-center md:block lg:px-16">
        <Image
          alt="tyr rewards logo"
          className="m-auto mb-5 max-w-48"
          height={0}
          src="/assets/logo/tyr-rewards-logo.png"
          width={200}
          priority
        />
        <p className="text-lg font-semibold text-white lg:text-xl">
          Start <span className="text-2xl font-bold lg:text-3xl">earning</span> on your&nbsp;
          <span className="text-xl font-bold lg:text-2xl">mobile</span>
        </p>
        <p className="text-sm text-white">Download Tyr Rewards app on Google Play Store or Apple App Store now!</p>
      </div>
    );
  }
};

export default Banner;
