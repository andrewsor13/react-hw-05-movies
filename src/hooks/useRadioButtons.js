import { useState } from 'react';

const useRadioButtons = () => {
  const [radioValue, setRadioValue] = useState('1');

  const handleSelect = e => {
    setRadioValue(e.currentTarget.value);
    console.log(radioValue);
  };

  return {
    handleSelect,
    radioValue,
  };
};

export default useRadioButtons;
