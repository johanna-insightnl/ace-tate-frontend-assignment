import SingleColorCircle from "../../UI/ColorCircle/SingleColorCircle";
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

  return (
    <div>
      <SingleColorCircle primary={primary}/>
      <p>{name}</p>
    </div>
  )
}
