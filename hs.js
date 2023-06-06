const hslist=document.getElementById("hslist");
const highscores=JSON.parse(localStorage.getItem("highscores"))||[];
//so,taking each element of the array i.e (user object scoree having score and name of a user) and adding them as a list item to our ul by using arr.map()
hslist.innerHTML=highscores.map(scoree=>{
	return `<li class="highscore">${scoree.name} = ${scoree.score}`;
}).join("");
//using html in js ex1-topic to learn