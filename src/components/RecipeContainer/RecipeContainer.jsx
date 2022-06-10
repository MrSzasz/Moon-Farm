// =========================  LIBRARIES  =========================

import { useEffect, useState } from 'react'

// =========================  CUSTOM IMPORTS  =========================

import Recipes from '../Recipes/Recipes'



const RecipeContainer = ({ recipes }) => {

    const [recipeFromProp, setRecipeFromProp] = useState()


    // ==========  SET RECIPE FROM PROP  ========== //

    useEffect(() => {
        setRecipeFromProp(recipes)
    }, [])


    // ==========  RETURN  ========== //

    return (
        <>
            <h2 className="text-center">RECETAS</h2>
            {recipeFromProp.map((element) => (
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