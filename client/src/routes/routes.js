import config from '../config';

import Home from '../pages/Home';
import About from '../pages/About';
import Expert from '../pages/Expert';
import Contact from '../pages/Contact';
import ExpertDetail from '../pages/ExpertDetail';
import Test from '../pages/Test';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.expert, component: Expert },
    { path: config.routes.contact, component: Contact },
    { path: '/doi-ngu-chuyen-gia/:expertID', component: ExpertDetail },
    { path: config.routes.test, component: Test, layout: null },
];

export { publicRoutes };
