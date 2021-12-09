// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
let currentChoice = 0;

// changeing Fucntions

function changeClownHead() {
  const head = document.querySelector(".head");
  let headSrc = `../JinnyK015/blog_carnival/images/head${headIndex}.png`;
  
  if (headIndex >= 6) {
    headIndex = 0;
    head.src = headSrc;
  } else if (headIndex <= 0) {
    headIndex = 6;
    head.src =`../JinnyK015/blog_carnival/images/head${headIndex}.png`; //function inside var, it's not working so I changed origin src
  } else {
    head.src = headSrc;
  }
}

function changeClownBody() {
  const body = document.querySelector(".body");
  let bodySrc = `../JinnyK015/blog_carnival/images/body${bodyIndex}.png`;

  if (bodyIndex >= 6) {
    bodyIndex = 0;
    body.src = bodySrc;
  } else if (bodyIndex <= 0) {
    bodyIndex = 6;
    body.src = `../JinnyK015/blog_carnival/images/body${bodyIndex}.png`;
  } else {
    body.src = bodySrc;
  }
}

function changeClownshoes() {
  const shoes = document.querySelector(".shoes");
  let shoesSrc = `../JinnyK015/blog_carnival/images/shoes${shoesIndex}.png`;

  if (shoesIndex >= 6) {
    console.log(shoesIndex)
    shoesIndex = 0;
    shoes.src = shoesSrc;
    
  } else if (shoesIndex <= 0) {
    shoesIndex = 6;
    shoes.src = `../JinnyK015/blog_carnival/images/shoes${shoesIndex}.png`;
  } else {
    shoes.src = shoesSrc;
  }
}


// keyEventListener

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    switch (currentChoice) {
      case 0:
        if (headIndex !== 6 ) {
          headIndex++ };
        changeClownHead();
        break;
      case 1:
        if (bodyIndex !== 6 ){ 
          bodyIndex++ 
        } 
        changeClownBody();
        break;
      case 2:
        if (shoesIndex !== 6 ) {
          shoesIndex++ };
        changeClownshoes();
        break;
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowLeft") {
    switch (currentChoice) {
      case 0:
        if (headIndex != 0 ){
          headIndex--
        } 
        changeClownHead();
        break;
      case 1:
        if(bodyIndex !== 0 ){
          bodyIndex--  };
        changeClownBody();
        break;
      case 2:
        if (shoesIndex !== 0 ){
          shoesIndex--
        } 
        changeClownshoes();
        break;
    }
  }
});


const arrowHead = document.querySelector('#arrow_dress_head')
const arrowbody = document.querySelector('#arrow_dress_body')
const arrowfooter = document.querySelector('#arrow_dress_footer')

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowDown") {
    if (currentChoice == 0 || currentChoice == 1) {
      currentChoice++;
      arrow();
    } else if (currentChoice == 2) {
      currentChoice = 0;
      arrow();
    }
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    if (currentChoice == 0)  {
      currentChoice = 2;
      arrow();
    } else if (currentChoice == 2 || currentChoice == 1) {
      currentChoice--;
      arrow();
    }
  }}
  );



  function arrow () {
    if (currentChoice == 0){
     arrowHead.style.display ='block';
     arrowbody.style.display ='none';
      arrowfooter.style.display ='none';
    } else if (currentChoice == 1){
      arrowHead.style.display ='none';
      arrowbody.style.display ='block';
      arrowfooter.style.display ='none';
    }  else {
      arrowHead.style.display ='none';
      arrowbody.style.display ='none';
      arrowfooter.style.display ='block';
    }
  }












console.log("Dress The Clown!");
