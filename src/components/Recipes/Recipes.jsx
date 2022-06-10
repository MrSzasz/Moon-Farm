
const Recipes = ({ recipeName, recipeIng, recipeSteps, recipeID }) => {


  // ==========  RETURN  ========== //

  return (
    <div key={recipeID}>
      <img src="https://imgur.com/JfwEdwn" alt="" />
      <h4 className="text-center">= {recipeName} =</h4>
      <br />
      <ul>{recipeIng}</ul> <br />
      <p>{recipeSteps} </p>
      <br />
      <hr />
    </div>
  );
};

export default Recipes;