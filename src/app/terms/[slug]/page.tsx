import { cache } from 'react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { IPageProps } from '@/interfaces/app';
import { getMetadataInfo, getProjectBySlug } from '@/helpers/api';
import { LangVars } from '@/constants/lang';

interface ITermsPagePage extends IPageProps {
  params: Promise<{ slug: string }>;
}

const getProjectBySlugCached = cache(getProjectBySlug);

export const generateMetadata = async ({ params }: ITermsPagePage): Promise<Metadata> => {
  const { slug } = await params;
  const { description } = LangVars.Metadata;
  const { title } = LangVars.Terms;

  return await getMetadataInfo(slug, { title, description }, getProjectBySlugCached);
};

const TermsPage = async ({ params }: ITermsPagePage) => {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project?.slug) {
    redirect('/');
  }

  const { title: projectTitle } = project;

  return (
    <div className='flex h-full min-h-full flex-col'>
      <div className='container m-auto max-w-screen-xl px-7 py-5'>
        <Navigation
          links={[
            {
              item: (
                <>
                  <span className='mr-1 inline-block rotate-180'>&#x27A4;</span>BACK
                </>
              ),
              title: `Return to "${projectTitle}" project`,
              url: `/project/${slug}`,
            },
            {
              item: (
                <>
                  HOME<span className='ml-1'>&#x27A4;</span>
                </>
              ),
              title: 'Return to the homepage',
              url: '/',
            },
          ]}
          className='justify-between'
        />
        <div className='my-10'>
          <Header level={1} className='text-center text-3xl text-myBlue lg:text-left lg:text-4xl'>
            Terms &amp; Conditions
          </Header>
        </div>

        <div className='my-5 bg-dark bg-opacity-75'>
          <p className='text-justify'>
            {`These terms and conditions applies to the ${projectTitle} app (hereby referred to as "Application") for mobile devices that was created by Constantin Mirica (hereby referred to as "Service Provider") as an Ad Supported service.`}
          </p>

          <p className='my-3 text-justify'>
            Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you
            thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part
            of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the
            Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other
            intellectual property rights related to the Application remain the property of the Service Provider.
          </p>

          <p className='my-3 text-justify'>
            The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the
            right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any
            charges for the Application or its services will be clearly communicated to you.
          </p>

          <p className='my-3 text-justify'>
            In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you
            use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet
            browsers you use, and information about the way you use the Application.
          </p>

          <p className='my-3 text-justify'>
            {`The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is
            your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against
            jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system
            of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features,
            and may result in the Application not functioning correctly or at all.`}
          </p>

          <p className='my-3 text-justify'>
            Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms
            and Conditions of the third-party service providers used by the Application:
          </p>
          <ul>
            <li>
              <a href='https://developers.google.com/admob/terms' className='text-myBlue hover:text-myRed' target='_blank' rel='noopener noreferrer'>
                AdMob
              </a>
            </li>
          </ul>

          <p className='my-3 text-justify'>
            Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an
            active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held
            responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data
            allowance.
          </p>

          <p className='my-3 text-justify'>
            {`If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply.
            Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other
            third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use
            the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for
            the device on which you are using the application, they assume that you have obtained permission from the bill payer.`}
          </p>

          <p className='my-3 text-justify'>
            Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your
            responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service,
            the Service Provider cannot be held responsible.
          </p>

          <p className='my-3 text-justify'>
            {`In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to
            ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it
            available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying
            entirely on this functionality of the application.`}
          </p>

          <p className='my-3 text-justify'>
            The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for
            the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you
            will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will
            always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on
            your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to
            cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you
            otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the
            application, and (if necessary) delete it from your device.
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Changes to These Terms and Conditions
          </Header>

          <p className='text-justify'>
            The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any
            changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
          </p>

          <p className='my-3 text-justify'>These terms and conditions are effective as of 2025-12-01.</p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Contact Us
          </Header>

          <p className='text-justify'>
            If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at
            support@roninmobile.eu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
