import React from 'react'
import { Redirect } from 'react-router-dom'

import Main from "../Pages/Main";
import SearchEmployer from "../Pages/SearchEmployer";
import SearchCompany from "../Pages/SearchCompany";
import Profile from "../Pages/Profile";
import Favourite from "../Pages/Favourite";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Recovery from "../Pages/Recovery";
import Settings from "../Pages/Settings";
import Notification from "../Pages/Notification";
import SendOffer from "../Pages/SendOffer";
import Team from "../Pages/Team";

export const routes = [
  {
    path: '/main',
    component: Main,
    exact: true,
    role: [1, 2]
  },
  {
    path: '/profile/:id',
    component: Profile,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/search-employer/:category/:subcategory?',
    component: SearchEmployer,
    exact: false,
    role: [2]
  },
  {
    path: '/search-company/:category',
    component: SearchCompany,
    exact: false,
    role: [1]
  },
  {
    path: '/team',
    component: Team,
    exact: false,
    role: [2]
  },
  {
    path: '/favourite',
    component: Favourite,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/login',
    component: Login,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/registration',
    component: Registration,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/settings',
    component: Settings,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/notification/:id?',
    component: Notification,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/create-offer/:id?',
    component: SendOffer,
    exact: false,
    role: [1, 2]
  },
  {
    path: '/recovery',
    component: Recovery,
    exact: false,
    role: [1, 2]
  },
  {
    component: () => <Redirect to="/main" />,
    role: [1, 2]
  },
]
