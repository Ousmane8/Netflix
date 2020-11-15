import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from "../views/Movies"
import MovieDetail from "../views/MovieDetail"
import Main from "@/views/Main"
import MyList from "@/views/MyList"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: "/Main",
    name: "Main",
    component: Main
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  { path: "/MyList",
    name: "MyList",
    component: MyList
  }
]

const router = new VueRouter({
  routes
})

export default router
