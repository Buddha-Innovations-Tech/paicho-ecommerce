import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import InputForm from "../InputForm";

const PersonalInfoForm = ({ title }) => {
  return (
    <>
      <div className="form">
        <Form action="">
          <div className="d-flex justify-content-between mb-27">
            <span className="form__title">{title}</span>
            <span className="form__edit">Edit</span>
          </div>

          <InputForm
            label="Fullname"
            type="text"
            name="Fullname"
            placeholder="Enter your Full Name"
          />

          <InputForm
            label="Phone No"
            type="number"
            name="phone"
            placeholder="Enter your Mobile Number"
          />

          <InputForm
            label="Email address"
            type="text"
            name="email"
            placeholder="Enter your Email Address"
          />

          <Button className="btn__confirm" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PersonalInfoForm;
