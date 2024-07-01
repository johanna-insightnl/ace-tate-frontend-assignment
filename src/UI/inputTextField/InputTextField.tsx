import { Form } from 'react-bootstrap'

interface TextInputProps {
  placeholder?: string;
}

export default function InputTextField({ placeholder }: TextInputProps) {
  return (
    <Form.Control
      placeholder={placeholder}
  />
  )
}
