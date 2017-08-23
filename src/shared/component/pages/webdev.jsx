// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

import Images from '../../assets/images'
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
        <h1 className={classes.title} style={{ paddingBottom: 10 }}>{title}</h1>
      </div>

      <div className="col-md-12">
        <p className="pl-4 pb-2">
        I became interested in computer science and web development during college.
        I took classes in Java and Python and learned
        the fundamentals of computer science, data structures, and algorthms.
        I soon fell down the rabbit hole of web development and continued
        to work with Javascript and experiment with new technologies.
        Last fall I moved to San Francisco to attend a software engineering
        program where I collaborated with classmates to make some really neat apps!
        Below I describe the three largest and most challenging projects I have worked on.
        Check out <a href="https://github.com/shea12" target="_blank" rel="noopener noreferrer">my GitHub</a>
        &nbsp;to see some smaller projects and code samples.
        &nbsp;<i><b>Please note, the apps below are no longer being maintained.</b></i>
        </p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-8">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>
              <a href="https://github.com/shea12/SkilletHub" target="_blank" rel="noopener noreferrer">
                SkilletHub
              </a>
            </h5>
            <p className="pl-4 pb-2" style={{ fontSize: '14px' }}>
              SkilletHub is a version control system interface, like GitHub,
              but for recipes. SkilletHub users can create, share,
              edit and iteratively develop open source recipes.
              I worked with two other developers and we used the following
              technologies to create SkilletHub:
              React, MongoDB, Express, Node, AWS, RESTful API,
              CSS, Bootstrap. My key responsibilites on this project
              were front-end development/design and creating a user
              management, authentication, and session system.
              Additionally, I took on the role of project manager
              &nbsp;and gained valuable experience leading our team.
              I implemented a twice-daily check in system that ensured
              we were setting and achieving daily and weekly goals.
              My favorite part of working on SkilletHub was getting the
              chance to quickly pick up new technologies like AWS
              Cognito, TravisCI, and Bootstrap and incorporate them
              into our development cycle and architecture.
            </p>
          </div>

          <div className="col-md-4" style={{ paddingTop: 20 }}>
            <img style={{ height: 'auto', width: 340, paddingTop: 40 }} src={Images.sh_user} alt="SkilletHub" />
          </div>

        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-11">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>
              <a href="https://github.com/Glossy-Samosa/greenfield" target="_blank" rel="noopener noreferrer">
                UberEco
              </a>
            </h5>
            <p className="pl-4 pb-2" style={{ fontSize: '14px' }}>
              UberEco is a iOS app for finding travel routes around San
              Francisco using the Bay Area Bike Share
              service. The name is tongue-in-cheek, we are not associated with Uber.
              I worked alongside three other developers
              and used React Native, Google Maps API, Express, MongoDB,
              and the Bay Area Bike Share API to create
              UberEco. Some features include: address autofill,
              interactive maps, and turn-by-turn navigation.
              I spent time learning Xcode and Swift last year
              but have always preferred Javascript so I was excited to
              use React Native to create an iOS app.
              Because of my background in GIS
              and mapping, my main responsibilites on this app were
              to design the map interface and create a
              routing algorithm that receives the
              users current location, destination, and nearest
              bike stations to each and returns an ideal travel path.
              I loved working on this project because it combined
              some of my favorite things: bikes, maps, and apps!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-11">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>
              <a href="https://github.com/Glossy-Samosa/coordinatedtortoises" target="_blank" rel="noopener noreferrer">
                Crypto-tracker
              </a>
            </h5>
            <p className="pl-4 pb-2" style={{ fontSize: '14px' }}>
              Crypto-tracker is a web app that displays real-time
              bitcoin transactions and exchange rates.
              This was a challenge that my UberEco team and I took on as
              a legacy project. We identified some interesting
              features to add to the existing app. On the home page,
              we added an interactive globe that displays a dot on
              the map when a bitcoin transaction takes place.
              My main contribution was a search component
              &nbsp;that allows users to find historical bitcoin price data.
              I achieved this by parsing user input, querying
              &nbsp;an external API, and displaying the
              results.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>

export default injectSheet(styles)(WebDevPage)
