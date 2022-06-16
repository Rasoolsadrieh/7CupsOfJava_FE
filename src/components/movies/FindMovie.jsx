import { useEffect, useRef } from "react";



export default function FindMovie(){

    const movieInput = useRef();
    const posterResult = useRef();
    const titleResult = useRef();

 	const getMovieRequest = async () => {
    
    const searchValue ={Title: movieInput.current.value}
    const movie = JSON.stringify(searchValue.Title)
    
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=76e93e0c`;
    

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    
    const posterResult = responseJson.Search[1].Poster;
    const titleResult = responseJson.Search[1].Title;
    console.log(posterResult)
    console.log(titleResult)
    const props = responseJson
    
    
};
useEffect(() =>{
function MoviePosters(props){
    
    for(let i in props.Search){
    document.write( `<h1> ${props.Search[i].Title} </h1>` ,"</br>",`<img src = ${props.Search[i].Poster} />`,"</br>"," <button>Add to Favorites</button>", " <button>Buy Movie</button>", " <button>Rent Movie</button>", "</br>")
    }
    console.log("After", posterResult, titleResult)
    
}});


return(
        <>
        <h4>Please Enter a Movie Title below.</h4>
        <input placeholder="Enter Movie Title" ref={movieInput}></input>
        <button onClick="getMovieRequest(); MoviePosters();" >Search</button>
        {/* <img src={posterResult}/> */}
        
        
        </>
);


}