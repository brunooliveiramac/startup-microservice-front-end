import Jobs from './components/Jobs.vue';
import Login from './components/Login.vue';
import JobCompanyDetail from './components/JobCompanyDetail.vue';
import JobDetail from './components/JobDetail.vue';
import UserEnroll from './components/UserEnroll.vue';



export const routes = [
    {path: '', component: Login, meta: {hideMenu: true, hideHeader: true}},
    {path: '/jobs', component: Jobs},
    {path: '/job/detail', component: JobDetail},
    {path: '/job/company/detail', component: JobCompanyDetail},
    {path: '/job/user/enroll', component: UserEnroll}
];
