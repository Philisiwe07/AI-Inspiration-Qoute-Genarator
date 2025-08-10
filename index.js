function generatePoem(event) {
    event.preventDefault();
    new Typewriter('#poem', {
  strings: "I dreamed you called without reason, picking up where we left" ,
  autoStart: true,
  delay: 1,
  cursor: "",
});

    
      
}





let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit",generatePoem);
