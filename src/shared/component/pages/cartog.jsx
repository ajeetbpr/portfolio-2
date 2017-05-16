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
        
        </p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Senior Thesis: Madison Parks</h5>
            <p className="pl-4 pb-2">Description: Research on the connection between socioeconomic status and access to quality public parks</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4" style={{ border: "1px solid black" }}>
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
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10 }}>Cartographic Design: HCA Travels Map</h5>
            <p className="pl-4 pb-2">For advanced cartographic design class, vintage inspired map of HCA travels</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4" style={{ border: "1px solid black" }}>
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
            <p className="pl-4 pb-2">Case study on the effect new high-rise apartment buildings have on affordability of off-campus housing</p>
            <p className="pl-4 pb-2">Technologies:</p>
            <p className="pl-4 pb-2">Responsibilites:</p>
            <p className="pl-4 pb-2">Favorite Part:</p>
          </div>
          <div className="col-md-4" style={{ border: "1px solid black" }}>
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
