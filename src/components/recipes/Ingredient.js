import React from "react";

const Ingredient = ({ ingredients, onChange, index }) => {

  console.log(index);

  return (
    <input
      type="text"
      placeholder="Ingredient"
      name="ingredients"
      onChange={onChange}
    />
  );
};

export default Ingredient;
