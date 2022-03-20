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
const Login = lazy( () => import("../Pages/Login"));
const Registration = lazy( () => import("../Pages/Registration"));

const AccountApplicant = lazy( () => import("../Pages/Account/Applicant"));
const AccountPersonal = lazy( () => import("../Pages/Account/Personal"));
const AccountSettings = lazy( () => import("../Pages/Account/Settings"));
const AccountContact = lazy(() => import("../Pages/Account/Contact"));

const RestoreSearch = lazy(() => import("../Pages/Restore/Search"));
const RestoreUpdate = lazy(() => import("../Pages/Restore/Update"));

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
    role: [0, 1]
  },
  {
    path: '/contact',
    component: Contact,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/about',
    component: About,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/search/:id([0-8])',
    component: Search,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/team',
    component: Team,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/favourite',
    component: Favourite,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/profile/:id(\\d+)',
    component: Profile,
    exact: false,
    role: [0, 1]
  },
  {
    path: '/my/personal',
    component: AccountPersonal,
    exact: false,
    role: [1]
  },
  {
    path: '/my/applicant',
    component: AccountApplicant,
    exact: false,
    role: [1]
  },
  {
    path: '/my/settings',
    component: AccountSettings,
    exact: false,
    role: [1]
  },
  {
    path: '/my/contact',
    component: AccountContact,
    exact: false,
    role: [1]
  },
  {
    path: '/login',
    component: Login,
    exact: false,
    role: [0]
  },
  {
    path: '/registration',
    component: Registration,
    exact: false,
    role: [0]
  },
  {
    path: '/restore/search',
    component: RestoreSearch,
    exact: false,
    role: [0]
  },
  {
    path: '/restore/update/:id?',
    component: RestoreUpdate,
    exact: false,
    role: [0]
  },
  {
    path: '/404',
    component: NotFound,
    exact: false,
    role: [0, 1]
  },
  {
    component: () => <Redirect to="/404" />,
    role: [0]
  },
  {
    component: () => <Redirect to="/my/personal" />,
    role: [1]
  }
]
