import React from 'react'
import { Redirect } from 'react-router-dom'

import Main from "../Pages/Main";
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";
import Favourite from "../Pages/Favourite";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const routes = [
  {
    path: '/main',
    component: Main,
    exact: true
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
    path: '/profile/:id(\\d+)',
    component: Profile,
    exact: false
  },
  {
    component: () => <Redirect to="/main" />
  },
]
