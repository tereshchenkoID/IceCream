import React, {lazy} from 'react'
import { Redirect } from 'react-router-dom'

const Main = lazy( () => import("../Pages/Main"));
const Search = lazy( () => import("../Pages/Search"));
const Profile  = lazy( () => import("../Pages/Profile"));
const Favourite = lazy( () => import( "../Pages/Favourite"));
const Contact  = lazy( () => import("../Pages/Contact"));
const About = lazy( () => import("../Pages/About"));
const Faq = lazy( () => import("../Pages/Faq"));
const NotFound = lazy( () => import("../Pages/NotFound"));
const Login = lazy( () => import("../Pages/Login"));
const Registration = lazy( () => import("../Pages/Registration"));
const RestoreSearch = lazy(() => import("../Pages/Restore/Search"));
const RestoreUpdate = lazy(() => import("../Pages/Restore/Update"));

const WorkerApplicant = lazy( () => import("../Pages/Account/Worker/Applicant"));
const WorkerPersonal = lazy( () => import("../Pages/Account/Worker/Personal"));
const WorkerSettings = lazy( () => import("../Pages/Account/Worker/Settings"));
const WorkerContact = lazy(() => import("../Pages/Account/Worker/Contact"));

const EmployerPersonal = lazy( () => import("../Pages/Account/Employer/Personal"));
const EmployerContact = lazy(() => import("../Pages/Account/Employer/Contact"));
const EmployerSettings = lazy( () => import("../Pages/Account/Employer/Settings"));
const EmployerTeam = lazy( () => import("../Pages/Account/Employer/Team"));

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
    role: [0, 1, 2]
  },
  {
    path: '/contact',
    component: Contact,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/about',
    component: About,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/search/:id([0-8])',
    component: Search,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/favourite',
    component: Favourite,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/faq',
    component: Faq,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/profile/:id(\\d+)',
    component: Profile,
    exact: false,
    role: [0, 1, 2]
  },
  {
    path: '/employer/my/personal',
    component: EmployerPersonal,
    exact: false,
    role: [1]
  },
  {
    path: '/employer/my/settings',
    component: EmployerSettings,
    exact: false,
    role: [1]
  },
  {
    path: '/employer/my/contact',
    component: EmployerContact,
    exact: false,
    role: [1]
  },
  {
    path: '/employer/my/team',
    component: EmployerTeam,
    exact: false,
    role: [1]
  },
  {
    path: '/worker/my/personal',
    component: WorkerPersonal,
    exact: false,
    role: [2]
  },
  {
    path: '/worker/my/applicant',
    component: WorkerApplicant,
    exact: false,
    role: [2]
  },
  {
    path: '/worker/my/settings',
    component: WorkerSettings,
    exact: false,
    role: [2]
  },
  {
    path: '/worker/my/contact',
    component: WorkerContact,
    exact: false,
    role: [2]
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
    role: [0, 1, 2]
  },
  {
    component: () => <Redirect to="/404" />,
    role: [0]
  },
  {
    component: () => <Redirect to="/" />,
    role: [1, 2]
  }
]
