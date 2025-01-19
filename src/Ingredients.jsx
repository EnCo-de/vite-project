export default function Ingredients() {
    const ingredients = ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    const ingredientsList = ingredients.map((ingredient) => {
        <li>{ingredient}</li>
    })
    const addIngredient = function(event) {
        event.preventDefault()
        const ingredient = document.getElementByName('ingredient')
        ingredients.push(ingredient.value)
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form">
                <input type="text" placeholder="cherry" aria-label="Add ingredient"
                    name="ingredient" />
                <button>Include ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand</h2>
                <ul>{ingredientsList}</ul>
            </section>
        </main>
        )
}