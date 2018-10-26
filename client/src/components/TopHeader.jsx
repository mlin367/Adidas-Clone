import React from 'react';
import styles from '../css/TopHeader.css'

const TopHeader = (props) => {
  return (
    <nav className="glass-header-top-desktop">
      <div className="inner-for-vertical-align">
        <a> Help </a>
        <div className="menu-spacer"></div>
        <a> Order Tracking and Returns </a>
        <div className="menu-spacer"></div>
        <em>
          <a> Newsletter Signup </a>
        </em>
        <a> Login </a>
      </div>
    </nav>
  )
}

module.exports = TopHeader;