import { Clock, ChefHat } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'

export const RecipeCard = ({ recipe, type = 'recipes' }) => {
  const { title, prepTime, cookTime, difficulty, tags, image } = recipe

  return (
    <Card hover className="group">
      <Link to={`/${type}/${recipe.id}`}>
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img 
            src={image || "https://placehold.co/800x450"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl mb-3 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span> {prepTime + (cookTime || 0)} min</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-4 h-4 mr-2" />
              <span>{difficulty}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  )
}