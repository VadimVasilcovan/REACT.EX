import Joke from "./Jokes";

function JokesApp () {

   
    const dadJoke2 = "What do you call a French man wearing sandals? Philipe Fallop."

    return(
       <>
       
       <h1> Joke 1</h1>
       <Joke joke="bag pula in props" rating={3}/>
       <Joke joke={dadJoke2} rating={4}/> 
       </>
       
    )
}
export default JokesApp;