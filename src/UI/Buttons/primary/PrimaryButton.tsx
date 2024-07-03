import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({onClick, text, disabled}: Props){

  return(
    <Button onClick={onClick} className="primary-button" disabled={disabled}>{text}</Button>
  )
}
