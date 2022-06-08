import React from "react";

const Recipes = ({ recipeName, recipeIng, recipeSteps }) => {


  return (
    <div>
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




// Masa de tarta; 1kg Arandanos; Ralladura de limon; 1 Cda jugo de limon; 30g almidon; 100g azucar; 1/2 cda canela; 1 huevo; leche


['Masa de tarta', '1kg Arandanos', 'Ralladura de limon', '1 Cda jugo de limon', '30g almidon', '100g azucar', '1/2 cda canela', '1 huevo', 'leche']
