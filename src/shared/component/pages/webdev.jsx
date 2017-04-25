// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
// import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Web Applications'

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
  mainBox: {
    'background-color': '#41dff4',
  },
  projectBox: {
    'background-color': '#35b5c6',
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

    <div className={classes.mainBox}>
      <div className="col-md-12">
        <p className="pl-4 pt-2"> words about web development </p>
        <p className="pl-4 pb-2"> so many words </p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">SkilletHub</h3>
          <p className="pl-4 pb-2">Words about SkilletHub</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">UberEco</h3>
          <p className="pl-4 pb-2">Words about UberEco</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="col-md-12">
          <h3 className="container mb-10 pt-2">Crypto-tracker</h3>
          <p className="pl-4 pb-2">Words about Crypto-tracker</p>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

  </div>

export default injectSheet(styles)(WebDevPage)
