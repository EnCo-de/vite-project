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

    // use form action capabilities instead, in react 19


    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="cherry" 
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>New ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand</h2>
                <ul className="ingredients-list">{ingredientsList}</ul>
            </section>
        </main>
        )
}