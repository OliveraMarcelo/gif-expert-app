import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GridGif } from "./components/GridGif";

export const GifExpertApp = () => {
    const [categories , setCategories] = useState([ "dragon ball"]);
    //usamos spress operator para agregar todas las categorias que ya tenemos 
    //y poder agregar la nueva variable
    //.push sirve para mutar el estado de un elemento
    // el spress operator para crear un nuevo arreglo en la cual insertamos la nueva categoria
    const onAddCategory = (newCategory)=> {
        if(categories.includes(newCategory)) return ;// validacion que si la nueva categoria ya estaba incluida en el array salir de la funcion 
        setCategories( (categories)=> [newCategory,...categories]);
    } ;
    return (
        <>
            {/*titulo  */}
            <h1>Gif Expert App</h1>
            {/* input , add category */}
            <AddCategory
            // estabamos practicando comunicacion de hijo a padre */}
            
                /* setCategories={setCategories} categories={categories} */
                //practicaremos comunicacion de padre a hijo
                onNewCategory = {onAddCategory}
                //on... nos da el significado que emite algo 
                />
            {/* listado de gif  */}
            {/* gif item  */}
                {
                    categories.map((category) =>{
                        return (
                            <GridGif key={category} category={category} />
                        )
                    })
                }
        </>
    );
};
