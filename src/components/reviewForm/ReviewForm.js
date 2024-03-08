import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  const [reviewBody, setReviewBody] = useState(defaultValue);

  const handleChange = (e) => {
    setReviewBody(e.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          value={reviewBody}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="outline-info"
        onClick={handleSubmit}
        disabled={!reviewBody}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;