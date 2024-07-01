import ColorListItem from "./ColorListItem";
import colors from "./colors.json";
import InputTextField from "../../UI/inputTextField/InputTextField";
import { useState } from "react";

export default function ColorList() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const sortedColors = colors.sort((a, b) => a.name.localeCompare(b.name));

  const filteredColors = sortedColors.filter(color =>
    color.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <InputTextField
        placeholder="Search for a color swatch"
        value={searchText}
        onChange={handleInputChange}
      />
      {
        filteredColors.map((color) => (
          <ColorListItem key={color.id} color={color} />
        ))
      }
    </>
  )
}
