import { RecipeCard } from './RecipeCard'

export const RecipeGrid = ({ recipes, type = 'recipes' }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} type={type} />
    ))}
  </div>
);