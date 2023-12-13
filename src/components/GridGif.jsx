import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGif.js";
import PropTypes from "prop-types"

export const GridGif = ({ category }) => {
const { images, isLoading } = useFetchGifs(category);
return (
    <>
        <h3>{category}</h3>
        {isLoading && <h2> cargandoo </h2>}
        <div className="card-grid">
        {images.map((image) => {
            return (
            <GifItem
                key={image.id}
              //tambien puedo exparcir las props asi ..
                {...image}
            />
            );
        })}
        </div>
    </>
    );
};
GridGif.propTypes = {
    category : PropTypes.string,    
}