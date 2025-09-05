import Link from 'next/link';

import type { Metadata } from 'next';

import Footer from '@/components/layout/footer';
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default async function PrivacyPolicyPage() {
  return (
    <>
      <main className="mx-auto flex flex-col gap-10 p-8 max-w-screen-responsive">
        <TypographyH1>Privacy Policy</TypographyH1>
        <span className="text-muted-foreground">Last updated on 16-08-2024</span>
        <section>
          <TypographyP>
            Tyr Rewards (&quot;we&quot; &quot;us&quot; or &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how your personal information is collected, used, safeguarded and disclosed by Tyr
            rewards.
          </TypographyP>
          <TypographyP>
            This privacy policy applies to our application named Tyr rewards developed by Tyrads Pte. Ltd., and by
            accessing or using our service you signify that you have read, understood and agree to our collection,
            storage, use and disclosure of your personal information as described in this privacy policy and our terms
            of service. it also defines your rights with respect to your personal information and how you can contact us
            if you have any queries or concerns.
          </TypographyP>
          <TypographyP>
            For the purpose of this Privacy Policy, &quot;Personal information&quot; is information, or parts thereof,
            by means of which you can be identified either directly (e.g. by your name) or indirectly (e.g. by
            pseudonymised data such as a unique ID). This means that personal information includes, for example, email
            addresses, mobile phone numbers, user names, profile pictures, personal preferences and use behavior
            regarding the apps used on your end device, user content, financial information and health-related
            information. However, this could also include one-time identifiers such as the IP address of your end device
            or the browser you use, and other specific information about your mobile device.
          </TypographyP>
          <TypographyP>
            This Privacy policy covers all personal data that is stored and processed by you when using Tyr rewards.
            Where applicable, we indicate whether and why you must provide us with your Personal Information, as well as
            the consequences of failing to do so. If you do not provide Personal Information when requested, you may not
            be able to benefit from our Service if that information is necessary to provide you with them.
          </TypographyP>
          <TypographyP>
            BY ACCESSING OR USING THE TYR REWARDS SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE
            BOUND BY THIS PRIVACY POLICY AND TERMS OF SERVICE located at&nbsp;
            <Link className="text-link" href="/terms-of-service" target="_blank">
              https://tyrrewards.com/terms-of-service
            </Link>
            &nbsp;. IF YOU DO NOT AGREE TO THIS POLICY AND THE TERMS OF SERVICE, THEN YOU MUST NOT ACCESS OR USE THE
            SERVICE. you consent to the collection, use, and disclosure of your information in accordance with the Tyr
            Rewards Privacy Policy located at&nbsp;
            <Link className="text-link" href="/privacy-policy" target="_blank">
              https://tyrrewards.com/privacy-policy
            </Link>
            &nbsp;(&quot;Privacy Policy&quot;).
          </TypographyP>
        </section>
        <section>
          <TypographyH2>1. What information do we collect?</TypographyH2>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3">
            <li>When do we use customer information from third parties?</li>
            <li>Do we share the information we collect with third parties?</li>
            <li>Where and when is information collected from customers and end users?</li>
            <li>How do we use your email address?</li>
            <li>Could my information be transferred to other countries?</li>
            <li>Is the information collected through our service secure?</li>
            <li>How long do we keep your information?</li>
            <li>How do we protect your information?</li>
            <li>Sale of Business</li>
            <li>Your consent</li>
            <li>Links to other applications</li>
            <li>Cookies</li>
            <li>Advertising</li>
            <li>Cookies for Advertising</li>
            <li>Kids&apos; Privacy</li>
            <li>Changes to our Privacy Policy</li>
            <li>Third party services</li>
            <li>Information about General Data Protection Regulation (GDPR)</li>
            <li>Contact Us</li>
            <li>What information do we collect?</li>
          </ul>
          <TypographyP>
            We collect information from you when you visit our service, register, place an order, subscribe to our
            services, respond to our survey or fill out a form.
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3">
            <li>Name</li>
            <li>Email addresses</li>
            <li>Age</li>
            <li>Password</li>
            <li>Data usage</li>
            (For Android Users only)
            <li>
              Installed Application Information and send this to&nbsp;
              <Link className="text-link" href="https://app.tyrrewards.net" target="_blank">
                https://app.tyrrewards.net
              </Link>
            </li>
          </ul>
          <TypographyP>
            BY ACCESSING OR USING THE TYR REWARDS SERVICE You agree Tyr Rewards collects / transmits / syncs / stores
            user&apos;s Primary account, Installed application uploads on&nbsp;
            <Link className="text-link" href="https://app.tyrrewards.net" target="_blank">
              https://app.tyrrewards.net
            </Link>
            &nbsp;to enable Tyr rewards playtime features, so that we can reward users for their gameplay.
          </TypographyP>
          <TypographyP>(For Android and iOS users)</TypographyP>
          <TypographyP>
            <strong>You consent us to collect the above-mentioned information for the following reasons:</strong>
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-[lower-alpha] flex-col gap-3 leading-7">
            <li>
              in order to provide you with the desired services so that we can better understand your needs and
              expectations and therefore improve our services for you
            </li>
            <li>
              for the prevention of fraud and to guarantee that the use of Tyr rewards takes place completely and
              without fraudulent conduct and in accordance with the terms and conditions of use of Tyr rewards: We
              reserve the right to exclude certain users and their end devices from the services, in the event of
              impermissible use behavior, without specifying the exact reason (impermissible behavior includes, for
              example, the use of multiple end devices from one IP address [if this is not customary at the respective
              location or in the respective country], multiple use of user accounts that are linked to payment service
              providers, furthermore, the use of several mobile phone numbers (which are used to validate the identity
              of the user), and certain changes to the mobile operating systems, such as the granting of unrestricted
              admin access, installation of malware or a specific modification of the operating system etc.);
            </li>
            <li>
              in order to guarantee the security of our services and ensure that our offering (apps and web server) is
              technically safe and works properly;
            </li>
            <li>to secure and implement our contractual entitlements and claims.</li>
          </ul>
          <TypographyP>(For Android user only)</TypographyP>
          <TypographyP className="font-semibold">
            When using Tyr Rewards for the first time, you first have to accept our terms and conditions during the
            registration and agree to track usage data by the Tyr rewards. For this purpose, you have to confirm the
            following declaration of consent by clicking on the &quot;ACCEPT&quot; button above (if you do not want to
            give consent, please close Tyr Rewards application; then the use of Tyr rewards will not be possible):
          </TypographyP>
          <TypographyP className="font-semibold">
            I hereby agree that by using the application Tyr rewards uses/collects/transmits/syncs/stores on&nbsp;
            <Link className="text-link" href="https://app.tyrrewards.net" target="_blank">
              https://app.tyrrewards.net
            </Link>
            &nbsp;the following personal data:
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3 ">
            <li>Registration data (User name, email address,Password, age, gender).</li>
            <li>Installed apps (including the use duration and use history).</li>
          </ul>
          <TypographyP className="font-semibold">What Rights Do You Have Regarding Your Data?</TypographyP>
          <TypographyP>
            You have the right at any time to receive free information about the extent and content of the processing of
            your personal data by us. You also have the right to request from us the rectification, restriction of
            processing, or erasure of your personal data.
          </TypographyP>
          <TypographyP>
            In the event of data privacy violations, you also have the right to lodge a complaint with the competent
            supervisory authority.
          </TypographyP>
          <TypographyP>(Consent for Android Users only)</TypographyP>
          <TypographyP>
            You consent to the processing of personal data by SDK, an integrated feature in Tyr Rewards called TyrSDK.
          </TypographyP>
          <TypographyP className="font-semibold">Consent</TypographyP>
          <TypographyP className="font-semibold">
            I hereby consent to that Tyrads Pte. Ltd. processes the following personal data in Tyr Rewards via TyrSDK.
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3 ">
            <li>Registration data ( age, gender)</li>
            <li>
              Installed apps (including the use duration and use history) and send this to&nbsp;
              <Link className="text-link" href="https://api.tyrads.com" target="_blank">
                https://api.tyrads.com
              </Link>
              .
            </li>
          </ul>
          <TypographyP>(For Android Users only)</TypographyP>
          <TypographyP className="font-semibold">
            By clicking on &quot;Accept&quot; I give Tyrads Pte. Ltd my consent to process the above-mentioned personal
            data and transmit it to other apps so that I can use TyrSDK as explained.
          </TypographyP>
          <TypographyP className="font-semibold">
            This data will be processed by TyrSDK. For more information&nbsp;
            <Link className="text-link" href="https://tyrads.com/tyrsdk-privacy-policy" target="_blank">
              https://tyrads.com/tyrsdk-privacy-policy
            </Link>
          </TypographyP>
          <TypographyP className="font-semibold">
            The data is linked to your device via the device ID (GAID or IDFA) transmitted to our servers in encrypted
            form. So that app providers can finance our app proposals, your device ID must be transferred to them for
            billing purposes.
          </TypographyP>
          <TypographyP className="font-semibold">
            The processing of the above data is required in order to be able to suggest apps available in the TyrSDK
            that match your interests, propose their installation via offers, and allow the reward earned from using
            said apps to be calculated. I am aware that the above data results in an interest profile, which, depending
            on the type of apps I use, may contain particularly sensitive personal data (such as health data or data on
            my sexual orientation as well as any other data from special categories defined in Art. 9 para. 1 of the
            European General Data Protection Regulation (GDPR).
          </TypographyP>
        </section>
        <section>
          <TypographyH2>2. When do we use customer information from third parties?</TypographyH2>
          <TypographyP>
            We receive some information from the third parties when you contact us. For example, when you submit your
            email address to us to show interest in becoming our customer, we receive information from the third party
            that provides automated fraud detection services to us. We also occasionally collect information that is
            made publicly available by you on social media websites. You can control how much of your information social
            media websites make public by visiting these websites and changing your privacy settings.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>3. Do we share the information we collect with third parties?</TypographyH2>
          <TypographyP>
            We may share your information that we collect, both personal and non-personal, with third parties such as
            with our attribution tools, subscribed internal systems and others who provide our content or whose services
            we may think interest you. We may also share it with our current and future affiliated companies and if we
            are involved in a merger, asset sale or other business reorganization, we may also share or transfer your
            personal and non-personal information to our successor-in-interest.
          </TypographyP>
          <TypographyP>
            We may engage trusted third-party service providers to perform functions and provide services to us, such as
            hosting and maintaining our servers and our service, database storage and management, email management,
            storage marketing, credit card processing, customer service and fulfilling orders for products and services
            you may purchase through our service. We will likely share your personal information and possibly some
            non-personal information with these third parties to enable them to perform these services for us and for
            you.
          </TypographyP>
          <TypographyP>
            We may share portions of our log file data, including IP addresses, for analytical purposes with third
            parties such as web analytics partners, application developers and ad networks. If your IP address is
            shared, it may be used to estimate general location and other technographics such as connection speed,
            whether you have visited the service in a shared location, and type of device used to visit the service.
            They may aggregate information about our advertising and what you see on the service and then provide
            auditing, research and reporting for us and our advertisers.
          </TypographyP>
          <TypographyP>
            We may disclose personal and non-personal information about you to government or law enforcement officials
            or private parties as we, in our sole discretion, believe necessary or appropriate in order to respond to
            claims, legal process (including subpoenas), to protect our rights and interest or those of a third party,
            the safety of the public or person, to prevent or stop any illegal, unethical, or legally actionable
            activity, or to otherwise comply with applicable court orders, laws, rules and regulations.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>4. Where and when is information collected from customers and end users?</TypographyH2>
          <TypographyP>
            We will collect personal information that you submit to us. We may also receive personal information about
            you from the third parties as described above. We will collect information from social media services when
            you use your credentials for these services to log into the Service, or when you connect your social media
            accounts to the Service. For example, when you log in with your Facebook or Google+ credentials, we collect
            the information you have authorized the platform to share with us, such as your name, email address, gender,
            date of birth, friend list, profile picture and playlists, along with other elements of your social network
            profile that you have made available may be shared with other Tyr rewards App users. We may also obtain
            other non-public information, such as pages you follow or create, and content you&apos;ve liked. Please
            refer to the privacy policy of your social network or music streaming account for information about what
            information is shared with us.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>5. How do we use your email address?</TypographyH2>
          <TypographyP>
            By submitting your email address on our service, you agree to receive emails from us and you also agree to
            allow us to use your email address for customer audience targeting sites, where we display custom
            advertising to specific people who have opted in to receive communications from us.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>6. Could my information be transferred to other countries?</TypographyH2>
          <TypographyP>
            We are incorporated in Singapore. Information collected via our application, through direct interaction to
            you or from use of our help services may be transferred from time to time to our offices and personnel, or
            to third parties located throughout the world and may be viewed and hosted anywhere in the world. You
            voluntarily consent to the transborder transfer and hosting of such information. When we transfer your
            Information to other countries, we will protect that information as described in this Privacy Policy
          </TypographyP>
        </section>
        <section>
          <TypographyH2>7. Is the information collected through our service secure?</TypographyH2>
          <TypographyP>
            We take precautions to protect the security of your information, we have physical, electronic, and
            managerial procedures to help safeguard, prevent unauthorized access, maintain data security and correctly
            use information. However, neither people nor security systems are foolproof including encryption systems in
            addition people can commit international crimes, make mistakes or fail to follow policies. Therefore, while
            we use reasonable efforts to protect your information, we cannot guarantee its absolute security. If
            applicable law imposes any non-disclaim able duty to protect your personal information, you agree that
            intentional misconduct will be the standards used to measure our compliance with that duty.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>8. How long do we keep your information?</TypographyH2>
          <TypographyP>
            We keep your information as long as we need it to provide services to you and fulfill the purposes described
            in this policy. This is also the case for anyone that we share your information with and who carries out our
            services on our behalf. When we no longer need to use your information and there is no need for us to keep
            it, we will either remove it from our systems or depersonalize it so that we can&apos;t identify you. we can
            keep your information based on criteria such as the type of products and services requested by or provided
            to you, your ability to claim rewards from our app, you have earned via our services, the nature and length
            of our relationship with you, possible re-enrollment with our products or services, the impact on the
            services we provide to you if we delete some information from or about you, mandatory retention periods
            provided by law and the statute of limitations.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>9. How do we protect your information?</TypographyH2>
          <TypographyP>
            We implement a variety of security measures to maintain the safety of your personal information when you
            enter or access your personal information in our application. We offer the use of a secure server. All
            supplied sensitive information is transmitted via secure socket layer (SSL) technology and then encrypted
            into our secure system only to be accessible by authorized personnel. We cannot however warrant absolute
            security of any information you transmit to us or guarantee that your information on the service may not be
            accessed, disclosed, altered or destroyed by a breach of any of our physical, technical or managerial
            safeguards. We have administrative, technical and physical safeguards that are intended to appropriately
            protect your Information against accidental or unlawful destruction, accidental loss, unauthorized
            alteration, unauthorized disclosure or access, misuse, and any other unlawful form of processing of the
            Personal Information in our possession.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>10. Sale of Business</TypographyH2>
          <TypographyP>
            We reserve the right to transfer information to a third party in the event of a sale, merger or other
            transfer of all or substantially all of the assets of us or any of its corporate affiliate to which the
            service relates, or in the event that we discontinue our business or file a petition or have filed against
            us a petition of bankruptcy, reorganization or similar proceeding, provided that the third party agree to
            adhere to the terms of this privacy policy.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>11. Your consent</TypographyH2>
          <TypographyP>
            By using our service, registering an account on Tyr rewards, you consent to this privacy policy.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>12. Links to other applications</TypographyH2>
          <TypographyP>
            This privacy policy applies only to the services. The service may contain install links of other
            applications not owned, operated or controlled by us. We are not responsible for the content, accuracy, or
            opinion expressed in such applications. And such applications are not investigated, monitored or checked for
            accuracy or completeness by us. Please remember that when you use a link from our service of another
            application, our privacy policy is no longer in effect.
          </TypographyP>
          <TypographyP>
            (For Android Users only)
            <strong>TyrSDK is a feature that is integrated with our app</strong>. TyrSDK allows users to earn rewards by
            playing third-party games and collects devices&apos; application usage from users and uploads it to their
            servers&nbsp;
            <Link className="text-link" href="https://api.tyrads.com" target="_blank">
              https://api.tyrads.com
            </Link>
            &nbsp;. The processing of the data is necessary to recommend, via offers, the installation of the apps
            available in TyrSDK that matches users&apos; interests and calculates the rewards acquired as a result of
            users&apos; use of the corresponding apps. For more information, please refer to the TyrSDK Privacy Policy.
            TyrSDK Privacy Policy - TyrAds
          </TypographyP>
        </section>
        <section>
          <TypographyH2>13. Cookies</TypographyH2>
          <TypographyP>
            We use cookies to identify the areas of our application you have visited. We use cookies to personalize the
            content that you see on our application. However, if you disable cookies, you may not be able to access
            functionality of our application correctly. We never place personally identifiable information in cookies.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>14. Advertising</TypographyH2>
          <TypographyP>
            Advertising keeps us and many of the applications and services you use free of charge. We work hard to make
            sure that ads are safe, unobtrusive, and as relevant as possible.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>15. Cookies for Advertising</TypographyH2>
          <TypographyP>
            Cookies help to make advertising more effective. Without cookies, it&apos;s really hard for an advertiser to
            reach its audience, or to know how many ads were shown and how many clicks they received.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>16. Kids&apos; Privacy</TypographyH2>
          <TypographyP>
            We do not address anyone under the age of 13. We do not knowingly collect personally identifiable
            information from anyone under the age of 13. If you are a parent or guardian and you are aware that your
            child has provided us with personal information please contact us, we become aware that we have collected
            personal data from anyone under the age of 13 without verification of parental consent. We take steps to
            remove that information from our servers.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>17. Changes to our Privacy Policy</TypographyH2>
          <TypographyP>
            If we decide to change our privacy policy, we will post those changes on this page, and/or update the
            privacy policy modification date below. Your continued use of our services and app after the effective date
            of any changes to this privacy policy will be deemed as your acceptance of those changes.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>18. Third party services</TypographyH2>
          <TypographyP>
            We may display, include or make third party content (including data, information, application and other
            product service) or provide links to third party website, applications or services (&quot;Third party
            services&quot;)
          </TypographyP>
          <TypographyP>
            You acknowledge and agree that we shall not be responsible for any third-party services, including their
            accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or the other
            aspect thereof. We do not assume and shall not have any liability or responsibility to you or any other
            person or entity for any third-party services.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>19. Information about General Data Protection Regulation (GDPR)</TypographyH2>
          <TypographyP>
            GDPR is data protection law for EU residents which regulates how European residents&apos; data shall be used
            by the companies. GDPR adds new requirements regarding how companies should protect individuals&apos;
            personal data that they collect and process. GDPR also imposes greater fines for the breach.
          </TypographyP>
          <TypographyP>
            We may be collecting and using information from you if you are from the European Economic Area (EEA). We
            legally collect data with your consent to fulfill certain purposes and we no longer hold it if it is not
            necessary for our purposes. People covered under GDPR can request for update, delete, and restrict data any
            time they want.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>20. Contact us</TypographyH2>
          <TypographyP>
            Don&apos;t hesitate to contact us if you have any questions. You have the right at any time to receive free
            information about the extent and content of the processing of your personal data by us. You also have the
            right to request from us the rectification, restriction of processing, or erasure of your personal data.
          </TypographyP>
          <TypographyP>
            In the event of data privacy violations, you also have the right to lodge a complaint with the competent
            supervisory authority.
          </TypographyP>
        </section>
        <div className="flex flex-col gap-1">
          <span>Legal Team,</span>
          <b>Tyr Rewards.</b>
          <br />
          <Link className="text-link" href="mailto:marketing@tyrrewards.com">
            Contact us: marketing@tyrrewards.com
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
