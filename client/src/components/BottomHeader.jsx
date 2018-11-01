import React from 'react';
import styles from '../css/BottomHeader.css'
import { megaMenuAssets } from '../assets/megaMenuData';
import MegaMenu from '../components/MegaMenuComponents/MegaMenu';
import Search from '../components/SearchComponents/Search';
import EmptyBagIcon from '../components/EmptyBagIcon';

const BottomHeader = (props) => (
  <div className="glass-header-bottom-desktop">
    <img id="logo" src="/assets/img/shoedidas_white_2.svg"></img>
    <ul className="menu-main">
      <MegaMenu megaMenuAssets={megaMenuAssets} />
      <ul className="search-menu">
        <Search />
        <EmptyBagIcon />
      </ul>
    </ul >
  </div >
)

module.exports = BottomHeader;