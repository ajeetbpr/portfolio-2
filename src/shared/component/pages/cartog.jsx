// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
// import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Maps and GIS Projects'

const styles = {
  onHover: {
    '&:hover': {
      opacity: '0.4',
    },
  },
  title: {
    'font-size': '24px',
  },
  homeLink: {
    'text-decoration': 'none !important',
  },
  projectBox: {
    'background-color': 'white',
    'box-shadow': '1px 1px 1px 1px #35c6a9',
  },
  imageBox: {
  },
  hcaMap: {
    width: '20%',
    height: 'auto',
    'background-color': 'white',
    'border-radius': '4px',
  },
}

const CartogPage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4">
    <Helmet title={title} />

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
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Senior Thesis: Madison Parks</h5>
            <p className="pl-4 pb-2">Description: Studied the quality of public parks in relation to the neighborhoods they serve</p>
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
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Cartographic Design: Hans Christian Andersen</h5>
            <p className="pl-4 pb-2">Description: For advanced cartographic design class, vintage inspired map of HCA travels</p>
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
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Advanced GIS Application: Off-Campus Housing</h5>
            <p className="pl-4 pb-2">Description: Case study on the effect new high-rise apartment buildings have on affordability of off-campus housing</p>
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

export default injectSheet(styles)(CartogPage)
