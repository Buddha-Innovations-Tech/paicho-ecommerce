import Form from "react-bootstrap/Form";

const InputForm = ({ label, type, name, placeholder }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          required
        />
      </Form.Group>
    </>
  );
};

export default InputForm;
