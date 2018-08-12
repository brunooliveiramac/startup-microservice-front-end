import Jobs from './components/Jobs.vue';
import Login from './components/Login.vue';
import JobCompanyDetail from './components/JobCompanyDetail.vue';



export const routes = [
    {path: '', component: Login, meta: {hideMenu: true, hideHeader: true}},
    {path: '/jobs', component: Jobs},
    {path: '/job/company/detail', component: JobCompanyDetail}
];
