import RecipeList from "@/components/recipe-list";
import Link from "next/link";

async function fetchListofRecipe(){
    try {
        const apiRespone = await fetch('https://dummyjson.com/recipes');
        const data = await apiRespone.json();
        return data?.recipes;
    } catch (error) {
        console.log(error);
    }
}
const Recipe = async() => {
    const recipeList = await fetchListofRecipe();

    return (
        <div className="text-center my-4">
            <h1 className="mb-3 text-2xl font-bold text-green-500">Explore All Recipe Here</h1>
            <Link href="/"
                class="px-4 py-2 mt-6 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
                Go Home
            </Link>
            <RecipeList recipeList={recipeList} />
        </div>
    );
};

export default Recipe;