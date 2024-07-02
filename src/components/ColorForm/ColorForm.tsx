import { Container, Row, Col } from "react-bootstrap";
import InputTextField from "../../UI/inputTextField/InputTextField";
import RectangleButton from "../../UI/Buttons/rectangle/RectangleButton";
import WhiteCard from "../../UI/Cards/WhiteCard";
import { useState } from "react";
import PrimaryButton from "../../UI/Buttons/primary/PrimaryButton";

export default function ColorForm() {
  const [colorName, setColorName] = useState("");
  const [colorCode1, setColorCode1] = useState("");
  const [colorCode2, setColorCode2] = useState("");
  const [colorCode3, setColorCode3] = useState("");
  const [pattern, setPattern] = useState("");
  const sizes = ['large', 'medium', 'small'];

  const handleSubmit = () => {
    const formData = {
      name: colorName,
      colorCodes: [colorCode1, colorCode2, colorCode3].filter(code => code),
      pattern: pattern
    };

    console.log(formData);
  };

  return (
    <Container className="p-5">
      <h1 className="pb-4">Add new color swatch</h1>
      <InputTextField
        placeholder="spotted-havana"
        value={colorName}
        onChange={(e) => { setColorName(e.target.value) }}
        label="Name reference"
      />
      <div className="pt-5">
        <p>Type of swatch</p>
        <div className="pt-2 d-flex" style={{gap: "1rem"}}>
          <RectangleButton
            label="Acetate"
            onClick={() => { setPattern("acetate") }}
            borderLeft={pattern === "acetate" ? "#007bff" : "#FFFFFF"}
          />
          <RectangleButton
            label="Duotone"
            onClick={() => { setPattern("duotone") }}
            borderLeft={pattern === "duotone" ? "#007bff" : "#FFFFFF"}
          />
        </div>
      </div>
      <Row className="pt-5">
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={colorCode1}
            onChange={(e) => { setColorCode1(e.target.value)}}
            label="Color Code 1"
            />
        </Col>
        <Col md={6}className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorCode2}
          onChange={(e) => { setColorCode2(e.target.value) }}
          label="Color Code 2" />
        </Col>
        <Col md={6} className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorCode3}
          onChange={(e) => { setColorCode3(e.target.value)}}
          label="Color Code 3 (optional)" />
        </Col>
      </Row>
      <div className="py-5">
        <p>Preview</p>
        <Row className="pt-2">
          {sizes.map((size, index) => (
            <Col key={index}>
              <WhiteCard
                primary={colorCode1}
                secondary={colorCode2}
                pattern={pattern}
                size={size}
              />
            </Col>
          ))}
        </Row>
      </div>
      <PrimaryButton
        text="Publish"
        onClick={handleSubmit}
      />
    </Container >
  )
}
