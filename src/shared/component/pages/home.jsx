// @flow

import $ from 'jquery'
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

// import Images from '../../../../public/assets/images'
import { APP_NAME } from '../../config'

import {
  WEB_DEV_ROUTE,
  CARTOG_ROUTE,
  ABOUT_ROUTE,
} from '../../routes'

const styles = {
  webdevBox: {
    paddingBottom: '300px',
    'background-color': '#41dff4',
    opacity: '0.8',
  },
  cartBox: {
    paddingBottom: '300px',
    'background-color': '#42f4d1',
    opacity: '0.8',
  },
  aboutBox: {
    paddingBottom: '300px',
    'background-color': '#41f456',
    opacity: '0.8',
  },
  onHover: {
    '&:hover': {
      opacity: '0.4',
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
    <div className="jumbotron" />

    <div className="container">
      <div className="row">

        <div className="col-md-4" style={{padding: 0}}>
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.webdevBox}>
                <h3 className="mb-10">Web Development</h3>
                <p>Code Code Code</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{padding: 0}}>
          <Link to={CARTOG_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.cartBox}>
                <h3 className="mb-10">Cartography</h3>
                <p>Maps Maps Maps</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{padding: 0}}>
          <Link to={ABOUT_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>
              <div className={classes.aboutBox}>
                <h3 className="mb-10">About Me</h3>
                <p>Me Me Me</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
