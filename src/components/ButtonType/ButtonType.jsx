import { React } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from './ButtonType.module.css';
export default function ButtonType({ radios, handleSelect, radioValue }) {
  return (
    <div className={styles.buttonContainer}>
      <ButtonGroup>
        {radios.map((radio, index) => (
          <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleSelect}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
