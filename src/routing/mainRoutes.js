import React, {lazy} from 'react'
import { Redirect } from 'react-router-dom'

const Home = lazy( () => import("../Pages/Home"));
const Bonds = lazy( () => import("../Pages/Bonds"));
const Boardrooms = lazy( () => import("../Pages/Boardrooms"));
const Farm = lazy( () => import("../Pages/Farm"));
const Unlock = lazy(() => import("../Pages/Unlock"))

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    role: [0, 1]
  },
  {
    path: '/bonds',
    component: Bonds,
    exact: false,
    role: [1]
  },
  {
    path: '/boardrooms',
    component: Boardrooms,
    exact: false,
    role: [1]
  },
  {
    path: '/farm',
    component: Farm,
    exact: false,
    role: [1]
  },
  {
    path: '/unlock',
    component: Unlock,
    exact: false,
    role: [0]
  },
  {
    component: () => <Redirect to="/unlock" />,
    role: [0]
  },
  {
    component: () => <Redirect to="/farm" />,
    role: [1]
  }
]
