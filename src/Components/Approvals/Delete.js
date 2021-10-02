import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Delete extends React.Component {
  deleteRow = () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios
        .delete(
          `https://avcs-platform.herokuapp.com/approvals/${this.props.id}`,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, ""),
            },
          }
        )
        .then(() => {
          alert("Deleted succesfully");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <Button
        onClick={this.deleteRow}
        style={{ backgroundColor: "white", border: "none", marginLeft: "2.5%" }}
      >
        <FontAwesomeIcon icon={faTrashAlt} style={{ color: "blue" }} />
      </Button>
    );
  }
}

export default Delete;
