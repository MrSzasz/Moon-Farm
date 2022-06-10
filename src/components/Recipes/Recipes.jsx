import "./Recipes.scss"


const Recipes = ({ recipeName, recipeIng, recipeSteps, recipeID, recipeImg }) => {


  // ==========  RETURN  ========== //

  return (
    <div key={recipeID}>
      <div className="d-flex justify-content-around align-items-center">
        <img className="imgFromRecipe" src={recipeImg} />
        <h4 className="text-center">= {recipeName} =</h4>
      </div>
      <br />
      <ul>{recipeIng}</ul> <br />
      <p>{recipeSteps} </p>
      <br />
      <hr />
    </div>
  );
};

export default Recipes;