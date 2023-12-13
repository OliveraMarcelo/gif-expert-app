import { useState } from "react"
import PropTypes from "prop-types"
export const AddCategory = ({onNewCategory})=> {
    const [inputValue,setInputValue] = useState("");
    const onInputChange = (event)=> {
        setInputValue(event.target.value)
    };
    const onSubmit = (event)=> {
        event.preventDefault();
    if(inputValue.trim().length <= 1 ) return ;
    /* const addCategory = (inputValue)=> setCategories( (categories)=> [...categories,inputValue] ); */
    onNewCategory(inputValue)
    setInputValue('')
    };
    //clase validaciones 
    return (
    <>
    <form  onSubmit={onSubmit} >
    <input type="text"
    placeholder="Buscar gif"
    value={inputValue}
    onChange={onInputChange}
    />
      
{/*       <button onClick={onSubmit}>
                agregar categoria
            </button> */}
    </form>
    </>
)
}
AddCategory.propTypes = {
    setCategories : PropTypes.func,
    categories : PropTypes.object,
    onNewCategory : PropTypes.func,
    
}