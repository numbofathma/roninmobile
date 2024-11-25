import React from 'react';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { IPageProps } from '@/interfaces/app';
import { getProjectBySlug } from '@/helpers/api';

interface IPolicyPage extends IPageProps {
  params: Promise<{ slug: string }>;
}

const PolicyPage = async ({ params }: IPolicyPage) => {
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
              url: `/project/${slug}`,
            },
            {
              item: (
                <>
                  HOME<span className='ml-1'>&#x27A4;</span>
                </>
              ),
              url: '/',
            },
          ]}
        />
        <div className='my-10'>
          <Header level={1} className='text-center text-3xl text-myBlue lg:text-left lg:text-4xl'>
            Privacy Policy
          </Header>
        </div>

        <div className='my-5 bg-dark bg-opacity-75'>
          <p className='text-justify'>
            {`This privacy policy is applicable to the "${projectTitle}" app (hereinafter referred to as "Application") for mobile devices, which was developed by
        Constantin Mirica (hereinafter referred to as "Service Provider") as a an Ad Supported service. This service is provided "AS IS".`}
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            What information does the Application obtain and how is it used?
          </Header>

          <Header level={3} className='text-md mb-3 text-left text-myBlue lg:text-lg'>
            User Provided Information
          </Header>
          <p className='text-justify'>
            The Application acquires the information you supply when you download and register the Application. Registration with the Service Provider
            is not mandatory. However, bear in mind that you might not be able to utilize some of the features offered by the Application unless you
            register with them.
          </p>
          <p className='text-justify'>
            The Service Provider may also use the information you provided them to contact you from time to time to provide you with important
            information, required notices and marketing promotions.
          </p>

          <Header level={3} className='text-md my-3 text-left text-myBlue lg:text-lg'>
            Automatically Collected Information
          </Header>
          <p>
            In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you
            use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet
            browsers you use, and information about the way you use the Application.
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Does the Application collect precise real time location information of the device?
          </Header>
          <p>This Application does not gather precise information about the location of your mobile device.</p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Do third parties see and/or have access to information obtained by the Application?
          </Header>

          <p className='text-justify'>
            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application
            and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy
            statement.
          </p>
          <p className='text-justify'>
            Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links
            to the Privacy Policy of the third-party service providers used by the Application:
          </p>
          <ul>
            <li>
              <a
                href='https://support.google.com/admob/answer/6128543?hl=en'
                className='text-myBlue hover:text-myRed'
                target='_blank'
                rel='noopener noreferrer'
              >
                AdMob
              </a>
            </li>
          </ul>
          <Header level={3} className='text-md my-3 text-left text-myBlue lg:text-lg'>
            The Service Provider may disclose User Provided and Automatically Collected Information:
          </Header>
          <ul className='m-4 list-disc md:m-7'>
            <li className='text-justify'>as required by law, such as to comply with a subpoena, or similar legal process;</li>
            <li className='text-justify'>
              when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others,
              investigate fraud, or respond to a government request;
            </li>
            <li className='text-justify'>
              with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them,
              and have agreed to adhere to the rules set forth in this privacy statement.
            </li>
          </ul>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            What are my opt-out rights?
          </Header>

          <p className='text-justify'>
            You can halt all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall
            processes as may be available as part of your mobile device or via the mobile application marketplace or network.
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Data Retention Policy, Managing Your Information
          </Header>
          <p className='text-justify'>
            {`The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. The Service
        Provider will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you'd like the
        Service Provider to delete User Provided Data that you have provided via the Application, please contact them at support@roninmobile.eu and we
        will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to
        function properly.`}
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Children
          </Header>
          <p className='text-justify'>
            The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
          </p>
          <p className='text-justify'>
            The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable
            information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal
            information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that
            your child has provided us with personal information, please contact the Service Provider (support@roninmobile.eu) so that they will be
            able to take the necessary actions.
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Security
          </Header>

          <p className='text-justify'>
            The Service Provider are concerned about safeguarding the confidentiality of your information. The Service Provider provide physical,
            electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to
            authorized employees and contractors who need to know that information in order to operate, develop or improve their Application. Please
            be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent
            all potential security breaches.
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Changes
          </Header>
          <p className='text-justify'>
            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy
            Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as
            continued use is deemed approval of all changes.
          </p>

          <p className='my-3'>This privacy policy is effective as of 2024-11-01.</p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Your Consent
          </Header>
          <p className='text-justify'>
            {`By using the Application, you are giving your consent to the Service Provider processing of your information as set forth in this Privacy
        Policy now and as amended by us. "Processing,” means using cookies on a computer/hand held device or using or touching information in any way,
        including, but not limited to, collecting, storing, deleting, using, combining and disclosing information.`}
          </p>

          <Header level={2} className='mb-3 mt-10 text-left text-lg text-myBlue lg:text-2xl'>
            Contact us
          </Header>
          <p className='text-justify'>
            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service
            Provider via email at support@roninmobile.eu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
