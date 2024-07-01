import AcetateColorCircle from "../ColorCircle/acetate/AcetateColorCircle";
import DuotoneColorCircle from "../ColorCircle/duotone/DuotoneColorCircle";
import { Card } from "react-bootstrap";

interface Props {
  primary: string;
  secondary?: string;
  children?: string;
  pattern: string;
}

export default function WhiteCard({ primary, secondary, children, pattern }: Props) {

  let circleColorComponent;
  switch (pattern) {
    case "acetate":
      circleColorComponent = <AcetateColorCircle primary={primary} secondary={secondary} />;
      break;
    case "duotone":
      circleColorComponent = <DuotoneColorCircle primary={primary} secondary={secondary} />;
      break;
    default:
      circleColorComponent = <AcetateColorCircle primary="#FEFEFE" secondary="#090909" />;
      break;
  }
  return (
    <Card className="white-card">
      {children}
      {circleColorComponent}
    </Card>
  );
}
