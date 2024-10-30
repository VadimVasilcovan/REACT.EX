import Joke from "./Jokes";

function JokesApp () {

   
    const dadJoke2 = {
        joke: "What do you call a French man wearing sandals? Philipe Fallop.",
        rating: 4
    }

    return(
       <>
       
       <h1> Joke 1</h1>
       <Joke joke="bag pula in props" rating={3}/>
       <Joke joke={dadJoke2.joke} rating={dadJoke2.rating}/> 
       {/*Bof variants are correct but we use '...' seldom when the object  have too mutch values*/}
       {/*<Joke joke={dadJoke2.joke} rating={dadJoke2.rating}/>*/}
       {/*<Joke {...dadJoke2}>*/}

       </>
       

       
    )
}
export default JokesApp; 