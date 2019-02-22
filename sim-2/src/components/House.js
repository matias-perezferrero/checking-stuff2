import React from "react";

export default function House(props) {
  const { handleDeleteHouse } = props;
  const { property_id, property_name, address, city, state, zip } = props;
  return (
    <div>
      <div>{property_name}</div>
      <div>{address}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
      <button onClick={() => handleDeleteHouse(property_id)}> Delete</button>
    </div>
  );
}
