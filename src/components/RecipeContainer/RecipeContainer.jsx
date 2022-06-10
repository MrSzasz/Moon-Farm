import React from 'react'
import Recipes from '../Recipes/Recipes'

const RecipeContainer = ({ recipes }) => {

    const recipeProp = recipes

    return (
        <>
            <h2 className="text-center">RECETAS</h2>
            {recipeProp.map((element) => (
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