// @flow

import React from 'react'
import injectSheet from 'react-jss'
// import { APP_NAME } from '../config'

const styles = {
  tagline: {
    'font-size': '12px',
  },
}

const Footer = ({ classes }: { classes: Object }) =>
  <div className="container mt-5">
    <hr />
    <footer className={classes.tagline}>
      <p>© Caroline Shea 2017</p>
    </footer>
  </div>

export default injectSheet(styles)(Footer)
