import SingleColorCircle from "../../UI/ColorCircle/single/SingleColorCircle";
import AcetateColorCircle from "../../UI/ColorCircle/acetate/AcetateColorCircle";
import DuotoneColorCircle from "../../UI/ColorCircle/duotone/DuotoneColorCircle";

interface Color {
  id: string;
  name: string;
  pattern: string;
  color: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
}

interface Props {
  color: Color;
}

export default function ColorListItem({ color }: Props){
  const { name, color: { primary, secondary }, pattern } = color;

  let circleColorComponent;

  switch(pattern){
    case "acetate":
      circleColorComponent = <AcetateColorCircle primary={primary} secondary={secondary}/>
      break;
    case "duotone":
      circleColorComponent = <DuotoneColorCircle primary={primary} secondary={secondary}/>
      break;
    default:
      circleColorComponent = <SingleColorCircle primary={primary}/>
      break;
  }

  return (
    <div className="d-flex align-items-center">
      {circleColorComponent}
      <p>{name}</p>
    </div>
  )
}
