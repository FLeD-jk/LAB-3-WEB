import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import Profile from './components/Profile.vue'
import Discuss from './components/Discuss.vue'
import Discuss1 from './components/Discuss1.vue'
import Discuss2 from './components/Discuss2.vue'
import About from './components/About.vue'

const routes = [
    { path: "/", name: "Index", component: Index },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/sign-in", name: "SignIn", component: SignIn },
    { path: "/sign-up", name: "SignUp", component: SignUp },
    { path: "/about", name: "About", component: About },
    { path: "/discuss", name: "Discuss", component: Discuss},
    { path: "/discuss1", name: "Discuss1", component: Discuss1},
    { path: "/discuss2", name: "Discuss2", component: Discuss2}
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
