import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from './Navbar.vue'
import Home from './Home.vue'
import HotelSearch from './HotelSearch.vue'
import Hotel from './Hotel.vue'

require("skeleton-css/css/normalize.css");
require("skeleton-css/css/skeleton.css");


Vue.use(VueRouter);



const routes = [
    {path: '/', component: Home},
    {path: '/hotels/:city', name: 'hotels', component: HotelSearch},
    {path: '/hotel/:slug', name: 'hotel', component: Hotel},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router,
    components: {
        Navbar
    }
}).$mount('#app')

// Now the app has started!