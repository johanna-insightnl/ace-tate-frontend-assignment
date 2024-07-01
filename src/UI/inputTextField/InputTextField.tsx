import { Form } from 'react-bootstrap'

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTextField({ placeholder, value, onChange }: TextInputProps) {
  return (
    <Form.Control
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
  )
}
