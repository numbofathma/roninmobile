import React from 'react';

export const LangVars = {
  Metadata: {
    name: 'Ronin Mobile',
    title: 'Ronin Mobile - Hyper-Casual games for web & mobile',
    description: 'We are Ronin Mobile. We build hyper-casual game for web & mobile. Check out our portfolio!',
    keywords: 'indie games, hyper-casual games, mobile games, indie game developer, indie game studio, hypercasual',
  },
  Labels: {
    contactForm: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      text: 'Your Message',
    },
  },
  Placeholders: {
    contactForm: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      text: 'Message',
    },
  },
  Buttons: {
    contactForm: {
      actionButtonText: 'SEND',
    },
  },
  About: {
    question: (
      <>
        {'Hyper-Casual Games'}
        <span className='text-myRed'>?</span>
      </>
    ),
    punchline: (
      <>
        {`You've come to the `}
        <span className='font-extrabold text-myBlue'>right</span> place!
      </>
    ),
    whatWeDo: "With more than 15 years of experience in software development, we aim to deliver awesome games for your company's marketing campaigns",
  },
  OurWork: {
    sectionTitle: (
      <>
        <span className='text-myRed'># </span>
        {`Check out some of our work`}
      </>
    ),
    itemTitle: (
      <>
        {
          'Our games boast a modular design, making them effortlessly adaptable for re-skinning, reusing, or further development within your own company.'
        }
        <br />
        {
          'This flexibility empowers developers to swiftly customize and iterate upon our creations, aligning each game seamlessly with your vision and objectives.'
        }
      </>
    ),
    projectTitlePrefix: 'Check out some in-game screenshots from ',
  },
  Contact: {
    sectionTitle: (
      <>
        <span className='text-myRed'># </span>
        {`Getting in touch is easy`}
      </>
    ),
    itemTitle: `Send us a message or an e-mail if you are interested in working together.`,
  },
  Validation: {
    General: {
      mock: 'Good luck, bro!',
      general: 'Error occured while sending your message!',
    },
    Recaptcha: {
      recaptchaInitFailure: 'reCAPTCHA could not be initialized. Please refresh the page or try again later.',
      verificationFailure: 'reCAPTCHA verification failed. If this is a mistake, please contact us directly at ###{contactEmail}###.',
      missingToken: 'reCAPTCHA verification failed. Please refresh the page or try again later.',
    },
    DomainValidator: {
      notFound: 'Domain could not be extracted',
      couldNotResolve: 'Unknown DNS resolve',
    },
    EmailValidator: {
      invalidEmail: 'Please type a valid email address.',
      exampleEmail: 'Please provide a different email address.',
      tempEmail: 'Please do not use a temp mail address. Thanks!',
    },
    NameValidator: {
      shortName: "Ooops! Is this really your name? It's a bit short.",
      longName: "Ooops! Is this really your name? It's a bit long.",
      invalidName: 'Ooops! Is this really your name?',
    },
  },
  Constraints: {
    TextValidator: {
      Default: {
        min: 'The input should be at least ###{min}### characters.',
        max: 'The input should have a maximum of ###{max}### characters.',
      },
    },
    ContactFormValidator: {
      TextValidator: {
        min: "Don't be shy, say more than just 'Hello!'.",
        max: 'Wow! Your message is a bit too long. Maybe we should schedule a meeting.',
      },
    },
  },
  Alerts: {
    emailSuccess: {
      title: 'Email sent! ',
      value: 'We will get back to you shortly!',
    },
    emailFailure: {
      title: 'Oops...',
      value: "Couldn't send your message! Please try again later or try using another email address!",
    },
  },
};
