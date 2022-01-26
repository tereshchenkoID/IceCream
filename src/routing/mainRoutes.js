import React, {lazy} from 'react'
import { Redirect } from 'react-router-dom'

const Main = lazy( () => import("../Pages/Main"));
const Search = lazy( () => import("../Pages/Search"));
const Profile  = lazy( () => import("../Pages/Profile"));
const Favourite = lazy( () => import( "../Pages/Favourite"));
const Team = lazy( () => import("../Pages/Team"));
const Contact  = lazy( () => import("../Pages/Contact"));
const About = lazy( () => import("../Pages/About"));
const NotFound = lazy( () => import("../Pages/NotFound"));

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/contact',
    component: Contact,
    exact: false
  },
  {
    path: '/about',
    component: About,
    exact: false
  },
  {
    path: '/search/:id([0-8])',
    component: Search,
    exact: false
  },
  {
    path: '/team',
    component: Team,
    exact: false
  },
  {
    path: '/favourite',
    component: Favourite,
    exact: false
  },
  {
    path: '/profile/:id(\\d+)',
    component: Profile,
    exact: false
  },
  {
    path: '/404',
    component: NotFound,
    exact: false
  },
  {
    component: () => <Redirect to="/404" />
  }
]
