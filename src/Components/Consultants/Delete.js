import React from "react"
import { Button } from "react-bootstrap"
import axios from "axios"

class Delete extends React.Component {
  deleteRow = () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios
        .delete(
          `https://avcs-platform.herokuapp.com/consultants/${this.props.id}`,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, "")
            }
          }
        )
        .then(() => alert("Deleted succesfully"))
        .catch((error) => console.log(error))
    }
  }

  render() {
    return <Button onClick={this.deleteRow}>Delete</Button>
  }
}

export default Delete
