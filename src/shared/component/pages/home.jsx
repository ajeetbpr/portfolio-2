// @flow

import $ from 'jquery'
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import Images from '../../assets/images'
import { APP_NAME } from '../../config'

import {
  WEB_DEV_ROUTE,
  CARTOG_ROUTE,
  ABOUT_ROUTE,
} from '../../routes'

const styles = {
  webdevBox: {
    height: '200px',
    'background-color': '#41dff4',
  },
  cartBox: {
    height: '200px',
    'background-color': '#42f4d1',
  },
  aboutBox: {
    height: '200px',
    'background-color': '#41f47c',
  },
  onHover: {
    '&:hover': {
      opacity: '.6',
    },
  },
  links: {
    color: '#000000 !important',
    'text-decoration': 'none !important',
  },
}

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: "Caroline's Portfolio Website" },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron" style={{ padding: 0 }}>
      <img src={Images.golden_gate_bridge} alt="asdf" />
    </div>

    <div className="container">
      <div className="row">
        <h3 className="mb-4 ml-2"> Hey there! </h3>
      </div>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.webdevBox}>
                <h3 className="pl-4 pt-3">Web Apps</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to={CARTOG_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.cartBox}>
                <h3 className="pl-4 pt-3">Cartography</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to={ABOUT_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.aboutBox}>
                <h3 className="pl-4 pt-3">About meta</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
