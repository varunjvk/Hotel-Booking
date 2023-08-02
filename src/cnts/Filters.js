import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

export default function Filters() {
  return (
      <>
          <br />
      <h5>Filters</h5>
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Seating Area"
        />

      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="AC"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Non-AC"

      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="TV"
        
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="King Sized Bed"
        
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Queen Sized Bed"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Food Delivery"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Swimming Pool"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Wi-Fi"
      />
      <MDBCheckbox
        name="flexCheck"
        value=""
        id="flexCheckDefault"
        label="Restaurant and Dining"
      />
    </>
  );
}
