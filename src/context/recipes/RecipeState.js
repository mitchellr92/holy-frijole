import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import {
  GET_RECIPES,
  // ADD_RECIPE,
  // DELETE_RECIPE,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_RECIPE,
  // FILTER_RECIPES,
  // CLEAR_FILTER,
  RECIPE_ERROR,
  // CLEAR_RECIPES
} from "../types";

const RecipeState = props => {
  const initialState = {
    recipes: null,
    error: null
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Get recipes
  const getRecipes = async () => {
    try {
      const res = await axios.get("/api/recipes");

      dispatch({
        type: GET_RECIPES,
        payload: res.data.recipes
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.msg
      });
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        error: state.error,
        getRecipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
