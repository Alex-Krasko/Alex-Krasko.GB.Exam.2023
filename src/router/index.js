import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectPage from '../views/ProjectPage.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogDetails from '../views/BlogDetails.vue'
import notFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/project',
        name: 'project',
        component: ProjectPage
    },
    {
        path: '/project_details',
        name: 'project_details',
        component: ProjectDetails
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogPage,
    },
    {
        path: '/blog_details',
        name: 'blog_details',
        component: BlogDetails
    },

    {
        path: '/*',
        name: '404',
        component: notFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router