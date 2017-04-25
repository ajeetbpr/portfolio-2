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
    height: '120px',
    'background-color': '#41dff4',
  },
  cartBox: {
    height: '120px',
    'background-color': '#42f4d1',
  },
  aboutBox: {
    height: '120px',
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
  selfIcon: {
    height: '140px',
    width: '140px',
    'background-color': 'black',
    'margin-bottom': '30px',
    'margin-left': '16px',
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
        <div className={classes.selfIcon} />
        <div className="pt-3 pl-4">
          <h3>Hey there!</h3>
          <p className="pt-2">My name is Caroline and I am a web
            developer and cartographer.</p>
          <p> Check out the links below to see some
            of my work and to learn a bit more about me.</p>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.webdevBox}>
                <h3 className="pl-4 pt-3">Web Applications</h3>
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
                <h3 className="pl-4 pt-3">About Me</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
