import { Container } from "react-bootstrap";
import InputTextField from "../../UI/inputTextField/InputTextField";

export default function ColorForm(){
  return (
    <Container>
      <h1 className="pb-4">Add new color swatch</h1>
      <InputTextField placeholder="spotted-havana" value="" onChange={() => {}} label="Name reference" />
    </Container>
  )
}
