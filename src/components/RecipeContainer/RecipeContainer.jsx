// =========================  CUSTOM IMPORTS  =========================

import Recipes from '../Recipes/Recipes'



const RecipeContainer = ({ recipes }) => {

    // ==========  RETURN  ========== //

    return (
        <>
            <h2 className="text-center">RECETAS</h2>
            {(recipes).map((element) => (
                <div key={element.recipeID}>
                    <Recipes
                        recipeName={element.recipeName}
                        recipeIng={element.recipeIng}
                        recipeSteps={element.recipeSteps}
                        recipeID={element.recipeID}
                        recipeImg={element.recipeImg}
                    />
                </div>
            ))}
        </>
    )
}

export default RecipeContainer