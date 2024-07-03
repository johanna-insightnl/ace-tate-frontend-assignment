import { Form } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  icon?: boolean;
}

export default function InputTextField({ placeholder, value, onChange, label, name, icon }: TextInputProps) {
  return (
    <Form.Group className="position-relative">
      {label && <Form.Label className="bold">{label}</Form.Label>}
      {icon &&
        <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
          <FontAwesomeIcon icon={faSearch}/>
        </div>
      }
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-text-field"
        name={name}
        style={{padding: icon ? "0.7rem 2.5rem" : " 0.7rem 1.3rem"}}
      />
    </Form.Group>
  )
}
