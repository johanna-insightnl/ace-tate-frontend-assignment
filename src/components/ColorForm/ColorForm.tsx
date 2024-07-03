import { Container, Row, Col, Alert } from "react-bootstrap";
import InputTextField from "../../UI/inputTextField/InputTextField";
import RectangleButton from "../../UI/Buttons/rectangle/RectangleButton";
import WhiteCard from "../../UI/Cards/WhiteCard";
import { ChangeEvent, useState, useContext } from "react";
import PrimaryButton from "../../UI/Buttons/primary/PrimaryButton";
import { ColorContext } from "../../contexts/ColorContext";
import { IColor } from "../../contexts/ColorContext";

export default function ColorForm() {
  const sizes = ['large', 'medium', 'small'];
  const [showAlert, setShowAlert] = useState(false);
  const [colorObject, setColorObject] = useState({} as IColor["color"])
  const [colorObjectInfo, setColorObjectInfo] = useState<Omit<IColor, "color">>({
    pattern: "acetate",
    name: "",
    id: "",
  });
  const { primary, secondary, tertiary } = colorObject;
  const { name, pattern } = colorObjectInfo;

  const { addColor } = useContext(ColorContext) || {};

  if (!addColor) {
    throw new Error("Check if the function exists in the provider"); // check if the context is available
  }

  const handleSubmit = () => {
    const newColor: IColor = {
      ...colorObjectInfo,
      color: {
        primary,
        secondary,
        tertiary,
      },
      id: Math.floor(Math.random() * 1e18).toString(),
    };

    addColor(newColor);

    setColorObjectInfo({
      pattern: "acetate",
      name: "",
      id: "",
    });
    setColorObject({ primary: '', secondary: '', tertiary: '' });

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  type eventTypes = 'color' | 'name' | 'pattern';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, eventType: eventTypes) => {
    const { name, value } = event.target;

    if (eventType === 'color') {
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
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          New color successfully added!
        </Alert>
      )}
      <InputTextField
        placeholder="spotted-havana"
        value={name}
        onChange={(event) => { handleInputChange(event, 'name') }}
        label="Name reference"
        name="name"
      />
      <div className="pt-5">
        <p>Type of swatch</p>
        <div className="pt-2 d-flex" style={{ gap: "1rem" }}>
          <RectangleButton
            label="Acetate"
            onClick={() => handlePatternChange("acetate")}
            borderLeft={pattern === "acetate" ? "#007bff" : "#FFFFFF"}
          />
          <RectangleButton
            label="Duotone"
            onClick={() => handlePatternChange("duotone")}
            borderLeft={pattern === "duotone" ? "#007bff" : "#FFFFFF"}
          />
        </div>
      </div>
      <Row className="pt-5">
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={primary}
            onChange={(event) => { handleInputChange(event, 'color') }}
            label="Color Code 1"
            name="primary"
          />
        </Col>
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={secondary}
            onChange={(event) => { handleInputChange(event, 'color') }}
            label="Color Code 2"
            name="secondary"
          />
        </Col>
        <Col md={6} className="pb-2">
          <InputTextField
            placeholder="#FFFFF"
            value={tertiary || ""}
            onChange={(event) => { handleInputChange(event, 'color') }}
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
                primary={primary}
                secondary={secondary}
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
