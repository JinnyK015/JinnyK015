let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
let currentChoice = 0;

document.onkeydown = checkKey;


//키를 각각 따로 잡지 않고 하나의 fuction 으로 잡아서 인덱스로 관리하는게 훨씬 효율적임.
// 나는 이걸 키마다 addEventListner잡았는데 정말 .....기본적인 방식은 같으나 키를 펑션으로 잡으거때문에 50줄이상의 코드가 줄었음.
function checkKey(e) {
  if (e.key == "ArrowRight") {
    arrowHorizen(1);
  } else if (e.key == "ArrowLeft") {
    arrowHorizen(-1);
  } else if (e.key == "ArrowUp") {
    arrowVertical(-1);
  } else if (e.key == "ArrowDown") {
    arrowVertical(1);
  }
}

const head = document.querySelector(".head");
const body = document.querySelector(".body");
const shoes = document.querySelector(".shoes");

function arrowHorizen(index) {
  headIndex += index;
  bodyIndex += index;
  shoesIndex += index;

  if (currentChoice == 0) {
    if (headIndex < 0) {
      headIndex = 6;
    }

    if (headIndex > 6) {
      headIndex = 0;
    }

    head.src = `../JinnyK015/blog_carnival/blog_carnival/dress-the-clown/images/head${headIndex}.png`;
  } else if (currentChoice == 1) {
    if (bodyIndex < 0) {
      bodyIndex = 6;
    }

    if (bodyIndex > 6) {
      bodyIndex = 0;
    }

    body.src = `../JinnyK015/blog_carnival/blog_carnival/dress-the-clown/images/body${bodyIndex}.png`;
  } else if (currentChoice == 2) {
    if (shoesIndex < 0) {
      shoesIndex = 6;
    }

    if (shoesIndex > 6) {
      shoesIndex = 0;
    }

    shoes.src = `../JinnyK015/blog_carnival/blog_carnival/dress-the-clown/images/shoes${shoesIndex}.png`;
  }
}

const arrowHead = document.querySelector("#arrow_dress_head");
const arrowbody = document.querySelector("#arrow_dress_body");
const arrowfooter = document.querySelector("#arrow_dress_footer");

function arrowVertical(index) {
  currentChoice += index;

  if (currentChoice < 0) {
    currentChoice = 2;
  }

  if (currentChoice > 2) {
    currentChoice = 0;
  }

  if (currentChoice == 0) {
    arrowHead.style.display = "block";
    arrowbody.style.display = "none";
    arrowfooter.style.display = "none";
  } else if (currentChoice == 1) {
    arrowHead.style.display = "none";
    arrowbody.style.display = "block";
    arrowfooter.style.display = "none";
  } else {
    arrowHead.style.display = "none";
    arrowbody.style.display = "none";
    arrowfooter.style.display = "block";
  }
}
