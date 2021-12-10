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

let currentChoice = 0;

const head = document.querySelector(".head");
const body = document.querySelector(".body");
const shoes = document.querySelector(".shoes");

const imgIndexes =[0, 0, 0]
const imgLinks = [head, body, shoes]
const bodyPart = ['head','body','shoes']

function arrowHorizen(index) {
  let imgindex = imgIndexes[currentChoice];
  let imgLink = imgLinks[currentChoice];
  let partName = bodyPart[currentChoice];

  imgindex += index;

    if (imgindex < 0) 
      imgindex = 6;
    

    if (imgindex > 6) 
      imgindex = 0;
    

    imgIndexes[currentChoice] = imgindex;

    imgLink.src = `../JinnyK015/blog_carnival/dress-the-clown/images/${partName}${imgindex}.png`;

}

const arrowhead = document.querySelector("#arrow_dress_head");
const arrowbody = document.querySelector("#arrow_dress_body");
const arrowfooter = document.querySelector("#arrow_dress_footer");

const arrowLinks = [arrowhead, arrowbody, arrowfooter]

function arrowVertical(index) {
  currentChoice += index;

  if (currentChoice < 0) {
    currentChoice = 2;
  }

  if (currentChoice > 2) {
    currentChoice = 0;
  }
  let arrowprint = arrowLinks[currentChoice];
    arrowLinks.forEach( (el) => el.style.display ='none' )
    arrowprint.style.display= 'block';
}
