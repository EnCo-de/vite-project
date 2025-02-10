import React from "react";

export default function Ingredients() {
    const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])
    const ingredientsList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    // utilise onSubmit event to handle form data
    function handleSubmit(event) {
        event.preventDefault()
        const ingredientForm = event.currentTarget
        const formData = new FormData(ingredientForm)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        ingredientForm.reset()
    }

    // use form action capabilities in react 19 instead of onSubmit={handleSubmit}
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form  action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="cherry" 
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>New ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand</h2>
                <ul className="ingredients-list">{ingredientsList}</ul>

                {props.ingredients.length >= 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>}
        </main>
        )
}