const qu=document.getElementById("b");
const ch=Array.from(document.getElementsByClassName("options"));
console.log(ch);
const qcounttxt=document.getElementById("h01");
const scoretxt=document.getElementById("h02");
const pbarr=document.getElementById("pbar");
let cq={};
let acanswers=false;
let score=0;
let qcount=0;
let availablequestions=[];
let questions = 
[
  {
  	qu:"What tag is used to include css into html externally?",
  	cho1:"<script>",
  	cho2:"<link>",
  	cho3:"<meta>",
  	cho4:"<html>",
  	answer:2
  },
  {
  	qu:"What tag is used to include js into html externally?",
  	cho1:"<script>",
  	cho2:"<p>",
  	cho3:"<h1>",
  	cho4:"<html>",
  	answer:1
  },
  {
  	qu:"<pre>tag displays the output without any spaces and indentation as indicated by the user",
  	cho1:"True",
  	cho2:"False",
  	cho3:"Not sure",
  	cho4:"Maybe",
  	answer:2
  },
  {
  	qu:"In the rgba() color code,what does 'a' stand for?",
  	cho1:"and",
  	cho2:"alpha",
  	cho3:"available",
  	cho4:"any",
  	answer:2
  },
  {
  	qu:"Text-align property of css has _ differernt values?",
  	cho1:"3",
  	cho2:"5",
  	cho3:"2",
  	cho4:"4",
  	answer:4
  } 	                                                                                                                       
 ]; 
//from here,very very confusing methods being used,read up again
 //Constants
 const correct_bonus=10;
 const max_q=5;

 startgame = ()=>
 {
  qcount=0;
  score=0;
  availablequestions=[...questions];
  console.log(availablequestions);
  getNewQ();
};
getNewQ= ()=>{
  if(availablequestions.length===0||qcount>=max_q)
  {
    localStorage.setItem("recentscore",score);//to store the score value of the user in the localstorage database of the website
    //going to end page after completing all the questions
    return window.location.assign("file:///C:/Users/Anagha/Downloads/Important/project quiz/end.html");
  }
  qcount++;
  //update the no of questions accordingly
  qcounttxt.innerText=`${qcount}/${max_q}`;
  //ever question incremented is qcount++,Therefore th eprogress bar should fill up the same amt of width,so (qcount/max+qt)*100 will hwlp to determine the amount of width to be filled in the progress bar
  pbarr.style.width=`${(qcount/max_q)*100}%`;
  const qindex=Math.floor(Math.random()*availablequestions.length);
  cq=availablequestions[qindex];
//header h tag having the id=b will be iniatializd to the qu property of the cq object{which is a copy of availablequestions which is in turn a copy of cq.i.e.the array of objects}
  b.innerText=cq.qu;
//for each ch taken from the html,(get ElementsByClassName)cho referring to the 4 choice properties in the cq array of objects 
  ch.forEach(cho=>{
    const num=cho.dataset['number'];//get the data number assigned to the p tag through data-number=""attribute
    cho.innerText=cq['cho'+num];//whatever number is initialised to the data-number attribute will be concatenated to cho i.e cho2 or cho2 which is our property of the object.Therefore that choicde will be initialise to the innerText i.e content of the tag ch(getElementByClassName(options))
  });

  availablequestions.splice(qindex,1);//wtever quetion was presented on screen,need not be repeated 
  acanswers=true;
};

ch.forEach(cho=>{
  cho.addEventListener('click',e=>{
    if(!acanswers)return;
    acanswers=false;
    const selectedchoice=e.target;
    const selectedanswer=selectedchoice.dataset['number'];
   //checking to see if user answered the correct option as answer
    const co=selectedanswer==cq.answer?"correct":"incorrect";
   //update the score for each correct answer or incorrect answer the user gets accordingly 
    if(co=="correct")score+=10;
    scoretxt.innerText=score;
  //the parent element(the p tag woth class='choice',gets added with the co attribute with "correct" or "incorrect" value)
    selectedchoice.classList.add(co);
    //to add a time delay of 1000ms? after the user clicks on an answer
    setTimeout(()=>{
      selectedchoice.classList.remove(co);
    getNewQ();
  },1000);
  });
});
startgame();