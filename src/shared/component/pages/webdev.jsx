// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
// import { HOME_PAGE_ROUTE } from '../../routes' #35b5c6

const title = 'Web and Mobile Applications'

const styles = {
  fontfamily: {

  },
  title: {
    'font-size': '24px',
  },
  onHover: {
    '&:hover': {
      opacity: '0.4',
    },
  },
  homeLink: {
    'text-decoration': 'none !important',
  },
  projectBox: {
    'background-color': 'white',
    'box-shadow': '1px 1px 1px 1px #35b5c6',
  },
}

const WebDevPage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4">
    <Helmet className={classes.title} title={title} />

    <div className="row">
      <div className="col-12">
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>

    <div>
      <div className="col-md-12">
        <p className="pl-4 pb-2">
        I started making websites during my senior year at the
        &nbsp;<b>University of Wisconsin - Madison</b>.
        I took classes in <b>Java</b> and <b>Python</b> during undergrad and learned
        the fundamentals of computer science, data structures, and algorthms.
        I fell down the rabbit hole of web development and continued to work with <b>Javascript</b>
        &nbsp;and experiment with new technologies.
        Last fall I moved to <b>San Francisco</b> to attend a software engineering
        program where I collaborated with classmates to make some really neat apps!
        </p>

      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>SkilletHub</h5>
            <p className="pl-4 pb-2">Description:</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4">
            <p>Pics</p>
          </div>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>UberEco</h5>
            <p className="pl-4 pb-2">Description:</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4">
            <p>Pics</p>
          </div>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Crypto-tracker</h5>
            <p className="pl-4 pb-2">Description:</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4">
            <p>Pics</p>
          </div>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

  </div>

export default injectSheet(styles)(WebDevPage)
