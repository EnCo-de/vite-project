import React from "react";

export default function Ingredients() {
    const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])
    let ingredientsList = ingredients.map((ingredient) => {
        <li key={ingredient}>{ingredient}</li>
    })
    alert(ingredientsList)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        alert(formData)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

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
                <h2>2 Ingredients</h2>
                <ul className="ingredients-list">
                    <li key="{ingredient}">{ingredients}</li>
                    {
                        ingredients.map((ingredient) => {
                            <li key={ingredient}>{ingredient}</li>
                        })
                    }
                </ul>
            </section>
        </main>
        )
}