import React from 'react'

const Ingredient = ({ingredient, onChange}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Ingredient"
        name="ingredients"
        value={ingredient}
        onChange={onChange}
      />
    </div>
  )
}

export default Ingredient
