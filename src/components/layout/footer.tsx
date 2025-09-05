import Image from 'next/image';
import Link from 'next/link';

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { IoLogoDiscord } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { PiMapPinLine, PiPhone } from 'react-icons/pi';

import TyradsCopyright from '@/components/tyrads/copyright';

const Footer = () => {
  return (
    <>
      <footer className="mx-auto p-8 max-w-screen-responsive sm:mb-0">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav className="flex flex-col items-start gap-3 sm:col-span-2">
            <Link aria-label="Go home" href="/" title="Tyr Rewards">
              <Image
                alt="tyr rewards logo"
                className="h-10"
                height={0}
                src="/assets/logo/tyr-rewards-logo4.png"
                width={215}
              />
            </Link>
            <p className="-mt-1 text-sm text-gray-800 lg:max-w-lg">
              Play your favorite games and earn points for exclusive benefits and perks. Download now and join the
              ultimate gaming community!
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="https://www.facebook.com/tyrrewards.bytyrads/" target="_blank">
                <IoLogoFacebook className="hover:text-blue-600" size={28} />
              </Link>
              <Link href="https://x.com/TyrRewards" target="_blank">
                <IoLogoTwitter className="hover:text-blue-400" size={28} />
              </Link>
              <Link href="https://www.instagram.com/tyr.rewards/" target="_blank">
                <IoLogoInstagram className="hover:text-red-600" size={28} />
              </Link>
              <Link href="https://discord.com/invite/kPVeKaZ5" target="_blank">
                <IoLogoDiscord className="hover:text-indigo-700" size={28} />
              </Link>
            </div>
          </nav>
          <nav>
            <div className="mb-4 font-bold">Contacts</div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2 hover:text-primary">
                <div className="w-5">
                  <PiMapPinLine size={20} />
                </div>
                <Link
                  aria-label="Our address"
                  href="https://maps.app.goo.gl/cxJSDdJbHfrXXZqg6"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Our address"
                >
                  420 North Bridge Road #04-33 North Bridge Centre, Singapore 188727
                </Link>
              </div>
              <div className="flex gap-2 hover:text-primary">
                <div className="w-5">
                  <PiPhone size={20} />
                </div>
                <Link aria-label="Our phone" href="tel:+65-8341-5236" title="Our phone">
                  +65-8341-5236
                </Link>
              </div>
              <div className="flex gap-2 hover:text-primary">
                <div className="w-5">
                  <MdOutlineEmail size={20} />
                </div>
                <Link aria-label="Our email" href="mailto:support@tyrrewards.com" title="Our email">
                  support@tyrrewards.com
                </Link>
              </div>
            </div>
          </nav>
          <nav>
            <div className="mb-4 font-bold">Terms & Policies</div>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="https://support.tyrrewards.com/en/" target="_blank">
                Support Center
              </Link>
            </div>
          </nav>
        </div>
      </footer>
      <TyradsCopyright />
    </>
  );
};

export default Footer;
