import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../redux/actions"; 
import styles from "../SearchBar/SearchBar.module.css";
const SearchBar = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputName = (e) => {
        e.preventDefault() 
        setName(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        dispatch(getRecipeByName(name))
        setName("")
    }

    return (
        <div className={styles.divSearchBarCont}>
            <input type="text" className={styles.inputBar} placeholder="Enter the name or ingredient of the recipe" onChange={ (e) => handleInputName(e) } />
            <button type="submit" className={styles.buttonSearch} onClick={ (e) => handleSubmit(e) }> Search </button>
        </div>
    )
};

export default SearchBar;