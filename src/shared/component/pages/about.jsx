// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

import Images from '../../assets/images'
// import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'About Me'

const styles = {
  onHover: {
    '&:hover': {
      opacity: '0.4',
    },
  },
  title: {
    'font-size': '24px',
  },
  washMonument: {
    width: '220px',
    height: 'auto',
    'box-shadow': '1px 1px 1px 1px gray',
  },
  sectionBox: {
    'background-color': 'white',
    'margin-bottom': '10px',
    'box-shadow': '1px 1px 1px 1px #70f481',
    'padding-bottom': '10px',
  },
  heading: {
    'padding-top': '10px',
  },
}

const AboutMePage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4">
    <Helmet className={classes.title} title={title} />

    <div className="container">
      <div className="row">

        <div className="col-md-3" style={{ padding: 0 }}>
          <img className={classes.washMonument} src={Images.wash_monument} alt="Something went wrong with AWS S3" />
        </div>

        <div className="col-md-9">

          <div className={classes.sectionBox}>
            <div className="col-md-12">
              <h5 className={classes.heading}> About me </h5>
              <p className="pl-4 pb-2" style={{ fontSize: '14px' }}>
              Besides coding and cartography, some of my notable
              interests and hobbies include...
              <br /><br />
                <b>Travel</b> is a priority for me - I&#39;ve visited
              about a dozen countries, mostly in Europe and the Middle East, and love
              learning about the geography, culture, and cuisine of every place I go.
              <br /><br />
                <b>Camping</b> is one of my favorite summer activities; I&#39;ve camped
              in places across the midwestern and western United States and am planning
              to backpack the PCT in the next few years.
              <br /><br />
                <b>Sports</b> have always been a big part of my life - I was captain
              of my high school track team, played club ice hockey at UW-Madison,
              biked across Iowa three times, and just ran my first half
              marathon this year!
              <br /><br />
              In my free time I can usually be found doing a crossword puzzle,
              tinkering with my old motorcycle - a 1982 Honda C70 Passport,
              or watching youtube clips of standup comedy from the 90&#39;s.
              <br /><br />
              Thanks for taking some time to get to know me, have a great day!
              </p>
            </div>
          </div>
          <div className={classes.sectionBox}>
            <div className="col-md-12" style={{ height: 360, margin: '0 auto' }}>
              <h5 className={classes.heading}> Resume </h5>

              <embed src={Images.resume} width="770px" height="310px" />

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(AboutMePage)
