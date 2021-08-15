import "./26.1 search-box.styles.css.css"


export const SearchBox=({placeholder,handleChange})=>{
   return  <input type="text" placeholder={placeholder}  onChange={handleChange}/>
}