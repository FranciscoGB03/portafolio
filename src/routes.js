import Home from './components/template/Home';
import NotFound from './components/template/NotFound';

const ROUTES = [
    { exact: true, path: '/portafolio/', component: Home },    
    { exact:null, path:null, component: NotFound }
];

export default ROUTES;