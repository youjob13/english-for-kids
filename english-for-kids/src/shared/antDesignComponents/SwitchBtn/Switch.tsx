import React, { ReactElement } from 'react';
import { Switch } from 'antd';
import './switch.scss';

const SwitchBtn = (): ReactElement => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <Switch
      className="switch"
      defaultChecked
      onChange={onChange}
    /> /* , mountNode */
  );
};

export default SwitchBtn;
