let options = document.querySelectorAll(".btn");
let next = document.querySelector(".next");
let quest = document.querySelector(".question");
let counter = 0;
const buttonsArray = Array.from(options);
let points = 0;
document.querySelector(".answers").addEventListener("click", e=>
{
    if(e.target.classList.contains("btn")){
    changeAbililty(options).disable();
        next.style.display = "block";
        let clickedIndex = buttonsArray.indexOf(e.target);
        if(counter===0 && clickedIndex===1 || counter===1 && clickedIndex===0 || counter===2 && clickedIndex ===3)
        {
            e.target.id = "correct";
            points++;
        }
        else{
            e.target.id = "incorrect";
            points--;
        }}
}
)
next.addEventListener("click", () =>
{
    updateContent(points);
    next.style.display = "none";
    changeAbililty(options).enable();
    counter++;
    options.forEach(option =>
    { if(option.id){option.removeAttribute('id');}}
    )
    if(counter === 1){
        assign(sequence[0]);
    }
    else if(counter === 2){
        assign(sequence[1]);
    }
    else if(counter === 3)
    {
        options.forEach(option =>
        {changeAbililty(options).remove();
            if(points >=2)
            quest.textContent = `Game Over! You have a total of ${points} points. You are a total rizzler 🎉🎉🎉`;
           else
           quest.textContent = `Game Over! You have a total of ${points} points. You lose your aura 💀💀💀💀`

        }
        )
    }
})
let sequence = [
    { Question: "What's the fanciest food present here?", Opinion: ["You are", "I am", "Pizza","Garlic Chips"]},
    { Question: "Can I put some dirt in your eye?", Opinion: ["You may, spidey", "No", "Taylor Swift",  "Kinky"]},
]
function assign(obj)
{
    const { Question, Opinion} = obj;
    quest.textContent = Question;
    options.forEach((option, index) => {
        option.textContent = Opinion[index];
    });
}
// function disableButtons(buttons){
//     buttons.forEach(button =>
//     {
//         button.disabled = true;
//     }
//     )
// }
// function enableButtons(buttons){
//     buttons.forEach(button =>
//     {
//         button.disabled = false;
//     }
//     )
// }
// if(counter === 1){
//     assign(sequence[0]);
// }
// else if(counter === 2){
//     assign(sequence[1]); This code will be executed before the event listener itself, so it won't work here, it has to be inside the
//event listener
// }
function changeAbililty(buttons)
{
   return {
    disable: function(){
        buttons.forEach(button =>
        {button.disabled = true;}
        );
    },
    enable: function(){
        buttons.forEach(button =>
        {button.disabled = false;}
        );
    },
    remove: function(){
        buttons.forEach(button =>
            {button.remove();}
        );
    },
   };
}

function updateContent(score){
    let win = document.querySelector("#score");
    win.textContent = `Score: ${score}`;
}






