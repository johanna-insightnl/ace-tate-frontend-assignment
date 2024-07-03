import { Container, Row, Col } from "react-bootstrap";
import InputTextField from "../../UI/inputTextField/InputTextField";
import RectangleButton from "../../UI/Buttons/rectangle/RectangleButton";
import WhiteCard from "../../UI/Cards/WhiteCard";
import { useState, useContext } from "react";
import PrimaryButton from "../../UI/Buttons/primary/PrimaryButton";
import { ColorContext } from "../../contexts/ColorContext";
import { IColor } from "../../contexts/ColorContext";

export default function ColorForm() {
  const sizes = ['large', 'medium', 'small'];

  const [colorObject, setColorObject] = useState({} as IColor["color"])
  const [colorObjectInfo, setColorObjectInfo] = useState<Omit<IColor, "color">>({
    pattern: "",
    name: "",
    id: "",
  });


  const { addColor } = useContext(ColorContext);

  // const handleSubmit = () => {
  //   const formData = {
  //     name: colorName,
  //     colorCodes: [colorCode1, colorCode2, colorCode3].filter(code => code),
  //     pattern: pattern
  //   };

  //   console.log(formData);
  // };

  return (
    <Container className="p-5">
      <h1 className="pb-4">Add new color swatch</h1>
      <InputTextField
        placeholder="spotted-havana"
        value={colorObjectInfo.name}
        onChange={(e) => { setColorObjectInfo((oldval) => {return {...oldval, name: e.target.value}}) }}
        label="Name reference"
      />
      <div className="pt-5">
        <p>Type of swatch</p>
        <div className="pt-2 d-flex" style={{gap: "1rem"}}>
          <RectangleButton
            label="Acetate"
            onClick={() => { setColorObjectInfo((oldval) => {
              return {...oldval, pattern: "acetate"}
            }) }}
            borderLeft={pattern === "acetate" ? "#007bff" : "#FFFFFF"}
          />
          <RectangleButton
            label="Duotone"
            onClick={() => { setColorObjectInfo((oldval) => { return{...oldval, pattern: "duotone"}}) }}
            borderLeft={pattern === "duotone" ? "#007bff" : "#FFFFFF"}
          />
        </div>
      </div>
      <Row className="pt-5">
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={colorObject.primary}
            onChange={(e) => { setColorObject((oldval) => { return{...oldval, primary: e.target.value}})}}
            label="Color Code 1"

            />
        </Col>
        <Col md={6}className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorObject.secondary}
          onChange={(e) => { setColorObject((oldval) => { return{...oldval, secondary: e.target.value}}) }}
          label="Color Code 2" />
        </Col>
        <Col md={6} className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorObject.tertiary || ""}
          onChange={(e) => { setColorObject((oldval) => { return{...oldval, tertiary: e.target.value}})}}
          label="Color Code 3 (optional)" />
        </Col>
      </Row>
      <div className="py-5">
        <p>Preview</p>
        <Row className="pt-2">
          {sizes.map((size, index) => (
            <Col key={index}>
              <WhiteCard
                primary={colorObject.primary}
                secondary={colorObject.secondary}
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
