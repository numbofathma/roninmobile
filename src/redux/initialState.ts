import * as Brand from '@fortawesome/free-brands-svg-icons';
import * as Icon from '@fortawesome/free-regular-svg-icons';
import { State } from './state';

const initialState: State = {
  projects: [
    {
      title: 'PAWs! - Live to purr',
      slug: 'paws-live-to-purr',
      description: 'PAWs! is an HTML5 canvas game built with JavaScript and the Phaser Framework. PAWs\' gameplay is unique throughout the '
                + 'market, it combines elements of and arcade game with ones of a puzzle game, resulting a fast-paced game that will test your '
                + 'attention, focus and adaptability to the max.',
      image: '/static/img/apps/paws.png',
      featured: [
        {
          title: 'Game Dev Academy',
          url: 'https://gamedevacademy.org/student-success-interview-with-paws-creator-costin-mirica/',
        },
      ],
      links: {
        googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.paws',
        appStore: 'https://itunes.apple.com/us/app/paws!-live-to-purr/id989570749',
        mobileGooglePlay: 'market://details?id=eu.roninmobile.paws',
        mobileAppStore: 'itms-apps://itunes.apple.com/us/app/paws!-live-to-purr/id989570749',
        facebook: '',
        website: 'http://playpaws.eu',
      },
      portfolio: [
        '/static/portfolio/playpaws/1.jpg',
        '/static/portfolio/playpaws/2.jpg',
        '/static/portfolio/playpaws/3.jpg',
        '/static/portfolio/playpaws/4.jpg',
        '/static/portfolio/playpaws/5.jpg',
        '/static/portfolio/playpaws/6.jpg',
        '/static/portfolio/playpaws/7.jpg',
      ],
      portfolioSettings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    },
    {
      title: 'Save Christmas: Gift Rush',
      slug: 'save-christmas-gift-rush',
      description: 'Christmas-themed game, developed using Typescript and the Phaser Framework, available on both Android and iOS platform.',
      image: '/static/img/apps/giftrush.png',
      featured: [],
      links: {
        googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.giftrush',
        appStore: 'https://itunes.apple.com/us/app/save-christmas-gift-rush/id1069632749',
        mobileGooglePlay: 'market://details?id=eu.roninmobile.giftrush',
        mobileAppStore: 'itms-apps://itunes.apple.com/us/app/save-christmas-gift-rush/id1069632749',
        facebook: '',
        website: 'http://giftrush.eu',
      },
      portfolio: [
        '/static/portfolio/giftrush/1.jpg',
        '/static/portfolio/giftrush/2.jpg',
        '/static/portfolio/giftrush/3.jpg',
        '/static/portfolio/giftrush/4.jpg',
        '/static/portfolio/giftrush/5.jpg',
        '/static/portfolio/giftrush/6.jpg',
        '/static/portfolio/giftrush/7.jpg',
      ],
      portfolioSettings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    },
    {
      title: 'Pop Pop Bubble Wrap',
      slug: 'pop-pop-bubble-wrap',
      description: 'Pop Pop Bubble Wrap is a mobile game developed in Typescript with Phaser Framework, available on both Android and iOS '
                + 'platform. The application is a bubble wrap popping simulator that can be used for reducing one\' stress and anxiety.',
      image: 'static/img/apps/popbub.png',
      featured: [
        {
          title: 'Games Keys',
          url: 'https://bit.ly/3aegBtE',
        },
      ],
      links: {
        googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.bubblewrap',
        appStore: 'https://itunes.apple.com/us/app/pop-pop-bubble-wrap/id1263224379?ls=1&mt=8',
        mobileGooglePlay: 'market://details?id=eu.roninmobile.bubblewrap',
        mobileAppStore: 'itms-apps://itunes.apple.com/us/app/pop-pop-bubble-wrap/id1263224379',
        facebook: '',
        website: 'http://popbub.eu',
      },
      portfolio: [
        '/static/portfolio/popbub/1.jpg',
        '/static/portfolio/popbub/2.jpg',
        '/static/portfolio/popbub/3.jpg',
        '/static/portfolio/popbub/4.jpg',
        '/static/portfolio/popbub/5.jpg',
        '/static/portfolio/popbub/6.jpg',
      ],
      portfolioSettings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    },
    {
      title: 'Twin Dots Challenge',
      slug: 'twin-dots-challenge',
      description: 'Twin Dots Challenge is a hyper casual little puzzle, developed in TypeScript with Phaser Framework, available on both '
                + 'Android and iOS platform. For building the game for both platforms (Android & iOS) I\'ve used the Cordova Project.',
      image: 'static/img/apps/twindots.png',
      featured: [],
      links: {
        googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.twindots',
        appStore: 'https://apps.apple.com/us/app/twin-dots-challenge/id1481706861',
        mobileGooglePlay: 'market://details?id=eu.roninmobile.twindots',
        mobileAppStore: 'itms-apps://itunes.apple.com/us/app/twin-dots-challenge/id1481706861',
        facebook: '',
        website: '',
      },
      portfolio: [
        '/static/portfolio/twindots/1.jpg',
        '/static/portfolio/twindots/2.jpg',
        '/static/portfolio/twindots/3.jpg',
        '/static/portfolio/twindots/4.jpg',
        '/static/portfolio/twindots/5.jpg',
        '/static/portfolio/twindots/6.jpg',
        '/static/portfolio/twindots/7.jpg',
      ],
      portfolioSettings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    },
    {
      title: '13 Arrows',
      slug: '13-arrows',
      description: '13 Arrows is a hyper casual archery game for those moments when you are bored, built with Typescript and '
                + 'Phaser Framework. Try your best to get a higher score using the arrows you have at your disposal.',
      image: '/static/img/apps/arrows.png',
      featured: [],
      links: {
        googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.arrows',
        appStore: 'https://apps.apple.com/us/app/13-arrows/id1483924074',
        mobileGooglePlay: 'market://details?id=eu.roninmobile.arrows',
        mobileAppStore: 'itms-apps://itunes.apple.com/us/app/13-arrows/id1483924074',
        facebook: '',
        website: '',
      },
      portfolio: [
        '/static/portfolio/arrows/1.jpg',
        '/static/portfolio/arrows/2.jpg',
        '/static/portfolio/arrows/3.jpg',
        '/static/portfolio/arrows/4.jpg',
      ],
      portfolioSettings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    },
  ],
  socials: [
    {
      id: 'facebook',
      title: 'Facebook',
      icon: Brand.faFacebook,
      url: 'https://www.facebook.com/RoninMobile',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      icon: Brand.faTwitter,
      url: 'https://twitter.com/ronin_mobile',
    },
    {
      id: 'email',
      title: 'Email',
      icon: Icon.faEnvelope,
      url: 'mailto:hi@roninmobile.eu',
    },
  ],
};

export default initialState;
