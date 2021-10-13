import React from "react";

const RecipeForm = () => {
  return (
    <div className="d-flex">
      <form className="border border-danger p-5 m-auto w-50">
        <div className="d-flex">
          <div className="me-5">
            <h4>Team Name</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Recipe Name</h4>
            <input type="text" />
          </div>
        </div>
        <div>
          <h4>Ingredients</h4>
          <ol className="d-flex flex-wrap">
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
          </ol>
        </div>
        <h4>Directions</h4>
        <div className="input-group">
          <textarea
            name=""
            id=""
            cols="300"
            rows="12"
            className="form-control"
          ></textarea>
        </div>
        <div>
          <h4>Cooking Time</h4>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
