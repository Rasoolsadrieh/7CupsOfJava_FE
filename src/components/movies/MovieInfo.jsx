import {useNavigate} from "react-router-dom";

export default function MovieInfo(props){
    
    const movies = props.props
    const navigate = useNavigate();

    const output = movies.map((e) => 
    <div> 
        <h1>{e.Title}</h1> 
        <br/>
        <img src = {e.Poster}/>
        <br/>
        <button onClick={goBuy}>Buy Movie</button>
        <button>Rent Movie</button>
        <button>Favorite Movie</button>
        <br/>
    </div>);

    function goBuy(){
        navigate("/buyMovie")
    }

    function goRent(){
        navigate("")
    }

    return(
        <>
        <div> {output} </div>
       
        
        </>
            
    )
}