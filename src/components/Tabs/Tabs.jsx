import React from 'react';
import './Tabs.css';
import Tab from '../Tab/Tab';

function Tabs() {

  return (
    <div className="tabs">
      <Tab id="tabDay" name="Day" isActive={true} />
      <Tab id="tabWeek" name="Week" isActive={false} />
      <Tab id="tabMonth" name="Month" isActive={false} />
      <Tab id="tabYear" name="Year" isActive={false} />
    </div>
  );
}

export default Tabs; 