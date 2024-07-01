import ColorListItem from "./ColorListItem";
import colors from "./colors.json";
import InputTextField from "../../UI/inputTextField/InputTextField";

export default function ColorList() {
  return (
    <>
      <h1>Color List</h1>
      <InputTextField placeholder="Search for a color swatch" />
      {
        colors.map((color) => (
          <ColorListItem key={color.id} color={color} />
        ))
      }
    </>
  )
}
