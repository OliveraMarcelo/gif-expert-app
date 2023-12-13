import PropTypes from "prop-types"

export const GifItem = ({title,id,url}) => {

  return (
    <div className='card'>
        <img src={url} alt={title} />
        {title}
    </div>
  )
}
GifItem.propTypes = {
  title : PropTypes.string,
  id : PropTypes.string,    
  url : PropTypes.string,    

}