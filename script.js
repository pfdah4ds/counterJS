const counter = document.querySelector("#count");
const actions = document.querySelectorAll('p');
console.log(actions[1]);

// actions[0].addEventListener('click',()=>{
//     counter.innerText -= 1;
// });
// actions[1].addEventListener('click',()=>{
//     counter.innerText = 0;
// });
// actions[2].addEventListener('click',()=>{
//     var c = parseInt(counter.innerText);
//     c += 1;
//     counter.innerText = c;
// });


actions.forEach((act)=>{
    act.addEventListener('click',()=>{
        act.addEventListener('mouseenter',()=>{
            act.style.textDecoration = 'underlined';
        });
        let att = act.getAttribute('id');
        if(att==='dec'){
            counter.innerText -= 1;
        }
        else if(att==='res'){
            counter.innerText = 0;
        }
        else if(att == 'inc'){
            var c = parseInt(counter.innerText);
            c += 1;
            counter.innerText = c;
            console.log("Due to elseif");
        }
        else{
            console.log("Blip! Blop Nothing Happened");
            console.log("This is so sad");
        }
    });
        
});
