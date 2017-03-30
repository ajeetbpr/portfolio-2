// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  WEB_DEV_ROUTE,
  CARTOG_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '../routes'

const Nav = () =>
  <nav>
    <ul>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: WEB_DEV_ROUTE, label: 'Web Dev' },
        { route: CARTOG_ROUTE, label: 'Cartography' },
        { route: NOT_FOUND_PAGE_ROUTE, label: '404 Page Not Found' },
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

export default Nav
