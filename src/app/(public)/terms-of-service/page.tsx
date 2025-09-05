import Link from 'next/link';

import type { Metadata } from 'next';

import Footer from '@/components/layout/footer';
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default async function TermsOfServicePage() {
  return (
    <>
      <main className="mx-auto flex flex-col gap-10 p-8 max-w-screen-responsive">
        <TypographyH1>Terms of Service</TypographyH1>
        <span className="text-muted-foreground">Last updated on 13-07-2023</span>
        <section>
          <TypographyH2>Terms of Service</TypographyH2>
          <TypographyP>
            Welcome to Tyr Rewards! By using our app, you agree to these terms of service (“Terms”). Please read them
            carefully before using our app.
          </TypographyP>
          <TypographyP>
            These Terms constitute a binding contract between you, an individual user (&quot;you&quot;) and the Company
            (&quot;we&quot; &quot;us&quot; or &quot;our&quot;) who owns the Tyr Rewards app you are using for the
            Service (as defined below). BY ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTOOD, AND
            AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU MUST NOT ACCESS OR USE THE
            SERVICE. you consent to the collection, use, and disclosure of your information in accordance with the Tyr
            Rewards Privacy Policy located at https://tyrrewards.com/privacy-policy/(“Privacy Policy”); The Service is
            provided “AS IS” without warranties of any kind and Tyr rewards&apos;s liability to you is limited; We will
            resolve disputes arising under these Terms through binding arbitration. By accepting these Terms, as
            provided in greater detail in Section 17 of these Terms, you are waiving the right to a trial by jury or to
            participate in a class action lawsuit
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Description of Our App:</TypographyH2>
          <TypographyP>
            Tyr Rewards&nbsp;
            <strong>is a mobile application that allows users to earn rewards by playing free mobile games</strong> etc.
            Users can earn points by completing a variety of challenges, such as installing a game, completing a task,
            or even watching a video. Once users have enough points, they can redeem them for a wide variety of rewards.
            Such rewards may include, but are not limited to, cruise, a gift card, or even cash.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Service Description</TypographyH2>
          <TypographyP>
            The “Service” refers to the service provided by Tyr Rewards, accessible via the mobile application (the
            “App”). The Service allows Users (as defined in Section 2.1) to earn rewards by completing certain actions
            or tasks, such as playing or installing a game, watching a video etc , as determined by Tyr reward app.
            Users can redeem their earned rewards for gift cards or cash offered by Tyr rewards. Additionally, the App
            may offer a feature that allows Users to track their rewards, view their transaction history, and manage
            their account information. Tyr Rewards reserves the right to modify or discontinue the Service, or any part
            thereof, at any time without notice or liability to Users. The Service may also be subject to additional
            terms and conditions, as determined by Tyr Rewards from time to time.
          </TypographyP>
          <TypographyP>
            Please note that the availability of certain rewards or other benefits may vary by location, and Tyr Rewards
            makes no guarantees or representations regarding the availability of any particular reward or benefit in any
            specific way or location. By using the Service, Users agree to be bound by these Terms of Service and any
            additional terms and conditions applicable to the Service. Users understand and agree that Tyr Rewards may
            change these Terms at any time without prior notice. The revised Terms will become effective at the time of
            posting on the Service, and your use of the Service after such time will constitute your acceptance of the
            revised Terms. If any change to these Terms is not acceptable to you, then your sole remedy is to stop using
            the Service and terminate your Account.
          </TypographyP>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <TypographyH3>• Consideration</TypographyH3>
              <TypographyP className="ml-5">
                we will provide you with access to the Service for free. In return for enjoying free access to all or
                any portions of the Service, you acknowledge and agree that we may generate revenues, increase goodwill
                or otherwise increase the value of Tyr Rewards from your use of the Service, including, but not limited
                to, through the collection of data and by displaying or performing advertising of any form (e.g.,
                audio-only, display, audiovisual), and, except for your right to earn Points for use of the Service, you
                will otherwise have no right to share in any such revenues, goodwill or value whatsoever.
              </TypographyP>
            </div>
            <div>
              <TypographyH3>• Privacy Policy</TypographyH3>
              <TypographyP className="ml-5">
                Your use of the Service is subject to Tyr Rewards Privacy Policy, which is incorporated into these Terms
                by reference. By accepting these Terms, you acknowledge and consent to the terms of Tyr Rewards Privacy
                Policy.
              </TypographyP>
            </div>
            <div>
              <TypographyH3>• Links to Third Party Sites</TypographyH3>
              <TypographyP className="ml-5">
                You may be transferred to online apps or other third party sites through links or frames from your use
                of the Services, including through direct offers or our offer wall. The Services may provide links to
                third party sites, which are not monitored or reviewed by us. Any purchases you make on these sites are
                through other websites and from other companies, and we are not responsible for any inaccuracies,
                misrepresentations, or liabilities resulting from your use of such sites. We do not sponsor, endorse, or
                recommend these sites, and we are not responsible for the products, services, or any other aspect of
                their contents or transmissions. It is your sole responsibility to carefully read the terms and
                conditions of use for each website you visit
              </TypographyP>
              <TypographyP className="ml-5">
                The Service is or may be made available through connected mobile devices (e.g., phones, tablets),
                (collectively, “Mobile Services”). When using the Service through Mobile Services, your Internet Service
                Provider (“ISP”) or mobile carrier&apos;s normal data, messaging and other fees and rates will apply,
                and you are solely responsible for paying such fees and rates. Further, downloading, installing or using
                certain Mobile Services may be prohibited or restricted by your mobile carrier, and not all Mobile
                Services may work with all carriers or devices. You are therefore solely responsible for confirming with
                your ISP or mobile carrier whether the Mobile Services are available to you and your devices, what
                restrictions, if any, may be applicable to your use of the Mobile Services, and what the cost will be to
                you for the Mobile Services
              </TypographyP>
            </div>
            <div>
              <TypographyH3>• Eligibility</TypographyH3>
              <TypographyP className="ml-5">
                <strong>
                  THE SERVICE IS NOT FOR PERSONS UNDER THE AGE OF 13. IN ALL CASES, THE SERVICE IS NOT FOR ANY USERS
                  PREVIOUSLY SUSPENDED OR REMOVED FROM THE SERVICE BY US.
                </strong>
                &nbsp;Furthermore, by using the Service, you affirm that either you are above 13 years of age or have
                been authorised to use the Service by your parent or legal guardian who is at least 18 years of age and
                entered into these Terms on your behalf.
              </TypographyP>
            </div>
          </div>
        </section>
        <section>
          <TypographyH2>User Accounts</TypographyH2>
          <TypographyP>
            To use certain features of our app, you may need to create a user account and add some of your information.
            You acknowledge that in the event you provide any information to us that is untrue, inaccurate, out of date,
            or incomplete, we may terminate these Terms and your continued access to and use of the Service at any time
            and without any liability to you. If we attempt to communicate with you via email and the message is
            rejected as undeliverable, then we may suspend or terminate your account at our sole discretion and without
            any liability to you. So please be sure to keep your information true. Furthermore, You are responsible for
            maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </TypographyP>
          <TypographyP>
            You are responsible for keeping your password confidential and for notifying us if your password has been
            hacked or stolen. If you believe that your account has been compromised, please contact us immediately. We
            will not be liable for any loss that you may incur as a result of someone else using your Account or
            password, either with or without your knowledge. You may be held liable for any losses incurred by us or
            another party due to someone else using your Account or password.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Data Usage</TypographyH2>
          <TypographyP>
            The User shall Enable data usage before the registration of the app, this is how our app will manage to
            track user&apos;s progress when playing mobile games or completing tasks. Users grant their consent before
            completing the registration process. Users cannot use the app if they do not enable data usage
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Credentials</TypographyH2>
          <TypographyP>
            As part of the registration process, your account will be registered by the basic information you provide to
            us, including your name and email address. We reserve the right, in our sole discretion, to disallow,
            cancel, remove, suspend or terminate your Account, without liability to you or any third party, and with or
            without prior notice to you including, without limitation, if activities occur on your Account that we
            believe would or might constitute a violation of these Terms, cause damage to or impair the Service,
            infringe or violate any third party rights, damage or bring into disrepute the reputation of our App, or
            violate any applicable laws or regulations. You are responsible for all use of the Service occurring under
            your Account
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Intellectual Property and License&apos;s</TypographyH2>
          <TypographyP>
            All content and materials available on our app, including without limitation text, graphics, logos, icons,
            images, audio clips, video clips, data compilations, and software, are the property of Tyr Rewards or our
            affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. You
            may not use any of our content or materials without our express written permission. By using the Service,
            you acknowledge and agree that the Proprietary Materials, which include the Service, any content accessible
            through the Service, and all intellectual property rights therein, are owned by us and our licensors or
            third-party services whose content is accessible from or through the Service. You also acknowledge that the
            Proprietary Materials may contain valuable copyrighted and proprietary material belonging to us, our
            licensors, or third-party owners, and that the Service and Proprietary Materials are licensed to you, rather
            than sold, pursuant to these terms.
          </TypographyP>
          <TypographyP>
            As part of the Service, we display our trademarks, service marks, design marks, or other indicia of origin
            (“Marks”). You acknowledge our ownership of the Marks and agree not to challenge their validity or our
            ownership thereof. Additionally, you agree not to use the Marks or any Third Party Marks to disparage us,
            any third party owner of the Third Party Marks, or their products or services.
          </TypographyP>
          <TypographyP>
            Subject to your ongoing compliance with these terms, we grant you a limited, revocable, non-exclusive,
            non-transferable, non-sublicensable, and royalty-free licence to access and use the Service for your
            non-commercial use and strictly in the manner set forth in these terms. The Service is solely for your
            personal use and not for resale. We reserve the right to restrict or terminate your access to the Service
            and to modify or discontinue the Service, in whole or in part, at any time and without notice to you. You
            acknowledge and agree that we will not be liable to you or any third party for any modification, suspension,
            or discontinuance of the Service.
          </TypographyP>
          <TypographyP>
            These terms restrict your use of the Proprietary Materials, Marks, and Third Party Marks. You may not sell,
            transfer, assign, licence, sublicense, or modify the Proprietary Materials, Marks, or Third Party Marks.
            Additionally, you may not reproduce, display, publicly perform, make a derivative version of, distribute, or
            otherwise use the Proprietary Materials, Marks, or Third Party Marks for any public or commercial purpose
            without our prior written consent.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>User&apos;s or Your responsibility</TypographyH2>
          <TypographyP>
            You agree to use it solely for lawful purposes and only as intended through the provided functionality of
            the Service. You must not use the Service in any manner that could damage, disable, overburden, or impair
            our servers or networks, or interfere with any other party&apos;s use and enjoyment of the Service.
            Additionally, you must not attempt to gain unauthorised access to the Service, user accounts, or computer
            systems or networks through hacking, password mining, or any other means.
          </TypographyP>
          <TypographyP>
            You are not permitted to use, copy, install, transfer, or distribute the Service except as specifically
            permitted by these terms and conditions. You must not modify, adapt, translate, reverse engineer, decompile,
            or disassemble any portion of the Service or its content. You also may not remove or alter any copyright,
            trademark, or other proprietary rights notices contained in or on the Service or in or on any content
            obtained through the Service.
          </TypographyP>
          <TypographyP>
            Creating user accounts by automated means or under false or fraudulent pretences is not allowed. You must
            not use any robot, spider, screen or database scraper, site search or retrieval application, or other
            automated device, process, or means to access, retrieve, or index any portion of the Service or any content
            available through the Service. You also must not use any automated means or create multiple accounts to
            engage with the Service in an attempt to artificially increase your consumption of content on the Service or
            to obtain reward points. Probing, scanning, or testing the vulnerability of any system or network or
            breaching any security or authentication measures is not allowed.
          </TypographyP>
          <TypographyP>
            You are not permitted to reformat, mirror, or frame any portion of the web pages or web services that are
            part of the Service. Additionally, you must not express or imply that any statements you make are endorsed
            by us, without our prior written consent in each instance.
          </TypographyP>
          <TypographyP>
            You must not transmit any objectionable content, which is defined as abusive, defamatory, libellous,
            fraudulent, obscene, threatening, unlawful, or otherwise objectionable content. Furthermore, you must not
            transmit any material, non-public information about individuals or companies without the authorization to do
            so, any trade secret of any third party, and/or any unsolicited commercial communication, or engage in
            spamming or flooding. Transmitting any software or other materials that contain any virus, worm, time bomb,
            Trojan horse, or other harmful or disruptive component is prohibited.
          </TypographyP>
          <TypographyP>
            Harvesting or collecting information about other users without their prior written consent, accessing
            non-public areas of the Service, its hosting company&apos;s computer systems and infrastructure, or the
            technical delivery systems of providers, or using the Service to contact other users for sexual or other
            inappropriate purposes, are all activities that are not allowed.
          </TypographyP>
          <TypographyP>
            You are prohibited from violating any applicable federal, state, or local laws, applicable regulations, or
            these terms and conditions. You also must not use or access the Service to build a competing service, or
            assist, encourage, or permit any person in engaging in any of the activities described above.
          </TypographyP>
          <TypographyP>
            We reserve the right to take any legal action and implement any technical remedies to prevent the violation
            of these provisions and to enforce these terms and conditions. We may disclose violations of these terms and
            conditions to governmental authorities in our sole discretion in order to enforce our rights, the rights of
            third parties, or to prevent injury or harm to any person.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Consent to Electronic Communications</TypographyH2>
          <TypographyP>
            By using the Service or providing Personal Information (as defined in the Privacy Policy) to us, you agree
            to be subscribed to our marketing emails. These emails may include promotional offers, product updates, and
            other relevant information. You also agree that we may communicate with you electronically (e.g., by posting
            a notice on the Service or sending emails to you) regarding marketing, security, privacy, and administrative
            issues relating to your use of the Service as well as to keep you informed about the Service. If we learn of
            a security system&apos;s breach, then we may attempt to notify you electronically by Posting a notice on the
            Service or sending an email to you, if we have your email address. You may have a legal right to receive
            this notice in writing.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>User Content</TypographyH2>
          <TypographyP>
            Our app may allow you to upload or submit content, such as photos, videos, or comments (“User Content”). You
            retain all rights in, and are solely responsible for, the User Content that you submit. By submitting User
            Content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide licence to use,
            copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and
            otherwise exploit in any manner such User Content in all formats and distribution channels now known or
            hereafter devised. The opinions expressed on the Service by Users reflect solely the opinions of the Users
            who Post thereon and do not reflect the opinions of Tyr Rewards. we do not guarantee the accuracy,
            integrity, appropriateness, availability or quality of any User Content, and under no circumstances we will
            be liable in any way for any User Content.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Prohibited Activities</TypographyH2>
          <TypographyP>
            You agree not to engage in any of the following activities in connection with your use of our app:
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3">
            <li>Violating any applicable law or regulation;</li>
            <li>
              Violating the rights of any third party, including intellectual property, privacy, or publicity rights;
            </li>
            <li>Transmitting any viruses, malware, or other harmful code;</li>
            <li>
              Interfering with the operation of our app, including by hacking or defacing any portion of our app or
              attempting to probe, scan, or test the vulnerability of our app or any system or network; or
            </li>
            <li>
              Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with
              a person or entity.
            </li>
            <li>Device ID Reset: Resetting your device ID on the same account.</li>
            <li>
              Cheating:The use of cheats or cheating software to complete game levels is strictly forbidden.If we detect
              the use of cheating software, your account will be immediately banned.
            </li>
            <li>Auto Clickers are specifically not allowed.</li>
            <li>
              Ad Avoidance: Deliberately turning off your internet connection to avoid viewing ads is not permitted.
              Engaging in this behaviour may result in the banning of your account.
            </li>
            <li>
              VPN Usage: Using a VPN to play games outside of your designated region is prohibited. If you use a VPN,
              our system will not reward you with points.
            </li>
            <li>
              Secure Folder Usage: Do not use a Secure folder or similar methods to reset your account or re-download
              apps.
            </li>
          </ul>
          <TypographyP>
            If we detect fraudulent activity through our internal tools, it will not be considered as completing an
            event. Users who attempt to commit fraud will not be eligible to claim rewards, and we reserve the right to
            take appropriate action.
          </TypographyP>
          <TypographyP>
            If any user in our system is blocked due to suspicious activity, prohibited activities, or rule violations,
            they may have the option to reactivate their account by verifying their identity. To do so, they will need
            to provide one of the following identification documents:
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3">
            <li>Passport</li>
            <li>ID Card</li>
            <li>Driver&apos;s Licence</li>
            <li>Resident Permit</li>
          </ul>
          <TypographyP>
            At our sole discretion, we may require ID verification to verify your account.The purpose of this
            verification process is to maintain the integrity of our platform and ensure a safe environment for all
            users. By complying with the identity verification request, users may have the opportunity to reactivate
            their account.
          </TypographyP>
          <TypographyP>
            However, please be aware that the decision to reactivate an account after verification is at the discretion
            of our team. We reserve the right to deny reactivation if we determine that the user&apos;s actions have
            severely violated our rules or if there are other valid reasons to do so.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Duration and Termination</TypographyH2>
          <TypographyP>
            These Terms will become effective on the date you first access or use the Service and will continue as long
            as you access or use the Service. We reserve the right to take appropriate legal actions in response to any
            actual or suspected violations of these Terms, which may include suspending or terminating your access to
            the Service or blocking your account. We may cooperate with legal authorities or third parties in
            investigating any suspected crimes or civil wrongs. We also reserve the right to disclose any necessary
            information to comply with applicable laws or governmental requests or to edit, remove, or refuse to post
            any information or materials at our sole discretion, unless limited by the Privacy Policy.
          </TypographyP>
          <ul className="ml-5 mt-3 flex list-disc flex-col gap-3">
            <li>
              Termination. We may terminate your account at any time with or without notice if you breach these Terms.
              If your account has any associated reward points, we may also forfeit them.
            </li>
            <li>
              Consequences of Termination. Upon termination, your account will be terminated, and any information
              related to your account will be subject to our data retention practices as described in our Privacy Policy
            </li>
            <li>
              Survival. The following Sections of these Terms will survive termination or expiration of these Terms:
              5,7,8,10
            </li>
          </ul>
        </section>
        <section>
          <TypographyH2>Disclaimer of Warranties</TypographyH2>
          <TypographyP className="font-semibold">TO THE FULLEST EXTENT PERMITTED BY LAW:</TypographyP>
          <ul className="ml-5 mt-3 list-disc">
            <li>
              11.1 THE SERVICE IS PROVIDED “AS IS” WITH ALL FAULTS, AND THE ENTIRE RISK AS TO SATISFACTORY QUALITY,
              PERFORMANCE, ACCURACY, AND EFFORT IS WITH YOU. YOU ACKNOWLEDGE THAT, BECAUSE OF THE NATURE OF THE
              INTERNET, MOBILE NETWORKS, AND THE DEVICES WHICH ACCESS THE INTERNET AND/OR MOBILE NETWORKS, THE SERVICE
              MAY NOT BE ACCESSIBLE WHEN NEEDED, AND THAT INFORMATION, DATA, AUDIO, AND VIDEO TRANSMITTED OVER THE
              INTERNET AND/OR MOBILE NETWORKS MAY BE SUBJECT TO INTERRUPTION OR THIRD PARTY INTERCEPTION AND
              MODIFICATION. WE DISCLAIMS ANY AND ALL WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
              LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              QUIET ENJOYMENT, ACCURACY OF INFORMATIONAL CONTENT, OR NON-INFRINGEMENT; AND ANY WARRANTY ARISING OUT OF A
              COURSE OF DEALING, USAGE, OR TRADE. WE DO NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE OR
              ANY CONTENT OFFERED THROUGH THE SERVICE, WILL BE SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL
              COMPONENTS, AND WE DO NOT WARRANT THAT ANY OF THOSE WILL BE CORRECTED. WE DO NOT WARRANT THE ACCURACY,
              COMPLETENESS, OR TIMELINESS OF THE SERVICE. WE CANNOT AND DOES NOT ASSUME ANY RESPONSIBILITY FOR ANY LOSS,
              DAMAGES, OR LIABILITIES ARISING FROM THE FAILURE OF ANY TELECOMMUNICATIONS INFRASTRUCTURE OR THE INTERNET,
              OR FOR YOUR MISUSE OF ANY OF CONTENT AND INFORMATION ACCESSED THROUGH THE SERVICE. WE ARE NOT RESPONSIBLE
              FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF THE SERVICE AND YOUR DEALING WITH ANY OTHER USER. YOU
              EXPRESSLY AGREE THAT YOUR USE OF THE SERVICE AND YOUR RELIANCE UPON ANY OF THE PROPRIETARY MATERIALS, THE
              SERVICE, OR THE CONTENTS THEREOF IS AT YOUR SOLE RISK AND THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO
              YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICE) OR ANY
              LOSS OF DATA, INCLUDING USER CONTENT
            </li>
          </ul>
        </section>
        <section>
          <TypographyH2>LIMITATION OF LIABILITY:</TypographyH2>
          <ul className="ml-5 mt-3 list-disc">
            <li>
              <TypographyP>
                EACH USER IS RESPONSIBLE FOR (I) THEIR USE OF THE SERVICE; AND (II) ANY DAMAGES INCURRED BY THEM OR A
                THIRD PARTY RELATED TO THE SERVICE. OUR AGGREGATE LIABILITY FOR DAMAGES ARISING IN CONTRACT, TORT, OR
                ANY OTHER THEORY OF LIABILITY WILL BE LIMITED TO ACTUAL DAMAGES PROVEN, AND WILL NOT EXCEED THE AMOUNT
                PAID FOR THE SERVICE. TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR PUNITIVE,
                SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                YOU REPRESENT THAT YOU HAVE INVESTIGATED THE RISKS INVOLVED IN USING THE SERVICE AND AGREE TO MAINTAIN
                YOUR OWN INSURANCE COVERING SUCH RISKS. YOU WILL LOOK SOLELY TO SUCH INSURANCE FOR REIMBURSEMENT OF ANY
                RESULTING DAMAGES.
              </TypographyP>
            </li>
          </ul>
        </section>
        <section>
          <TypographyH2>Force Majeure</TypographyH2>
          <TypographyP>
            We shall not be liable for any failure or delay in performing our obligations under these if such failure or
            delay is caused by any event or circumstance beyond our reasonable control, including but not limited to
            acts of God, war, terrorism, civil unrest, natural disasters, pandemic, governmental regulations, power
            failures, or communication or network failures. In the event of such force majeure, we will use reasonable
            efforts to minimise the impact of such an event or circumstance and to resume performance of our obligations
            as soon as reasonably possible.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>THIRD PARTY DISPUTES</TypographyH2>
          <TypographyP>
            WE ARE NOT AFFILIATED WITH ANY CARRIER, SERVICE PROVIDER, OR THIRD PARTY SERVICE, AND ANY DISPUTE YOU HAVE
            WITH ANY CARRIER, SERVICE PROVIDER, THIRD PARTY SERVICE, OR OTHER THIRD PARTY ARISING FROM YOUR USE OF THE
            SERVICE, INCLUDING, WITHOUT LIMITATION, ANY OTHER USER, IS DIRECTLY BETWEEN YOU AND SUCH THIRD PARTY, AND
            YOU IRREVOCABLY RELEASE US AND OUR AFFILIATES AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS,
            LICENSORS, AND ASSIGNS (THE “US PARTIES”) FROM ANY AND ALL CLAIMS, DEMANDS, AND DAMAGES (ACTUAL AND
            CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH
            DISPUTES.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>THIRD PARTY SERVICES</TypographyH2>
          <TypographyP>
            THE SERVICE MAY INCLUDE CONTENT, PRODUCTS, AND SERVICES PROVIDED BY THIRD PARTIES, AS WELL AS LINKS TO THIRD
            PARTY CONTENT AND WEBSITES, FOR THE CONVENIENCE OF USERS. WE DO NOT CONTROL THESE THIRD PARTY SERVICES AND
            THEIR CONTENT, AND DO NOT MAKE ANY EXPRESS OR IMPLIED WARRANTIES ABOUT THEM. WE DO NOT ENDORSE, SPONSOR, OR
            AFFILIATE WITH ANY THIRD PARTY OR THEIR CONTENT, PRODUCTS, OR SERVICES, AND MAY REMOVE LINKS AT OUR SOLE
            DISCRETION. YOU USE THIRD PARTY SERVICES AT YOUR OWN RISK AND SHOULD CHOOSE CAREFULLY IF OFFENSIVE CONTENT
            IS A CONCERN. YOU ARE RESPONSIBLE FOR COMPLYING WITH THIRD PARTY SERVICE REQUIREMENTS. WE ARE NOT LIABLE FOR
            YOUR USE OF THIRD PARTY SERVICES AND YOU INDEMNIFY US FOR ANY LIABILITY ARISING FROM IT.
          </TypographyP>
        </section>
        <section>
          <TypographyH2>Dispute Resolution</TypographyH2>
          <TypographyP>
            Any dispute, controversy or claim arising out of or in connection with these terms or its subject matter or
            formation (including non-contractual disputes or claims) shall be governed by and construed in accordance
            with the laws of Singapore. Any dispute arising or in connection with these terms will be resolved through
            friendly consultation between the parties. In case no settlement can be reached, the disputes will be
            submitted to the Singapore International Arbitration Centre (“SIAC”) for arbitration according to the then
            effective rules of SIAC. The arbitration shall take place in Singapore. The arbitration proceedings shall be
            conducted in English. The number of arbitrators shall be three. These terms shall be governed by and
            construed in accordance with the laws of Singapore.
          </TypographyP>
          <TypographyP>
            These Terms constitute the entire terms of service between us and you regarding the Service, and supersede
            all previous oral and written communications. We may change these terms time to time without any prior
            notice to you. Your continued use of the service constitutes your ongoing acceptance of these terms of
            service.We reserves the right to deny access, suspend or terminate any User which does not comply with these
            Terms of service, at its sole discretion.If any provision is held invalid or unenforceable, it will be
            modified or severed to reflect the intent of the parties, and the remaining provisions will not be affected.
          </TypographyP>
          <TypographyP>
            These Terms do not create an employer-employee, agency, joint venture, or partnership relationship. Failure
            to exercise any right or remedy provided herein will not be deemed a waiver.
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
