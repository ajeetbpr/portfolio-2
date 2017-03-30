// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Web Dev'

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
    'background-color': '#41dff4',
  },
  projectBox: {
    'background-color': '#41c4f4',
  },
}

const WebDevPage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4">
    <Helmet title={title} />

    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
      </div>
    </div>

    <div className={classes.mainBox}>
      <div className="col-md-12">
        <h3 className="container mb-10">Words and things</h3>
        <p>Code Code Code Code Code Code Code Code Code Code Code Code</p>
      </div>
    </div>

    <div className={classes.projectBox}>
      <div className="col-md-12">
        <h3 className="container mb-10">Project 1</h3>
        <p>Code Code Code Code Code Code Code Code Code Code Code Code</p>
      </div>
    </div>

    <div className={classes.onHover}><Link to={HOME_PAGE_ROUTE} className={classes.homeLink}>Go to the homepage</Link></div>
  </div>

export default injectSheet(styles)(WebDevPage)
