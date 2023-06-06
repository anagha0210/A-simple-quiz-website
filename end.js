const user=document.getElementById("name");
const savebtn=document.getElementById("sa");
const recentscore=localStorage.getItem("recentscore");
const final=document.getElementById("fs");
const highscores=JSON.parse(localStorage.getItem("highscores"))||[];
console.log(highscores);
final.innerText=recentscore;
user.addEventListener("keyup",()=>{
	console.log(user.value);
	sa.disabled=!user.value;//if user has not entered any value in the username input form,disable them from clicking the save button
});

saveHighScore =e=>{
	console.log("Clicked");
	e.preventDefault();//to prevent the form tag from going to a loc in file by default when clicked on input tag
	const scoree={
		score:Math.floor(Math.random()*100),
		name:user.value
	};
	highscores.push(scoree);//stored each saved core in the default highscore array
	//i didnt get the logic of this part,to sort the array according to highest score everytime no of users exceeds a max limit in array
	highscores.sort((a,b)=>b.score-a.score);
	highscores.splice(5);
	localStorage.setItem("highscores",JSON.stringify(highscores));
	window.location.assign("file:///C:/Users/Anagha/Downloads/Important/project quiz/g.html");
};
