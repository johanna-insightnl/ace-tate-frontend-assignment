import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  onClick: () => void;
}

export default function PrimaryButton({onClick, text}: Props){
  return(
    <Button onClick={onClick} className="primary-button">{text}</Button>
  )
}
