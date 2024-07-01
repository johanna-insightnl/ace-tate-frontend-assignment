import { Button } from "react-bootstrap";

interface Props {
  label: string;
  onClick: () => void;
  borderLeft: string;
}

export default function RectangleButton({ label, onClick, borderLeft }: Props) {
  return (
    <Button
      className="rectangle-button"
      onClick={onClick}
      style={{ borderLeft: `5px solid ${borderLeft}` }}
    >
      {label}
    </Button>
  );
}
