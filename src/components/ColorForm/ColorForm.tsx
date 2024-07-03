import { Container, Row, Col } from "react-bootstrap";
import InputTextField from "../../UI/inputTextField/InputTextField";
import RectangleButton from "../../UI/Buttons/rectangle/RectangleButton";
import WhiteCard from "../../UI/Cards/WhiteCard";
import { ChangeEvent, useState, useContext } from "react";
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

  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("ColorForm must be used within a ColorProvider");
  }
  const { addColor } = context;

  const handleSubmit = () => {
    const newColor: IColor = {
      ...colorObjectInfo,
      color: {
        primary: colorObject.primary,
        secondary: colorObject.secondary,
        tertiary: colorObject.tertiary,
      },
      id: Math.floor(Math.random() * 1e18).toString(), // Generate a simple unique ID
    };

    addColor(newColor);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in colorObject) {
      setColorObject(prev => ({ ...prev, [name]: value }));
    } else {
      setColorObjectInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePatternChange = (pattern: string) => {
    setColorObjectInfo(prev => ({ ...prev, pattern }));
  };

  return (
    <Container className="p-5">
      <h1 className="pb-4">Add new color swatch</h1>
      <InputTextField
        placeholder="spotted-havana"
        value={colorObjectInfo.name}
        onChange={handleInputChange}
        label="Name reference"
        name="name"
      />
      <div className="pt-5">
        <p>Type of swatch</p>
        <div className="pt-2 d-flex" style={{gap: "1rem"}}>
          <RectangleButton
            label="Acetate"
            onClick={() => handlePatternChange("acetate")}
            borderLeft={colorObjectInfo.pattern === "acetate" ? "#007bff" : "#FFFFFF"}
          />
          <RectangleButton
            label="Duotone"
            onClick={() => handlePatternChange("duotone")}
            borderLeft={colorObjectInfo.pattern === "duotone" ? "#007bff" : "#FFFFFF"}
          />
        </div>
      </div>
      <Row className="pt-5">
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={colorObject.primary}
            onChange={handleInputChange}
            label="Color Code 1"
            name="primary"
            />
        </Col>
        <Col md={6}className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorObject.secondary}
          onChange={handleInputChange}
          label="Color Code 2"
          name="secondary"
          />
        </Col>
        <Col md={6} className="pb-2">
          <InputTextField
          placeholder="#FFFFF"
          value={colorObject.tertiary || ""}
          onChange={handleInputChange}
          label="Color Code 3 (optional)"
          name="tertiary"
          />
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
                pattern={colorObjectInfo.pattern}
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
