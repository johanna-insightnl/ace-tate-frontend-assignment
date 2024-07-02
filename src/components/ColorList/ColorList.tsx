import ColorListItem from "./ColorListItem";
import colors from "./colors.json";
import InputTextField from "../../UI/inputTextField/InputTextField";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

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
    <Container className="p-5">
      <h1 className="pb-4">Color swatches</h1>
      <InputTextField
        placeholder="Search for a color swatch"
        value={searchText}
        onChange={handleInputChange}
      />
      <Row className="pt-5 scrollable-row">
        {
          filteredColors.map((color) => (
            <ColorListItem key={color.id} color={color} />
          ))
        }
      </Row>
    </Container>
  )
}
