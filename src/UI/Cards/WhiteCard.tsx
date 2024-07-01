import AcetateColorCircle from "../ColorCircle/acetate/AcetateColorCircle";
import DuotoneColorCircle from "../ColorCircle/duotone/DuotoneColorCircle";
import { Card } from "react-bootstrap";

interface Props {
  primary: string;
  secondary?: string;
  children?: string;
  pattern: string;
  size?: string;
}

export default function WhiteCard({ primary, secondary, children, pattern, size }: Props) {
  let buttonSizeClass = '';
  switch (size) {
    case 'large':
      buttonSizeClass = 'larg';
      break;
    case 'medium':
      buttonSizeClass = 'medium';
      break;
    default:
      buttonSizeClass = 'small';
      break;
  }

  let circleColorComponent;
  switch (pattern) {
    case "acetate":
      circleColorComponent = <AcetateColorCircle primary={primary} secondary={secondary} buttonSizeClass={buttonSizeClass} />;
      break;
    case "duotone":
      circleColorComponent = <DuotoneColorCircle primary={primary} secondary={secondary} buttonSizeClass={buttonSizeClass}  />;
      break;
    default:
      circleColorComponent = <AcetateColorCircle primary="#FEFEFE" secondary="#090909"  buttonSizeClass={buttonSizeClass} />;
      break;
  }
  return (
    <Card className="white-card">
      {children}
      {circleColorComponent}
    </Card>
  );
}
