// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

// import Images from '../../../../public/assets/images'
import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Cartography'

const styles = {
  onHover: {
    '&:hover': {
      opacity: '0.4',
    },
  },
  homeLink: {
    'text-decoration': 'none !important',
  },
}

const CartogPage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4">
    <Helmet title={title} />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <div className={classes.onHover}><Link to={HOME_PAGE_ROUTE} className={classes.homeLink}>Go to the homepage</Link></div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(CartogPage)
