import { Form, Button } from "react-bootstrap";

function Canvas() {
  return (
    <div style={{ margin: "10% 0 -3% 95%" }}>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        style={{ marginLeft: "15%" }}
      >
        Add
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Make a new entry</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <Form className="needs-validation" noValidate>
            <Form.Group controlId="clientId">
              <Form.Label>Client ID</Form.Label>
              <Form.Control
                type="text"
                name="clientId"
                required
                placeholder="Client ID"
              />
            </Form.Group>
            <Form.Group controlId="contractReferenceId">
              <Form.Label>Contract reference ID</Form.Label>
              <Form.Control
                type="text"
                name="contractReferenceId"
                required
                placeholder="Contract reference ID"
              />
            </Form.Group>
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
