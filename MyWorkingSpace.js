// NAME: Elia Alshaiban
// DATE: 21/11/2023
// Assignment Title: PacMan
   /* I've done this project with the help of W3Schools and the snake game, 
   i learned some features of css, html, and some for javascript too*/
//Global variable that stores the grid
let board = [
['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
['W','.','.','.','.','W','.','.','.','.','.','W','.','.','.','.','W'],
['W','.','W','W','.','W','.','W','W','W','.','W','.','W','W','.','W'],
['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
['W','.','W','.','.','W','W','.','W','.','W','W','.','.','W','.','W'],
['W','.','W','.','.','.','.','.','W','.','.','.','.','.','W','.','W'],
['W','.','W','W','W','.','.','W','W','W','.','.','W','W','W','.','W'],
['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
['W','W','.','W','W','.','.','W','.','W','.','.','W','W','.','W','W'],
['W','W','.','W','.','.','.','W','W','W','.','.','.','W','.','W','W'],
['W','W','.','.','.','W','.','.','.','.','.','W','.','.','.','W','W'],
['W','W','.','W','W','W','W','.','.','.','W','W','W','W','.','W','W'],
['W','W','.','.','.','.','.','.','W','.','.','.','.','.','.','W','W'],
['W','W','.','W','W','.','W','W','W','W','W','.','W','W','.','W','W'],
['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
['W','.','W','W','.','W','W','.','W','.','W','W','.','W','W','.','W'],
['W','.','W','W','.','W','.','.','W','.','.','W','.','W','W','.','W'],
['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W']
];
//Initialize
var Player=[8,8];
var RedMonster=[8,3];
var OrangeMonster=[8,14];
var Banana=[1,1];
var Strawberry=[15,1];
var Watermelon=[1,17];
var Cherry=[15,17];
let Timer; //for Tick and movement
let timer; //for score
var Hearts;
var Score;
let direction="up";
let direction2="right";
let direction3="left";
function DrawBoard(){
ClearGrid();
//Add player
let xPosePlayer=Player[0];
let yPosePlayer=Player[1];
board[yPosePlayer][xPosePlayer]="P";
//Add red monster
let xPoseRedMonster=RedMonster[0];
let yPoseRedMonster=RedMonster[1];
board[yPoseRedMonster][xPoseRedMonster]="R";
//Add orange monster
let xPoseOrangeMonster=OrangeMonster[0];
let yPoseOrangeMonster=OrangeMonster[1];
board[yPoseOrangeMonster][xPoseOrangeMonster]="O";
//Add banana
let xPoseBanana=Banana[0];
let yPoseBanana=Banana[1];
board[yPoseBanana][xPoseBanana]="B";
//Add strawberry
let xPoseStrawberry=Strawberry[0];
let yPoseStrawberry=Strawberry[1];
board[yPoseStrawberry][xPoseStrawberry]="S";
//Add watermelon
let xPoseWatermelon=Watermelon[0];
let yPoseWatermelon=Watermelon[1];
board[yPoseWatermelon][xPoseWatermelon]="T";
//Add cherry
let xPoseCherry=Cherry[0];
let yPoseCherry=Cherry[1];
board[yPoseCherry][xPoseCherry]="C";
//Draw board
for(let y=0;y< board.length;y++){
	for (let x=0;x< board[y].length;x++){
		if(board[y][x]=="W") AddBlock(x,y,"Wall");
		else if(board[y][x]=="P") AddBlock(x,y,"Player");
		else if(board[y][x]=="R") AddBlock(x,y,"Red");
		else if(board[y][x]=="O") AddBlock(x,y,"Orange");
		else if(board[y][x]=="B") AddBlock(x,y,"Banana");
		else if(board[y][x]=="S") AddBlock(x,y,"Strawberry");
		else if(board[y][x]=="T") AddBlock(x,y,"Watermelon");
		else if(board[y][x]=="C") AddBlock(x,y,"Cherry");
		else if(board[y][x]==".") AddBlock(x,y,"Point");
		else if(board[y][x]=="E") AddBlock(x,y,"Empty");
	}
}
}
function Redraw(){
	ClearGrid();
	//Add player
	let xPosePlayer=Player[0];
	let yPosePlayer=Player[1];
	board[yPosePlayer][xPosePlayer]="P";
	//Add red monster
	let xPoseRedMonster=RedMonster[0];
	let yPoseRedMonster=RedMonster[1];
	board[yPoseRedMonster][xPoseRedMonster]="R";
	//Add orange monster
	let xPoseOrangeMonster=OrangeMonster[0];
	let yPoseOrangeMonster=OrangeMonster[1];
	board[yPoseOrangeMonster][xPoseOrangeMonster]="O";
	//Draw board
	for(let y=0;y< board.length;y++){
		for (let x=0;x< board[y].length;x++){
			if(board[y][x]=="W") AddBlock(x,y,"Wall");
			else if(board[y][x]=="E") AddBlock(x,y,"Empty");
			else if(board[y][x]=="P") AddBlock(x,y,"Player");
			else if(board[y][x]=="R") AddBlock(x,y,"Red");
			else if(board[y][x]=="O") AddBlock(x,y,"Orange");
			else if(board[y][x]=="B") AddBlock(x,y,"Banana");
			else if(board[y][x]=="S") AddBlock(x,y,"Strawberry");
			else if(board[y][x]=="T") AddBlock(x,y,"Watermelon");
			else if(board[y][x]=="C") AddBlock(x,y,"Cherry");
			else if(board[y][x]==".") AddBlock(x,y,"Point");
			
		}
	}
}
function Scoreboard(){
clearAll();
print("Score: "+Score);
print("Lives: "+Hearts);
}
function start(){
	Hearts=3;
	Score=0;
    Player=[8,8];
    RedMonster=[8,3];
	OrangeMonster=[8,14];
	Game();
}
function Tick(){
	movePlayer();
	Direction2Monster();
	Direction3Monster();
	moveMonster();
	console.log(Score);
}
function Pause(){
	clearInterval(Timer);
	clearInterval(timer);
}
function Resume(){
	Game();
	timer= setInterval(Scoreboard, 200);
}
function Game(){
	//Create the grid
	DrawBoard();
	Timer=setInterval(Tick,500);
	document.addEventListener("keydown",KeyPressed);
	Scoreboard();
	timer= setInterval(Scoreboard, 200);
	

	//TODO: change this to setup the grid you want
	//Reset block array variable
	// blockArray = [];
	//Add a red block
	// blockArray.push("red");
	//Draw the block array
	// drawBlockArray(blockArray);
}
function KeyPressed(event){
	//Play with the arrows or WASD
	if( event.keyCode==38 || event.keyCode==87 ) direction="up";
	else if( event.keyCode==39 || event.keyCode==68 ) direction="right";
	else if( event.keyCode==37 || event.keyCode==65 ) direction="left";
	else if( event.keyCode==40 || event.keyCode==83 ) direction="down";

if(event.keyCode==80 || event.keyCode==112) Pause();
else if(event.keyCode==114 || event.keyCode==82) Resume();
}
function movePlayer(){
	//Check if for next position
	//Get x and y positions

	let xPosePlayer= Player[0];
	let yPosePlayer= Player[1];

//check if hit a Monster
if(board[yPosePlayer][xPosePlayer]=="O"|| board[yPosePlayer][xPosePlayer]=="R") {	
	if(Hearts==0){
		GameOver();
		alert("GAME OVER!");
		return null; //to exit function
	}
	else {
		board[yPosePlayer][xPosePlayer]="E";
		GameOver('Player');
		return null; //to exit function
	}
}
//check if hit a fruit
if(board[yPosePlayer][xPosePlayer]=="B" || board[yPosePlayer][xPosePlayer]=="S" || board[yPosePlayer][xPosePlayer]=="T" || board[yPosePlayer][xPosePlayer]=="C") {
	Score= Score+50;
}
if(board[yPosePlayer][xPosePlayer]=="B") {
let xPoseBanana=Banana[0];
let yPoseBanana=Banana[1];
board[yPoseBanana][xPoseBanana]="E";
}
if(board[yPosePlayer][xPosePlayer]=="S") {
	let xPoseStrawberry=Strawberry[0];
	let yPoseStrawberry=Strawberry[1];
	board[yPoseStrawberry][xPoseStrawberry]="E";
}
if(board[yPosePlayer][xPosePlayer]=="T") {
	let xPoseWatermelon=Watermelon[0];
	let yPoseWatermelon=Watermelon[1];
	board[yPoseWatermelon][xPoseWatermelon]="E";
}
if(board[yPosePlayer][xPosePlayer]=="C") {
	let xPoseCherry=Cherry[0];
	let yPoseCherry=Cherry[1];
	board[yPoseCherry][xPoseCherry]="E";
}
if(board[yPosePlayer][xPosePlayer]==".") {
	Score= Score+10;
	let xPosPoint=Player[0];
	let yPosPoint=Player[1];
	board[yPosPoint][xPosPoint]="E";
}
	// Wall and update direction
	if(direction=="up" && board[yPosePlayer-1][xPosePlayer]!="W"){
		board[yPosePlayer][xPosePlayer]="E";
		yPosePlayer--;
	}
	else if(direction=="right" && board[yPosePlayer][xPosePlayer+1]!="W"){
		board[yPosePlayer][xPosePlayer]="E";
		xPosePlayer++;
	}
	else if(direction=="left" && board[yPosePlayer][xPosePlayer-1]!="W"){
	board[yPosePlayer][xPosePlayer]="E";
	xPosePlayer--;
	}
	else if(direction=="down" && board[yPosePlayer+1][xPosePlayer]!="W"){
		board[yPosePlayer][xPosePlayer]="E";
		yPosePlayer++;
	}
	else {
		//If if hits wall,  keep position
		return null;
	}
Player=[xPosePlayer,yPosePlayer];
if(Score==1780){
	GameOver();
	alert("YOU WIN!");
	return null; //to exit function
}
Redraw();
}
function Direction2Monster(){
	let dir= getRandom(4); //choose random direction
	if(dir==1){
		direction2='right';
	}
	else if(dir==2){
		direction2='left';
	}
	else if(dir==3){
		direction2='down';
	}
	else if(dir==4){
		direction2='up';
	}
let dx= Player[0]-RedMonster[0];
let dy= Player[1]-RedMonster[1];
//Update direction
if(dx>0 && Math.abs(dx)>Math.abs(dy)){
	direction2='right';
}
else if(dx<0 && Math.abs(dx)>Math.abs(dy)){
	direction2='left';
}
else if(dy>0 && Math.abs(dy)>Math.abs(dx)){
	direction2='down';
}
else if(dy<0 && Math.abs(dy)>Math.abs(dx)){
	direction2='up';
}
}
function Direction3Monster(){
	let dx= Player[0]-OrangeMonster[0];
	let dy= Player[1]-OrangeMonster[1];
	//Update direction
	if(dx>0 && Math.abs(dx)>Math.abs(dy)){
		direction3='right';
	}
	else if(dx<0 && Math.abs(dx)>Math.abs(dy)){
		direction3='left';
	}
	else if(dy>0 && Math.abs(dy)>Math.abs(dx)){
		direction3='down';
	}
	else if(dy<0 && Math.abs(dy)>Math.abs(dx)){
		direction3='up';
	}
	else {
		let dir= getRandom(4); //choose random direction
		if(dir==1){
			direction3='right';
		}
		else if(dir==2){
			direction3='left';
		}
		else if(dir==3){
			direction3='down';
		}
		else if(dir==4){
			direction3='up';
		}
	}
}
function moveMonster(){
	//red is direction2
	let xPoseRedMonster=RedMonster[0];
	let yPoseRedMonster=RedMonster[1];
	if(direction2=="right" && board[yPoseRedMonster][xPoseRedMonster+1]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		let next=board[yPoseRedMonster][xPoseRedMonster+1];
		board[yPoseRedMonster][xPoseRedMonster]=next;
		xPoseRedMonster++;
	}
	else if(direction2=="left" && board[yPoseRedMonster][xPoseRedMonster-1]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		let next=board[yPoseRedMonster][xPoseRedMonster-1];
		board[yPoseRedMonster][xPoseRedMonster]=next;
		xPoseRedMonster--;
	}
	else if(direction2=="up" && board[yPoseRedMonster-1][xPoseRedMonster]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		let next=board[yPoseRedMonster-1][xPoseRedMonster];
		board[yPoseRedMonster][xPoseRedMonster]=next;
		yPoseRedMonster--;
	}
	else if(direction2=="down" && board[yPoseRedMonster+1][xPoseRedMonster]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		let next=board[yPoseRedMonster+1][xPoseRedMonster];
		board[yPoseRedMonster][xPoseRedMonster]=next;
		yPoseRedMonster++;
	}
	RedMonster=[xPoseRedMonster,yPoseRedMonster];

	//orange is direction3
	let xPoseOrangeMonster=OrangeMonster[0];
	let yPoseOrangeMonster=OrangeMonster[1];
	if(direction3=="right" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		let next=board[yPoseOrangeMonster][xPoseOrangeMonster+1];
		board[yPoseOrangeMonster][xPoseOrangeMonster]=next;
		xPoseOrangeMonster++;
	}
	if(direction3=="left" && board[yPoseOrangeMonster][xPoseOrangeMonster-1]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		let next=board[yPoseOrangeMonster][xPoseOrangeMonster-1];
		board[yPoseOrangeMonster][xPoseOrangeMonster]=next;
		xPoseOrangeMonster--;
	}
	if(direction3=="up" && board[yPoseOrangeMonster-1][xPoseOrangeMonster]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		let next=board[yPoseOrangeMonster-1][xPoseOrangeMonster];
		board[yPoseOrangeMonster][xPoseOrangeMonster]=next;
		yPoseOrangeMonster--;
	}
	if(direction3=="down" && board[yPoseOrangeMonster+1][xPoseOrangeMonster]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		let next=board[yPoseOrangeMonster+1][xPoseOrangeMonster];
		board[yPoseOrangeMonster][xPoseOrangeMonster]=next;
		yPoseOrangeMonster++;
	}
	OrangeMonster=[xPoseOrangeMonster,yPoseOrangeMonster];
	//updated
	Redraw();
}
function GameOver(x){
	clearInterval(Timer);
	if(x=="Player"){
		let xPosePlayer=Player[0];
		let yPosePlayer=Player[1];
		board[yPosePlayer][xPosePlayer]="E";
		Player=[8,8];
		let newxPosPlayer=Player[0];
		let newyPosPlayer=Player[1];
		board[newyPosPlayer][newxPosPlayer]="P";
		direction='up';
		Hearts--;
		Redraw();
		Timer=setInterval(Tick,300);
	}
	else {
		ClearGrid();
		board = [
		['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
		['W','.','.','.','.','W','.','.','.','.','.','W','.','.','.','.','W'],
		['W','.','W','W','.','W','.','W','W','W','.','W','.','W','W','.','W'],
		['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
		['W','.','W','.','.','W','W','.','W','.','W','W','.','.','W','.','W'],
		['W','.','W','.','.','.','.','.','W','.','.','.','.','.','W','.','W'],
		['W','.','W','W','W','.','.','W','W','W','.','.','W','W','W','.','W'],
		['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
		['W','W','.','W','W','.','.','W','.','W','.','.','W','W','.','W','W'],
		['W','W','.','W','.','.','.','W','W','W','.','.','.','W','.','W','W'],
		['W','W','.','.','.','W','.','.','.','.','.','W','.','.','.','W','W'],
		['W','W','.','W','W','W','W','.','.','.','W','W','W','W','.','W','W'],
		['W','W','.','.','.','.','.','.','W','.','.','.','.','.','.','W','W'],
		['W','W','.','W','W','.','W','W','W','W','W','.','W','W','.','W','W'],
		['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
		['W','.','W','W','.','W','W','.','W','.','W','W','.','W','W','.','W'],
		['W','.','W','W','.','W','.','.','W','.','.','W','.','W','W','.','W'],
		['W','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','W'],
		['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W']];
		Player=[8,8];
		direction="up";
		RedMonster=[8,3];
		YellowMonster=[8,14];
		direction2="right";
		direction3="left";
		Hearts=3;
		Score=0;
		Banana=[1,1];
		Strawberry=[15,1];
		Watermelon=[1,17];
		Cherry=[15,17];
		for(let y in board){
			for (let x in board[y]){
				if(board[y][x]=='W') AddBlock(x,y,"Wall");
				else if(board[y][x]=='.') AddBlock(x,y,"Point");
		}
		}
		return;
	}
}
// //Adds a block to the array
// function addBlockToArray(){
// 	//TODO: add a block to the array and draw the array
// }

// //Add a block of random color
// function addRandomColorBlocktoArray() {
// 	//TODO: add a block(s) of a random color to the array
// }

// function createNestedArray() {
// 	//TODO: Make the blockArray a 20 by 20 nested array
// }

// //Call this function to draw the blockArray
// function drawBlockArray() {
// 	drawArray(blockArray);
// }

// //Will trigger when user clicks a block, and returns block position in array
// //Will only work with nested, two-dimensional arrays!
// function blockClickedEvent(x,y){
// 	console.log(x,y);
// }

//Main Loop - This loop will be run every 100 milliseconds (every 0.1 second)
//We can start and stop it by clicking the buttons on the html page
function MainLoop()
{
	console.log('Main loop running');
	
	//TODO: Make the blockArray grid do something interesting here
	
}