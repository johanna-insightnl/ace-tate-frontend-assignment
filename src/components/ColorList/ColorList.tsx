import ColorListItem from "./ColorListItem";
// import colors from "./colors.json";
import InputTextField from "../../UI/inputTextField/InputTextField";
import { useState, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { ColorContext } from "../../contexts/ColorContext";

export default function ColorList() {
  const [searchText, setSearchText] = useState("");
  const colorContext = useContext(ColorContext);

  if (!colorContext) {
    return null;
  }
  const { colors } = colorContext;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const sortedColors = colors.sort((a, b) => a.name.localeCompare(b.name));

  const filteredColors = sortedColors.filter(color =>
    color.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container className="p-4">
      <h1 className="pb-4">Color swatches</h1>
      <InputTextField
        placeholder="Search for a color swatch"
        value={searchText}
        onChange={handleInputChange}
        name="searchText"
        icon={true}
      />
      <Row className="pt-5 scrollable-row">
        {
          filteredColors.length === 0 ? (
            <p>No results found.</p>
          ) : (
            filteredColors.map((color) => (
              <ColorListItem key={color.id} color={color} />
            ))
          )
        }
      </Row>
    </Container>
  )
}
