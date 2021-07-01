import {useState} from 'react';
import "./SearchBar.style.css"


const SearchBar = props => {
    const {onClick, placeholder="Search"} = props;
    const [searchQuery,setSearchQuery] = useState("");



    return (
        <div className="searchBarContainer">
            <input className="searchInput" onChange={(e)=>setSearchQuery(e.target.value)} placeholder={placeholder}/>
            <button className="searchButton" onClick={()=>onClick(searchQuery)}>Search</button>
            
        </div>
    );
};



export default SearchBar;