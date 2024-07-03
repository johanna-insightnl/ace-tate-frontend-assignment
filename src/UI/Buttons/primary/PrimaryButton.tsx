import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

interface Props {
  text: string;
  onClick: () => void;
  name: string;
  primary: string;
  secondary: string;
}

export default function PrimaryButton({onClick, text, name, primary, secondary}: Props){
  const [disabled, setDisabled] = useState(true); // Start with disabled state true

  useEffect(() => {
    if (name && primary && secondary) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, primary, secondary]);

  return(
    <Button onClick={onClick} className="primary-button" disabled={disabled}>{text}</Button>
  )
}
