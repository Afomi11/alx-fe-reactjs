import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();  // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetching data from the mock JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching the recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;  // Display loading while the recipe is fetched
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {/* Example ingredients list */}
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Cooking Instructions</h2>
      <p className="mb-4">
        {/* Example cooking instructions */}
        Step-by-step instructions for preparing the dish go here.
      </p>
    </div>
  );
};

export default RecipeDetail;
