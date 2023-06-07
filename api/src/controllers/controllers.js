
const axios = require("axios");
const { Recipe, Diet } = require("../db");

const getDataFromApi = async () => {

    // Api creada a partir de la data de la Api de spoonacular para evitar límite de request a la Api
    const response = await axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5")
    // console.log(response)
    const dataFromApi = await response.data.results.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            summary: recipe.summary.replace(/<[^>]*>?/g, ""), //Devuelve una cadena de texto que contiene solo el texto de la descripción de la receta, sin ninguna etiqueta HTML.
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions[0]?.steps.map((r) => { //es un nuevo arreglo de cadenas de texto que contiene solo los pasos de instrucción de la primera instrucción analizada de la receta.
                return r.step
            }), // steps es un array
            diets: recipe.diets.join(", ")
        }
    })
    return dataFromApi
};


const getDataFromDb = () => { // Obtiene datos de una base de datos relacionales utilizando Sequelize, y en particular busca todas las recetas y las dietas asociadas con ellas.
    const dataFromDb = Recipe.findAll({
        include: {
            model: Diet, // Incluyo al modelo Diet para asociarlo a mis recetas
            attributes: ["name"], // A través del atributo "name"
            through: {
                attributes: []
            }
        }
    })
    return dataFromDb
}; 

const dataFromDb = async () => { //Devuelve un nuevo arreglo de objetos de receta que se ajustan al formato requerido. 
    const dataDb = await getDataFromDb()
    const recipeFromDb = dataDb.map((r) => ({
        id: r.id,
        name: r.name,
        image: r.image,
        summary: r.summary,
        healthScore: r.healthScore,
        steps: r.steps,
        diets: r.diets.length
                ? r.diets.map((d) => d.name).join(", ")
                : r.diets
    }))
    return recipeFromDb
};

const getAllRecipes = async () => { //Se utiliza para obtener todas las recetas disponibles desde dos fuentes diferentes (API y base de datos), combinarlas en una sola lista y devolver el resultado en forma de arreglo de objetos de recetas combinados. Esto permite que se pueda acceder a todas las recetas disponibles en un solo lugar, independientemente de la fuente de origen, lo que facilita el trabajo con las recetas en otras partes del código.
    const apiRecipes = await getDataFromApi()
    const dbRecipes = await dataFromDb()
    const allRecipes = apiRecipes.concat(dbRecipes)
    return allRecipes
};

// --------------------------------------------------CONTROLADOR RECIPE--------------------------------------------------
const getRecipeById = async (id) => { //se utiliza para buscar una receta específica por su ID en la lista de recetas combinadas obtenida de la función getAllRecipes. Esto permite que se pueda acceder a la información de una receta específica utilizando su ID, lo que facilita la búsqueda y el acceso a la información de la receta en otras partes del código.
    const allRecipes = await getAllRecipes()
    const recipeById = await allRecipes.filter((r) => r.id == id)
    if (recipeById) return recipeById
    else throw Error(`No recipe found with the ID: ${id}`)
};

const createRecipe = async (name, image, summary, healthScore, steps, diets) => { // se utiliza para crear una nueva receta en la base de datos y asociarla con una o más dietas.
    if (!name || !summary || !healthScore || !steps) throw Error("Missing important information")
    const newRecipe = await Recipe.create({
        name,
        image,
        summary,
        healthScore,
        steps,
        diets
    })
    newRecipe.addDiet(diets)
    return newRecipe
};

// --------------------------------------------------CONTROLADOR DIET-------------------------------------------------------

let diets = [
    { name: "Gluten Free" },
    { name: "Ketogenic" },
    { name: "Lacto-Ovo-Vegetarian" },
    { name: "Vegan" },
    { name: "Pescatarian" },
    { name: "Paleo" },
    { name: "Primal" },
    { name: "Low FODMAP" },
    { name: "Whole 30" }
];

const getDiets = async () => { //se utiliza para obtener una lista de todas las dietas disponibles en la base de datos. 
    const allDiets = await Diet.findAll()
    if (allDiets.length > 0) return allDiets.map((diet) => diet.name)
    else { //Si no hay dietas disponibles, se crean y se agregan a la base de datos una lista predeterminada de dietas.
        defaultDiets = await Diet.bulkCreate(diets)
        return defaultDiets.map((diet) => diet.name)
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    getDiets
};