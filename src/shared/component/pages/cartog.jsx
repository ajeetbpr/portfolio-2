// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Maps and GIS Projects'

const styles = {
  onHover: {
    '&:hover': {
      opacity: '0.4',
    },
  },
  homeLink: {
    'text-decoration': 'none !important',
  },
  mainBox: {
    'background-color': '#42f4d1',
  },
  projectBox: {
    'background-color': '#35c6a9',
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
        <h1>{title}</h1>
      </div>
    </div>

    <div className={classes.mainBox}>
      <div className="col-md-12">
        <p className="pl-4 pt-2"> Words about maps and GIS</p>
        <p className="pl-4"> yet more words </p>
        <p className="pl-4 pb-2"> even more and more words</p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">Senior Thesis: Madison Parks</h3>
          <p className="pl-4 pb-2">Research on the connection between socioeconomic status and access to quality public parks</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">Cartographic Design: HCA Travels Map</h3>
          <p className="pl-4 pb-2">For advanced cartographic design class, vintage inspired map of HCA travels</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">Advanced GIS Application: Off-Campus Housing</h3>
          <p className="pl-4 pb-2">Case study on the effect new high-rise apartment buildings have on affordability of off-campus housing</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="col-md-1 pt-4">
      <div className={classes.onHover}>
        <Link to={HOME_PAGE_ROUTE} className={classes.homeLink}>Home</Link>
      </div>
    </div>
  </div>

export default injectSheet(styles)(CartogPage)
