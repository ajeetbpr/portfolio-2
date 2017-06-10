// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
// import { Link } from 'react-router-dom'

import Images from '../../assets/images'
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
          Geography is arguably one of the most interdisciplinary fields of study.
          Throughout my undergrad education I was trained to
          integrate a paradigm of space and place into my critical thinking
          and problem solving skills. In pursuit of my geography degree I
          learned the design principles that drive the map making process,
          had the opportunity to successfully lead teams towards common goals,
          and developed strong technical skills in GIS, geocomputing, and programming.
        </p>
      </div>
    </div>

    <div className="container pt-4" style={{ padding: 0 }}>
      <div className={classes.projectBox}>
        <div className="row">
          <div className="col-md-7">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>Senior Thesis: Madison Parks</h5>
            <p className="pl-4 pb-2" style={{ 'font-size': '14px' }}>
              My senior thesis is the culmination of my cartography and GIS
              coursework at UW. I worked with three classmates to
              combine quantitative and qualitative research methods,
              field work, interviews, data gathering, spatial analysis,
              and map-making to conduct this exploration of the connection
              between public park quality and neighborhood demographics. As the
              GIS expert on my team, my responsibilities on this project were to
              create GIS layers from our field data, gather
              census block level demographic and economic data, and create
              cartograpic products that depict the relationship between the two.
              We prepared our research in a power point presentation and had the opportunity
              to deliver our findings to our professors and peers at the UW-Madison
              undergraduate colloquium.
            </p>
          </div>
          <div className="col-md-4" style={{ paddingTop: 20 }}>
            <embed src={Images.thesis_pdf} width="400px" height="300px" />
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
          <div className="col-md-6">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>Cartographic Design: Travels of Hans Christian Andersen</h5>
            <p className="pl-4 pb-2" style={{ 'font-size': '14px' }}>
              For an advanced cartographic design course, I created a vintage
              inspired map of Danish author, Hans Christian Anderson&#39;s extensive
              travels around Europe during the mid 1800s. In this class, I focused
              on three aspects of static cartography: how maps are seen, how maps
              are understood, and how maps become meaningful. Within these areas, I
              studied visual perception, spatial cognition, color theory, semiotics,
              and artistic epistemologies. I gained a holistic understanding of design
              principles that inform the user interfaces and experiences I create with code.
            </p>
          </div>
          <div className="col-md-6" style={{ paddingTop: 20 }}>
            <img style={{ height: '100%', width: '500px' }} src={Images.hca_map} alt="HCA Map" />
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
          <div className="col-md-11">
            <h5 className="container mb-10 pt-2" style={{ paddingBottom: 10, marginTop: 10 }}>GIS Applications: Off-Campus Housing</h5>
            <p className="pl-4 pb-2" style={{ 'font-size': '14px' }}>
              Prior to my senior thesis, this project marked the culmination
              of my geographic information systems specific coursework. This
              included gathering raw data on new campus-adjacent apartment complexes
              and, using ESRI ArcMap for spatial and statistical analysis, illuminating
              the effect these new buildings had on the affordability of off-campus
              housing.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="pb-4" />
        </div>
      </div>
    </div>

  </div>

export default injectSheet(styles)(CartogPage)
