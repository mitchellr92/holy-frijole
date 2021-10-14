import {
  GET_RECIPES,
  ADD_RECIPE,
  // DELETE_RECIPE,
  SET_CURRENT
  // CLEAR_CURRENT,
  // UPDATE_RECIPE,
  // FILTER_RECIPES,
  // CLEAR_FILTER,
  // RECIPE_ERROR,
  // CLEAR_RECIPES
} from "../types";

const RecipeReducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};

export default RecipeReducer;
