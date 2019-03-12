import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import ArticleDetails from './views/ArticleDetails.vue';
import Notes from './views/Notes.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'home' }
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/notes',
            name: 'notes',
            component: Notes
        },
        {
            path: '/articleDetails',
            name: 'articleDetails',
            component: ArticleDetails
        }
        // {
        //   path: "/about",
        //   name: "about",
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () =>
        //     import(/* webpackChunkName: "about" */ "./views/About.vue")
        // }
    ]
});
