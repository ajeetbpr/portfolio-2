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
    paddingTop: 10,
    backgroundColor: 'light blue',
  },
  outerBox: {
    position: 'relative',
    overflow: 'hidden',
    height: '200px',
    'box-shadow': '1px 1px 1px 1px gray',
    'margin-right': '10px',
  },
  webImage: {
    float: 'left',
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
  social: {
    height: '75px',
    boxShadow: '1px 1px 1px 1px gray',
    '&:hover': {
      opacity: '0.5',
    },
  },
  socialBar: {
    'margin-right': '10px',
    padding: '16px',
    'box-shadow': '1px 1px 1px 1px gray',
  },
  myface: {
    height: '150px',
    margin: '0 auto',
    boxShadow: '1px 1px 1px 1px gray',
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

    <div className="container" style={{ paddingBottom: 20, marginBottom: 20 }}>
      <div className="row">

        <div className="col-md-2" style={{ height: 140 }}>
          <img className={classes.myface} src={Images.wedding} alt="my face" />
        </div>

        <div className="col-md-6" style={{ height: 140, textAlign: 'center' }}>
          <div className={classes.banner}>
            <h4>Hey there!</h4>
            <p>
              My name is <b>Caroline Shea</b>&nbsp;and I&#39;m a <b>software developer</b>.
              I am looking for my next career opportunity and would like to work for you!
              <br />Have a look around to get to know me and my skills.
            </p>
          </div>
        </div>

        <div className="col-md-3" style={{ margin: '0 auto', paddingTop: 30 }}>
          <div className="row">
            <div style={{ padding: 10 }}>
              <a href="https://www.linkedin.com/in/caroline-shea/" target="_blank" rel="noopener noreferrer">
                <img className={classes.social} src={Images.linkedin} alt="linkedin" />
              </a>
            </div>
            <div style={{ padding: 10 }}>
              <a href="https://github.com/shea12" target="_blank" rel="noopener noreferrer">
                <img className={classes.social} src={Images.github} alt="github" />
              </a>
            </div>
            <div style={{ padding: 10 }}>
              <a href="https://twitter.com/callmegarol" target="_blank" rel="noopener noreferrer">
                <img className={classes.social} src={Images.twitter} alt="twitter" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-md-4" style={{ padding: 0, margin: '0 auto' }}>
          <Link to={WEB_DEV_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.webImage} src={Images.ticktock} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#41dff4' }}>
              <h5 className={classes.heading}> Web Apps </h5>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0, margin: '0 auto' }}>
          <Link to={CARTOG_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.cartImage} src={Images.wis_map} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#42f4d1' }}>
              <h5 className={classes.heading}> Maps & GIS </h5>
            </div>
          </Link>
        </div>

        <div className="col-md-4" style={{ padding: 0, margin: '0 auto' }}>
          <Link to={ABOUT_ROUTE} onClick={handleNavLinkClick} className={classes.links}>

            <div className={classes.onHover}>
              <div className={classes.outerBox}>
                <img className={classes.aboutImage} src={Images.ragbrai} alt="oops" />
              </div>
            </div>
            <div className={classes.headingBar} style={{ backgroundColor: '#70f481' }}>
              <h5 className={classes.heading}> About Me </h5>
            </div>
          </Link>
        </div>

      </div>
    </div>
  </div>

/*
<div style={{ padding: 6 }}>
  <a href="https://www.instagram.com/shea.caroline/" target="_blank" rel="noopener noreferrer">
    <img className={classes.social} style={{ boxShadow: '1px 1px 1px 1px gray' }}
    src={Images.instagram} alt="instagram" />
  </a>
</div>
*/

export default injectSheet(styles)(HomePage)
