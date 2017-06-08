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
        <h1 className={classes.title} style={{ paddingBottom: 10 }}>{title}</h1>
      </div>

      <div className="col-md-12">
        <p className="pl-4 pb-2">
          Words and Turds
        </p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Senior Thesis: Madison Parks</h5>
            <p className="pl-4 pb-2">Description: Studied the quality of public parks in relation to the neighborhoods they serve</p>
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
