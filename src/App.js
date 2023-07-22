import React ,{useState , useEffect} from "react";
import "./style.css"
import "./index.css"    
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import axios from "axios";


const App = ()=>{

    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
     
    useEffect(()=>{
      const handleSearch = async (queryyy) => {
         
         
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${queryyy}`
          );
    
          const searchResult = response.data.items;
          
          setBooks(searchResult);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      // console.log(searchQuery,"showww")
      handleSearch({searchQuery})
    },[searchQuery])
    
  
    useEffect(()=>{
      
        async function DataFetch (){
            try{
            const resultsHerry = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
            const resultsSharelock = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"); 
            const AllData = resultsHerry.data.items.concat(resultsSharelock.data.items)
            // console.log(AllData)
            setBooks(()=>AllData);
            }
            catch(error){console.log(error,"error Fetching time.....")}
        }
        DataFetch()
    },[]);

    return(
        <div className="App">
            <Navbar onSearch={setSearchQuery}/>
            {
                books.length>0 &&
                <BookList books={books}/>
            }
        </div>
    )
}

export default App ;