import Router from 'vue-router';
import FrontPage from '../components/FrontPage.vue'
import ViewResult from '../components/ViewResult.vue'
import FacultyLogin from '../components/FacultyLogin.vue'
import FacultySignUp from '../components/FacultySignUp.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
           name: 'FrontPage',
           path: '/',
           component:FrontPage 
       },
        {
           name: 'ViewResult',
           path: '/ViewResult',
           component: ViewResult
        },
        {
           name: 'FacultyLogin',
           path: '/FacultyLogin',
           component: FacultyLogin
        },
        {
           name: 'FacultySignUp',
           path: '/FacultySignUp',
           component: FacultySignUp
        }
    ]
});

export default router;
