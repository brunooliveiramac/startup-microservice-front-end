import Jobs from './components/Jobs.vue';
import Login from './components/Login.vue';


export const routes = [
    {path: '', component: Login, meta: {hideMenu: true, hideHeader: true}},
    {path: '/jobs', component: Jobs}
];
