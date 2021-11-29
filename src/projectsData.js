
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
export const projects = [
    {
        _id: '01',
        title: 'Full-Stack E-commerce website',
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
        title: 'Motor Mania',
        image: motorManiaThumbnail,
        link: 'https://motor-mania-ab104.web.app'
    },
    {
        _id: '03',
        title: 'Full-Stack Blog website',
        image: vacationThumbnail,
        link: 'https://vacation-blog-hr.herokuapp.com'
    },
    {
        _id: '04',
        title: 'Tour-X Travel App',
        image: TourXThumbnail,
        link: 'https://tour-x-hero-assignment.web.app'
    },
    {
        _id: '05',
        title: 'Red Onion - React App',
        image: redOnionThumbnail,
        link: 'https://red-onion-react-app.netlify.app'
    },

    {
        _id: '06',
        title: 'HTML Agency website',
        image: agencyThumbnail,
        link: 'https://responsive-agency-web.netlify.app'
    }
]