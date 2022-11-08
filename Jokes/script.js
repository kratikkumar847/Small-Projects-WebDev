const jokes = document.querySelector('#jokes')
const button = document.querySelector('button');
const addNewJoke = async () =>{
    const joketext = await getDadJoke();
    const newLi = document.createElement('LI')
    newLi.append(joketext);
    jokes.append(newLi)
}


const getDadJoke = async () =>{
    try{
        const config = {headers : {Accept : 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/' , config)
        return res.data.joke;
    }
    catch(e){
        return "No Jokes Available Sorry :( "
    }
}

button.addEventListener('click' , addNewJoke);