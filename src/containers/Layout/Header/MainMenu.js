import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  TERMS_CONDITIONS_PAGE,
  // LISTING_POSTS_PAGE,
  // AGENT_PROFILE_PAGE,
  // PRICING_PLAN_PAGE,
} from 'settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to={HOME_PAGE}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={TERMS_CONDITIONS_PAGE}>Terms & Conditions</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="1">
        <NavLink to={LISTING_POSTS_PAGE}>Listing</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={AGENT_PROFILE_PAGE}>Agent</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={PRICING_PLAN_PAGE}>Pricing</NavLink>
      </Menu.Item> */}
    </Menu>
  );
};

export default MainMenu;
