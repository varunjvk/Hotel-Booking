// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// function View() {
//   return (
//     <DropdownButton id="dropdown-item-button" title="Location">
//       <Dropdown.ItemText>Location</Dropdown.ItemText>
//       <Dropdown.Item as="button">Action</Dropdown.Item>
//       <Dropdown.Item as="button">Another action</Dropdown.Item>
//       <Dropdown.Item as="button">Something else</Dropdown.Item>
//     </DropdownButton>
//   );
// }

// export default View;

import LocData from "../Db/Location";
import Form from "react-bootstrap/Form";

function View() {
    let data = LocData.map((ele) => {
        return <option value="1">{ele}</option>;
    });


    return (
        <>
            <br />
            <h5>Location</h5>
        <Form.Select aria-label="Default select example" className="view-css">
                <option>Select Location</option>
                {data}
        </Form.Select>
      </>
    );
}

export default View;