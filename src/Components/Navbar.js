import React ,{useState ,useEffect} from "react";
import logo from "../Images/logo.png"
import profile from "../Images/profile-pic.png"
import diamond from "../Images/diamond.png"
import heart from "../Images/heart.png"
import bell from "../Images/bell.png"
import KeazoNBOOKS from "../Images/KeazoNBOOKS.png"
import search from "../Images/search.png"
import "../style.css"

const Navbar = ({onSearch})=>{

    const [query,setQuery] =  useState("")

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch({query});
    };

    return(
        <div className="navbar">
            <div className="log-div">
                <img src={logo} alt="log" className="log image-nav" />
                <img src={KeazoNBOOKS} alt="log-name" className="log-name image-nav" />
            </div>
      {/* <SearchBar onSearch2 ={onSearch}/> */}
            <form className="searchbar-div" onSubmit={handleSearch}>
                <div className="search-bar">
                    <img src={search} alt="search" className="search-icon-img" />
                    <input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                        placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                    />
                </div>
                <div className="search-button">
                    <button className="search-btn">Search</button>
                </div>
            </form>
            <div className="icons-div">
                <div className="icon-div icon-div-1">
                    <img src={heart} alt="book" className="book image-nav" />
                </div>
                <div className="icon-div icon-div-2">
                    <img src={bell} alt="notification" className="bell image-nav" />
                </div>
                <div className="icon-div icon-div-3">
                    <img src={diamond} alt="pro" className="pro image-nav" />
                </div>
                <div className="icon-div icon-div-4">
                    <img src={profile} alt="profile" className="profile image-nav" />
                </div>
            </div>
        </div>
    )
}

export default Navbar ;