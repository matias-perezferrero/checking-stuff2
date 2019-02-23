import React from "react";

export default function House(props) {
  const { handleDeleteHouse } = props;
  const {
    property_id,
    property_name,
    address,
    city,
    state,
    zip,
    image_url,
    monthly_mortgage_amount,
    desired_rent
  } = props;
  return (
    <div>
      <div>{property_name}</div>
      <div>{address}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
      <div>{image_url}</div>
      <div>{monthly_mortgage_amount}</div>
      <div>{desired_rent}</div>
      <button onClick={() => handleDeleteHouse(property_id)}> Delete</button>
    </div>
  );
}
