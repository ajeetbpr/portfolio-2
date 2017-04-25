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
  wholePage: {
  },
  goldenGate: {
    height: '260px',
    width: '100%',
  },
  selfBox: {
    height: '160px',
    overflow: 'hidden',
    'border-radius': '140px',
    'margin-bottom': '20px',
  },
  selfIcon: {
    height: '280px',
    'padding-bottom': '100px',
  },
  outerBox: {
    position: 'relative',
    overflow: 'hidden',
    height: '260px',
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
  descriptionOverlay: {
    position: 'absolute',
    top: '20%',
    left: '72%',
    transform: 'translate(-50%,-50%)',
    'text-align': 'center',
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
  description: {
    display: 'none',
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
    <div className="jumbotron" style={{ padding: 0 }}>
      <img className={classes.goldenGate} src={Images.golden_gate_bridge} alt="asdf" />
    </div>

    <div className="container">
      <div className="row">
        <div className={classes.selfBox}>
          <img className={classes.selfIcon} src={Images.museum_selfie} alt="asdf" />
        </div>
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

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>

              <div className={classes.outerBox}>
                <img className={classes.webImage} src={Images.sh_user} alt="oops" />
                <div className={classes.descriptionOverlay} />
              </div>

            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={CARTOG_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>

              <div className={classes.outerBox}>
                <img className={classes.cartImage} src={Images.hca_map} alt="oops" />
                <div className={classes.descriptionOverlay} />
              </div>

            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0 }}>
          <Link to={ABOUT_ROUTE} onClick={handleNavLinkClick} className={classes.links}>
            <div className={classes.onHover}>

              <div className={classes.outerBox}>
                <img className={classes.aboutImage} src={Images.ragbrai} alt="oops" />
                <div className={classes.descriptionOverlay} />
              </div>

            </div>
          </Link>
        </div>

      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
