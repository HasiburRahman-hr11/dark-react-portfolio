
// Thumbnails
import haatThumbnail from './assets/images/projects/thumbnail/haatThumbanil.png';
import motorManiaThumbnail from './assets/images/projects/thumbnail/motorThumbnail.png';
import TourXThumbnail from './assets/images/projects/thumbnail/tourThumbnail.png';
import redOnionThumbnail from './assets/images/projects/thumbnail/redOnionThumbnail.png';
import vacationThumbnail from './assets/images/projects/thumbnail/vacationThumbnail.png';
import agencyThumbnail from './assets/images/projects/thumbnail/agencyThumbnail.png';

// Gallery Images
import haatGallery1 from './assets/images/projects/gallery/haatGallery-1.png';
import haatGallery2 from './assets/images/projects/gallery/haatGallery-2.png';
import haatGallery3 from './assets/images/projects/gallery/haatGallery-3.png';
import haatGallery4 from './assets/images/projects/gallery/haatGallery-4.png';

import motorGallery1 from './assets/images/projects/gallery/motorGallery-1.png';
import motorGallery2 from './assets/images/projects/gallery/motorGallery-2.png';
import motorGallery3 from './assets/images/projects/gallery/motorGallery-3.png';
import motorGallery4 from './assets/images/projects/gallery/motorGallery-4.png';
import motorGallery5 from './assets/images/projects/gallery/motorGallery-5.png';


import vacationGallery1 from './assets/images/projects/gallery/vacationGallery-1.png';
import vacationGallery2 from './assets/images/projects/gallery/vacationGallery-2.png';
import vacationGallery3 from './assets/images/projects/gallery/vacationGallery-3.png';
import vacationGallery4 from './assets/images/projects/gallery/vacationGallery-4.png';
import vacationGallery5 from './assets/images/projects/gallery/vacationGallery-5.png';
import vacationGallery6 from './assets/images/projects/gallery/vacationGallery-6.png';


import tourGallery1 from './assets/images/projects/gallery/tourGallery-1.png';
import tourGallery2 from './assets/images/projects/gallery/tourGallery-2.png';
import tourGallery3 from './assets/images/projects/gallery/tourGallery-3.png';
import tourGallery4 from './assets/images/projects/gallery/tourGallery-4.png';
import tourGallery5 from './assets/images/projects/gallery/tourGallery-5.png';
import tourGallery6 from './assets/images/projects/gallery/tourGallery-6.png';
import tourGallery7 from './assets/images/projects/gallery/tourGallery-7.png';


import onionGallery1 from './assets/images/projects/gallery/onionGallery-1.png';
import onionGallery2 from './assets/images/projects/gallery/onionGallery-2.png';
import onionGallery3 from './assets/images/projects/gallery/onionGallery-3.png';


import agencyGallery1 from './assets/images/projects/gallery/agencyGallery-1.png';

export const projects = [
    {
        _id: '01',
        title: 'Haat | Full-Stack E-commerce website',
        image: haatThumbnail,
        link: 'https://haat-ecommerce-app.web.app',
        gallery: [haatGallery1, haatGallery2, haatGallery3, haatGallery4],
        points: [
            'Fully functional e-commerce website',
            'User can create account, add products to cart and place order',
            'Admin can mange products, users and orders from Dashboard',
            'CRUD operations handled by using JWT verification middleware'
        ],
        techs: ['React Js', 'Node Js', 'Express Js', 'MongoDB', 'React Router', 'Context-API', 'Material-UI', 'JWT'],

    },
    {
        _id: '02',
        title: 'Motor Mania | Niche Website',
        image: motorManiaThumbnail,
        link: 'https://motor-mania-ab104.web.app',
        gallery: [motorGallery1, motorGallery2, motorGallery3, motorGallery4, motorGallery5],
        points: [
            'Fully functional niche website',
            'User can create account and order bike',
            'User can login by using Google account',
            'Admin can mange products, users and orders from Dashboard',
            'Logged in user can manage their orders and give feedback'
        ],
        techs: ['React Js', 'Node Js', 'Express Js', 'MongoDB', 'React Router', 'Context-API', 'Material-UI' , 'Firebase']
    },
    {
        _id: '03',
        title: 'Vacation | Full-Stack Blog website',
        image: vacationThumbnail,
        link: 'https://vacation-blog-hr.herokuapp.com',
        gallery: [vacationGallery1, vacationGallery2, vacationGallery3, vacationGallery4, vacationGallery5, vacationGallery6],
        points: [
            'Fully functional blog website',
            'Admin can add, update and delete post',
            'Third party text editor (Tiny MCE) for blog post',
            'Admin can update profile including profile picture'
        ],
        techs: ['React Js', 'Node Js', 'Express Js', 'MongoDB', 'React Router', 'Context-API', 'Bootstrap' , 'Multer' , 'Tiny MCE']
    },
    {
        _id: '04',
        title: 'Tour-X | Travel Agency Website',
        image: TourXThumbnail,
        link: 'https://tour-x-hero-assignment.web.app',
        gallery: [tourGallery1, tourGallery2, tourGallery3, tourGallery4, tourGallery5, tourGallery6,  tourGallery7],
        points: [
            'Fully functional Travel Agency Website',
            'User can login by using Google account or Email password',
            'Logged in user can book travel packages',
            'User can also cancel ordered package',
            'Admin can add, update and delete packages'
        ],
        techs: ['React Js', 'Node Js', 'Express Js', 'MongoDB', 'React Router', 'Context-API', 'Material-UI' , 'Firebase']
    },
    {
        _id: '05',
        title: 'Red Onion | Food Selling Website',
        image: redOnionThumbnail,
        link: 'https://red-onion-react-app.netlify.app',
        gallery: [onionGallery1, onionGallery2, onionGallery3],
        points: [
            'Fully functional food selling website',
            'User can login by using Google account or Email password',
            'Logged in user can order foods'
        ],
        techs: ['React Js', 'React Router', 'Context-API', 'Material-UI' , 'Firebase']
    },

    {
        _id: '06',
        title: 'Steller Landing Page',
        image: agencyThumbnail,
        link: 'https://responsive-agency-web.netlify.app',
        gallery: [agencyGallery1],
        points: [
            'HTML Landing page',
            'Suitable for any kind of digital agency'
        ],
        techs: ['HTML', 'CSS', 'Bootstrap', 'JQuery']
    }
]