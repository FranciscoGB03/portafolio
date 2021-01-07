import Home from './components/template/Home';
import NotFound from './components/template/NotFound';
import Educacion from './components/educacion/Educacion';
import Experiencia from './components/Experiencia/Experiencia';
const ROUTES = [
    { exact: true, path: '/portafolio/', component: Home },    
    { exact: true, path: '/portafolio/formacion', component: Educacion },
    { exact: true, path: '/portafolio/experiencia', component: Experiencia },
    { exact:null, path:null, component: NotFound }
];

export default ROUTES;