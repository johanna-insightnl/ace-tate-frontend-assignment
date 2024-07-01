import ColorListItem from "./ColorListItem";
import colors from "./colors.json";

export default function ColorList() {
  return (
    <>
      <h1>Color List</h1>
      {
        colors.map((color) => (
          <ColorListItem key={color.id} color={color} />
        ))
      }
    </>
  )
}
