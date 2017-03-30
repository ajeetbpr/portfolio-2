// @flow

import React from 'react'
import Helmet from 'react-helmet'

import ContactModal from '../contact-modal'
import { APP_NAME } from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: "Caroline's Portfolio Website" },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 mb-4"><p>Hi, I am Caroline</p></h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Something About Me</h3>
          <p>Me Me Meep</p>
          <p>
            <button type="button" role="button" data-toggle="modal" data-target=".js-modal-example" className="btn btn-primary">Contact Caroline</button>
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Something About WebDev</h3>
          <p>Code Code Code</p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Something About Cartography</h3>
          <p>Maps Maps Maps</p>
        </div>
      </div>
    </div>
    <ContactModal />
  </div>

export default HomePage
