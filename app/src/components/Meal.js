import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { fetchStart, fetchSuccess, fetchFail } from "../actions";
import { getMeal } from "../actions";

const Meal = (props) => {
  const { meal, isFetching, error } = props;

  useEffect(() => {
    props.getMeal();
  }, []);

  const handleNewMeal = () => {
    props.getMeal();
  };
  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${[i]}`] !== "" && meal[`strIngredient${[i]}`] !== null) {
      const amount = meal[`strMeasure${[i]}`];
      const ingredient = meal[`strIngredient${[i]}`];

      ingredients.push(amount + " " + ingredient);
    }
  }

  return (
    <div className="recipe-container">
      <h2>{meal.strMeal}</h2>
      <div className="picNdir-container">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="recipe-text">
          <div className="ingredients">
            <h3>Ingredients:</h3>
            {ingredients.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
          <div className="directions">
            <h3>Directions:</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>

      <button onClick={handleNewMeal}>new meal</button>
      <button>save recipe</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    meal: state.meal,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getMeal })(Meal);
