import RecipeCard from "../components/receipeCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import '../assets/styles/Home.css'





export default function Home(){

 const [recipes, setRecipes] = useState([]);
 const [loading, setLoading] = useState(true);


 useEffect(() => {

  const fetchRandomRecipes = async () => {
   try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    setRecipes(response.data.meals);
   } catch (error) {
    console.error('Error fetching recipes', error);
   } finally {
    setLoading(false);
   }
  };
  fetchRandomRecipes();
 }, []);
 if (loading) return <div className="loading">Loading...</div>;


 return (
  <div className="home">
   <h1>Random Recipes</h1>
   <div className="recipe-list">
    {recipes.map((recipe) => (
     <RecipeCard key={recipe.idMeal} recipe={recipe} />
    ))}
   </div>
  </div>
 );

}