import React from "react";
import { Link } from "react-router-dom";
import styles from "../RecipeCard/RecipeCard.module.css"

export const RecipeCard = ({ id, name, image, healthScore, diets }) => {
    return (
        <Link className={styles.linkstyle} to={`/recipes/${id}`}>
            <div className={styles.divCont}>
                <section className={styles.divImgName}>
                    <h1 className={styles.recipeName}> {name} </h1>
                    <img src={image} alt={name} width="300px" />
                </section>
                <section className={styles.divInfo}>
                    <span className={styles.spanInfoName}> Diet type: </span> 
                    {
                        diets.length?
                        <span className={styles.spanInfoContent}> {diets.charAt(0).toUpperCase() + diets.slice(1)} </span> :
                        <span className={styles.spanInfoContent}> There are no diets for this recipe yet </span>
                    }
                </section>
                <span className={styles.divInfo}>
                    <span className={styles.spanInfoName}> Health Score: </span>
                    <span className={styles.spanInfoContent}> {healthScore} </span>
                </span>
            </div>
        </Link>
    )
};



