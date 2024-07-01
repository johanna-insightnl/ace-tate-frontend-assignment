import { Form } from 'react-bootstrap'

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export default function InputTextField({ placeholder, value, onChange, label }: TextInputProps) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-text-field"
      />
    </Form.Group>
  )
}
