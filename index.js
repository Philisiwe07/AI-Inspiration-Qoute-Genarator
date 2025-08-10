function displayPoem(response){
     new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

    

}




function generatePoem(event) {
    event.preventDefault();
   
let apiKey = "t0033d45f1b2356ec4oc18a3a5f2a16d";
let prompt = "generate a poem about what is typed in the input field";
let context = "you are a poet, write a poem based on the prompt given";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiURL).then(displayPoem);
console.log(response);

      
}



let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit",generatePoem);
