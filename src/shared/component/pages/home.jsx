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
  goldenGate: {
    height: '280px',
    width: '100%',
  },
  banner: {
    'padding-top': '0px',
    'margin-bottom': '10px',
  },
  outerBox: {
    position: 'relative',
    overflow: 'hidden',
    height: '260px',
    'box-shadow': '1px 1px 1px 1px gray',
    'margin-right': '10px',
  },
  webImage: {
    float: 'right',
  },
  cartImage: {
    float: 'left',
  },
  aboutImage: {
    float: 'right',
  },
  onHover: {
    '&:hover': {
      opacity: '0.5',
    },
  },
  links: {
    color: '#000000 !important',
    'text-decoration': 'none !important',
  },
  heading: {
    'text-align': 'left',
    margin: '0 auto',
  },
  headingBar: {
    'margin-right': '10px',
    padding: '16px',
    'box-shadow': '1px 1px 1px 1px gray',
  },
}

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const HomePage = ({ classes }: { classes: Object }) =>
  <div className={classes.wholePage}>
    <Helmet
      meta={[
        { name: 'description', content: "Caroline's Portfolio Website" },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron" style={{ padding: 0, marginBottom: '20px', boxShadow: '1px 1px 1px 1px gray' }}>
      <img className={classes.goldenGate} src={Images.golden_gate_bridge} alt="asdf" />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ padding: 0 }}>
          <div className={classes.banner}> <h5>Welcome to my portfolio,
            have a look around!</h5></div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.webImage} src={Images.sh_user} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#41dff4' }}>
              <h5 className={classes.heading}> Web Apps </h5>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={CARTOG_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.cartImage} src={Images.hca_map} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#42f4d1' }}>
              <h5 className={classes.heading}> Maps & GIS </h5>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={ABOUT_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.aboutImage} src={Images.ragbrai} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#83efa7' }}>
              <h5 className={classes.heading}> About Me </h5>
            </div>
          </Link>
        </div>

      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
