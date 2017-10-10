import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <div className='container container__main'>
      {children}
    </div>
    <footer>
      <div className='tab-nav__container'>
        <Link class='tab-nav' to='/' activeClassName='tab-nav__active'>
          <i className='fa fa-list-alt'></i>
        </Link>
      </div>
      <div className='tab-nav__container'>
        <IndexLink className='tab-nav' to='/' activeClassName='tab-nav__active'>
          <i className='fa fa-search'></i>
        </IndexLink>
      </div>
      <div className='tab-nav__container'>
        <IndexLink className='tab-nav' to='/' activeClassName='tab-nav__active'>
          <i className='fa fa-plus'></i>
        </IndexLink>
      </div>
      <div className='tab-nav__container'>
        <IndexLink className='tab-nav' to='/' activeClassName='tab-nav__active'>
          <i className='fa fa-cog'></i>
        </IndexLink>
      </div>
    </footer>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
