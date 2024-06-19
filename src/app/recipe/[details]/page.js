import RecipeDetailsInfo from "@/components/recipe-details";
import Link from "next/link";


async function fetchRecipeDetails(recipeId){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        const result = await apiResponse.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
const RecipeDetails = async({params}) => {
    const recipeDetails = await fetchRecipeDetails(params?.details);
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="my-3 text-2xl font-bold text-green-500">Explore All Recipe Details Here</h1>
                <Link href="/recipe"
                    class="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
                    Recipe List
                </Link>
            </div>
            <RecipeDetailsInfo recipeDetails={recipeDetails} />
        </div>
    );
};

export default RecipeDetails;