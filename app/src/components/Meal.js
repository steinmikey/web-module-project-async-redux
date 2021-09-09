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
    <div>
      <h3>{meal.strMeal}</h3>
      <div>
        <div className="ingredients">
          <div>
            <h3>ingredients:</h3>
            {ingredients.map((item) => {
              return <div>{item}</div>;
            })}
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
