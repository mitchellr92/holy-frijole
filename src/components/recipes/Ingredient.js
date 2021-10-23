import React, { useEffect } from "react";

const Ingredient = ({ ingredients, onChange, index }) => {
  useEffect(() => {
  }, []);
  
  const value = ingredients[index];
  const name = "ingredient" + index;

  console.log(value)

  return (
    <input
      type="text"
      placeholder="Ingredient"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Ingredient;
