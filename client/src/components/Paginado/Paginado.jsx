import React from 'react';
import styles from "../Paginado/Paginado.module.css"

const Paginado = ({ recipesPerPage, allRecipes, currentPage, paginacion })  =>{
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) { 
        pageNumbers.push(i)
    } 

    const handlePrev = (e) => {
        e.preventDefault()
        paginacion(currentPage - 1)
    }

    const handleNext = (e) => {
        e.preventDefault()
        paginacion(currentPage + 1)
    }

    return (
        <div className={styles.divPag}>
            <ul className={styles.ulPage}>
                <li className={styles.liPageNum}>
                    <button className={styles.buttonPageBtn} onClick={handlePrev}  disabled={currentPage === pageNumbers[0]}> Prev </button>
                </li>
                {
                    pageNumbers.map((num) => {
                        return (
                            <li className={styles.liPageNum} 
                                key={num} 
                                active={num.toString()}
                                onClick={() => paginacion(num)} 
                                id={num}
                            >
                                <button className={styles.buttonPageBtn}> {num} </button>
                            </li>
                        )
                    }) 
                }
                <li className={styles.liPageNum}>
                    <button className={styles.buttonPageBtn} onClick={handleNext} disabled={currentPage === pageNumbers[pageNumbers.length - 1]}> Next </button>
                </li>
            </ul>
        </div>
    )
};

export default Paginado;