import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarRecipDet from "../NavbarRecipDet/NavbarRecipDet";
import loader from "../../assets/loader/loader.gif";
import styles from "../RecipeDetail/RecipeDetail.module.css"

const RecipeDetail = (props) => {
    const { id } = useParams()
    const [recipeDetail, setRecipe] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => setRecipe(data))
            .catch((error) => window.alert(`${error.message}`))
        return () => setRecipe({})
    }, [id])

    return (
        <div>
            <NavBarRecipDet />
        <div className={styles.divDetail}>
            <div className={styles.divDetailCont}>
                {
                    recipeDetail[0]? (
                        <div>
                            <div className={styles.divTitleImage}>
                                <h1 className={styles.h1RecipeName}> { recipeDetail[0].name } </h1>
                                        <img src={recipeDetail[0].image} alt={recipeDetail[0].name} width="300px" height="250px" />
                            </div>
                            <div className={styles.divInfoBox}>
                                <h2 className={styles.h2InfoName}> Summary: </h2>
                                <h2 className={styles.pInfoContent}> { recipeDetail[0].summary } </h2>
                                <h2 className={styles.h2InfoName}> Health Score: </h2>
                                <h2 className={styles.pInfoContent}> { recipeDetail[0].healthScore } </h2>
                                <h2 className={styles.h2InfoName}> Diet type: </h2>
                                {
                                    recipeDetail[0].diets.length?
                                        <h2 className={styles.pInfoContent}> { recipeDetail[0].diets } </h2> :
                                        <h2 className={styles.pInfoContent}> There are no diets for this recipe yet </h2>
                                }
                                <h2 className={styles.h2InfoName}> Steps: </h2>
                                {
                                    recipeDetail[0].steps
                                        ? <h2 className={styles.pInfoContent}> { recipeDetail[0].steps } </h2>
                                        : <h2 className={styles.pInfoContent}> This recipe has no steps </h2>
                                }
                                <Link to="/home">
                                    <button className={styles.buttonBackBtn}> Back to the recipe book </button>
                                </Link>
                            </div>
                        </div>
                    ) : <div className={styles.divLoaderCont}>
                            <img className={styles.imgLoaderGif} src={loader} alt="Loader" />
                            <h2 className={styles.pLoader}> Loading </h2>
                        </div>
                }
            </div>
        </div>
        </div>
    )
};
export default RecipeDetail;