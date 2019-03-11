import * as Brand from '@fortawesome/free-brands-svg-icons';
import * as Icon from '@fortawesome/free-regular-svg-icons';
import {State} from './state';

const initialState: State = {
    projects: [
        {
            title: 'PAWs! - Live to purr',
            slug: 'paws-live-to-purr',
            description: 'PAWs! is an HTML5 canvas game built with JavaScript and the Phaser Framework. PAWs\' gameplay is unique throughout the ' +
                'market, it combines elements of and arcade game with ones of a puzzle game, resulting a fast-paced game that will test your ' +
                'attention, focus and adaptability to the max.',
            image: '/static/img/apps/paws.png',
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.paws',
                appStore: 'https://itunes.apple.com/us/app/paws!-live-to-purr/id989570749',
                mobileGooglePlay: 'market://details?id=eu.roninmobile.paws',
                mobileAppStore: 'itms-apps://itunes.apple.com/us/app/paws!-live-to-purr/id989570749',
                facebook: '',
                website: ''
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
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            }
        },
        {
            title: 'Save Christmas: Gift Rush',
            slug: 'save-christmas-gift-rush',
            description: 'Christmas-themed game, developed using JavaScript and the Phaser Framework, available on both Android and iOS platform.',
            image: '/static/img/apps/giftrush.png',
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.giftrush',
                appStore: 'https://itunes.apple.com/us/app/save-christmas-gift-rush/id1069632749',
                mobileGooglePlay: 'market://details?id=eu.roninmobile.giftrush',
                mobileAppStore: 'itms-apps://itunes.apple.com/us/app/save-christmas-gift-rush/id1069632749',
                facebook: '',
                website: ''
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
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    }
                ]
            }
        },
        {
            title: 'Pop Pop Bubble Wrap',
            slug: 'pop-pop-bubble-wrap',
            description: 'Pop Pop Bubble Wrap is a mobile game developed in JavaScript with Phaser Framework, available on both Android and iOS ' +
                'platform. The application is a bubble wrap popping simulator that can be used for reducing one\' stress and anxiety.',
            image: 'static/img/apps/popbub.png',
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=eu.roninmobile.bubblewrap',
                appStore: 'https://itunes.apple.com/us/app/pop-pop-bubble-wrap/id1263224379?ls=1&mt=8',
                mobileGooglePlay: 'market://details?id=eu.roninmobile.bubblewrap',
                mobileAppStore: 'itms-apps://itunes.apple.com/us/app/pop-pop-bubble-wrap/id1263224379',
                facebook: '',
                website: ''
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
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                ]
            }
        }
    ],
    socials: [
        {
            id: 'facebook',
            title: 'Facebook',
            icon: Brand.faFacebook,
            url: 'https://www.facebook.com/RoninMobile'
        },
        {
            id: 'twitter',
            title: 'Twitter',
            icon: Brand.faTwitter,
            url: 'https://twitter.com/ronin_mobile'
        },
        {
            id: 'email',
            title: 'Email',
            icon: Icon.faEnvelope,
            url: 'mailto:hi@roninmobile.eu'
        }
    ]
};

export default initialState;
