// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


const container = document.querySelector(".container");
const unicorns = document.querySelectorAll('.inflate-an-image');


// extra text for instruction.
const txt = document.createElement('h2');
txt.innerHTML="Try to click img, unicorns pop it up!";
txt.style.textAlign = "center";
container.insertAdjacentElement('beforebegin',txt);


//using obj for loop & put ID img elements
const num = {
  0 :0, 
  1 :0, 
  2 :0 
}

for (var i = 0; i < unicorns.length; i++){
  unicorns[i].id = i;
}


container.addEventListener("click", (e) => {
  if(num[e.target.id] >= 4){
    alert(`Unicorn Number #${e.target.id} says thank you!🦄`);
    num[e.target.id] = 0;
    e.target.src =`../JinnyK015/blog_carnival/inflate-the-unicorn/images/unicorn-${num[e.target.id]}.png`;
  } else {
    
    e.target.src =`../JinnyK015/blog_carnival/inflate-the-unicorn/images/unicorn-${num[e.target.id]}.png`;
    num[e.target.id]++
  }
})

console.log("Inflate The Unicorn!");
