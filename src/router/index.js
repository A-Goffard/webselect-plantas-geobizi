import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ContactoView from '../views/ContactoView.vue';
import PlantDetailView from '../views/PlantDetailView.vue';
import ResultView from '@/views/ResultView.vue';
import RetoView from '@/views/RetoView.vue';
import TodasPlantasView from '@/views/TodasPlantasView.vue';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: InicioView,
    },
    {
        path: '/reto',
        name: 'reto',
        component: RetoView,
    },
    {
        path: '/plantas',
        name: 'plantas',
        component: TodasPlantasView,
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: ContactoView,
    },
    {
        path: '/result',
        name: 'result',
        component: ResultView,
    },
    {
        path: '/plantas/:id',
        name: 'PlantDetailView',
        component: PlantDetailView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
