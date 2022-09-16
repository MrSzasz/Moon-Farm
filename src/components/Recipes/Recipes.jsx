import "./Recipes.scss"


const Recipes = ({ recipeName, recipeIng, recipeSteps, recipeID, recipeImg }) => {


  // ==========  RETURN  ========== //

  return (
    <div className="recipeContentContainer" key={recipeID}>
      <div className="titleAndImg">
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