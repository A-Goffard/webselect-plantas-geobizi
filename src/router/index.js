import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ContactoView from '../views/ContactoView.vue';
import PlantDetailView from '../views/PlantDetailView.vue';
const routes = [
    {
        path: '/',
        name: 'inicio',
        component: InicioView,
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: ContactoView,
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
