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
let direction="up"; // Player
let direction2="right"; // Red Monster
let direction3="left"; // Orange Monster
// Board creation and redraw
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
// Score and game start
function Scoreboard(){
clearAll();
print("Score: "+Score);
print("Lives: "+Hearts);
let count=0;
for(let y=0;y< board.length;y++){
	for (let x=0;x< board[y].length;x++){
		if(board[y][x]=="E"){
			count++;
		}
		if(count==163){ 
			//163 is the number of spaces aside from walls, and characters
			//if all those spaces are Empty, that means no more points or fruits left
			GameOver();
			alert("Game Over! Your score is "+Score);
			return null; // End Game
		}
	}
}
}
function start(){
	Hearts=3;
	Score=0;
    Player=[8,8];
    RedMonster=[8,3];
	OrangeMonster=[8,14];
	Game();
}
function Game(){
	// Stop game then redo entire game for new game
	clearInterval(Timer);
	clearInterval(timer);
	//Create the grid
	// Reinitialize board to avoid double click of button problem
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
		['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W']
		];
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
// Main loop
function Tick(){
	movePlayer();
	Direction2Monster();
	Direction3Monster();
	moveMonster();
	console.log(Score);
}
// Directions and movement
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
	//Check for next position 
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
		GameOver('Player');
		return null; //to exit function
	}
}
	// Check for wall and update direction. Update tile to EMpty to replace
	if(direction=="up" && board[yPosePlayer-1][xPosePlayer]!="W"){
		//check if hit a fruit or point, increase score
		if(board[yPosePlayer-1][xPosePlayer]=="B" || board[yPosePlayer-1][xPosePlayer]=="S" || board[yPosePlayer-1][xPosePlayer]=="T" || board[yPosePlayer-1][xPosePlayer]=="C") {
			Score+=50;
		}
		if(board[yPosePlayer-1][xPosePlayer]==".") {
		Score+=10;
		}
		board[yPosePlayer][xPosePlayer]="E";
		yPosePlayer--;
	}
	else if(direction=="right" && board[yPosePlayer][xPosePlayer+1]!="W"){
		//check if hit a fruit or point, increase score
		if(board[yPosePlayer][xPosePlayer+1]=="B" || board[yPosePlayer][xPosePlayer+1]=="S" || board[yPosePlayer][xPosePlayer+1]=="T" || board[yPosePlayer][xPosePlayer+1]=="C") {
			Score+=50;
		}
		if(board[yPosePlayer][xPosePlayer+1]==".") {
		Score+=10;
		}
		board[yPosePlayer][xPosePlayer]="E";
		xPosePlayer++;
	}
	else if(direction=="left" && board[yPosePlayer][xPosePlayer-1]!="W"){
		//check if hit a fruit or point, increase score
		if(board[yPosePlayer][xPosePlayer-1]=="B" || board[yPosePlayer][xPosePlayer-1]=="S" || board[yPosePlayer][xPosePlayer-1]=="T" || board[yPosePlayer][xPosePlayer-1]=="C") {
		Score+=50;
		}
		if(board[yPosePlayer][xPosePlayer-1]==".") {
		Score+=10;
		}
		board[yPosePlayer][xPosePlayer]="E";
		xPosePlayer--;
	}
	else if(direction=="down" && board[yPosePlayer+1][xPosePlayer]!="W"){
		//check if hit a fruit or point, increase score
		if(board[yPosePlayer+1][xPosePlayer]=="B" || board[yPosePlayer+1][xPosePlayer]=="S" || board[yPosePlayer+1][xPosePlayer]=="T" || board[yPosePlayer+1][xPosePlayer]=="C") {
			Score+=50;
		}
		if(board[yPosePlayer+1][xPosePlayer]==".") {
		Score+=10;
		}
		board[yPosePlayer][xPosePlayer]="E";
		yPosePlayer++;
	}
	else {
		//If if hits wall,  keep position
		return null;
	}
Player=[xPosePlayer,yPosePlayer];
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
//Update direction if player is near
if(dx>0 && Math.abs(dx)>Math.abs(dy)){
	direction2='right';
}
if(dx<0 && Math.abs(dx)>Math.abs(dy)){
	direction2='left';
}
if(dy>0 && Math.abs(dy)>Math.abs(dx)){
	direction2='down';
}
if(dy<0 && Math.abs(dy)>Math.abs(dx)){
	direction2='up';
}
}
function Direction3Monster(){
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
	let dx= Player[0]-OrangeMonster[0];
	let dy= Player[1]-OrangeMonster[1];
	//Update direction if player is near
	if(dx>0 && Math.abs(dx)>Math.abs(dy)){
		direction3='right';
	}
	if(dx<0 && Math.abs(dx)>Math.abs(dy)){
		direction3='left';
	}
	if(dy>0 && Math.abs(dy)>Math.abs(dx)){
		direction3='down';
	}
	if(dy<0 && Math.abs(dy)>Math.abs(dx)){
		direction3='up';
	}
}
function moveMonster(){
	// First get player position
	let xPosePlayer=Player[0];
	let yPosePlayer=Player[1];
	//red is direction2
	let xPoseRedMonster=RedMonster[0];
	let yPoseRedMonster=RedMonster[1];
	if(direction2=="right" && board[yPoseRedMonster][xPoseRedMonster+1]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		board[yPoseRedMonster][xPoseRedMonster]="E";
		xPoseRedMonster++;
	}
	else if(direction2=="left" && board[yPoseRedMonster][xPoseRedMonster-1]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		board[yPoseRedMonster][xPoseRedMonster]="E";
		xPoseRedMonster--;
	}
	else if(direction2=="up" && board[yPoseRedMonster-1][xPoseRedMonster]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		board[yPoseRedMonster][xPoseRedMonster]="E";
		yPoseRedMonster--;
	}
	else if(direction2=="down" && board[yPoseRedMonster+1][xPoseRedMonster]!="W" && board[yPoseRedMonster][xPoseRedMonster+1]!="O") {
		board[yPoseRedMonster][xPoseRedMonster]="E";
		yPoseRedMonster++;
	}
	// Assign values
	RedMonster=[xPoseRedMonster,yPoseRedMonster];
	// If it hits player, remove it
	if(board[yPoseRedMonster][xPoseRedMonster]==board[yPosePlayer][xPosePlayer]){
		board[yPoseRedMonster][xPoseRedMonster]=="E";
	}
	//orange is direction3
	let xPoseOrangeMonster=OrangeMonster[0];
	let yPoseOrangeMonster=OrangeMonster[1];
	if(direction3=="right" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		board[yPoseOrangeMonster][xPoseOrangeMonster]="E";
		xPoseOrangeMonster++;
	}
	if(direction3=="left" && board[yPoseOrangeMonster][xPoseOrangeMonster-1]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		board[yPoseOrangeMonster][xPoseOrangeMonster]="E";
		xPoseOrangeMonster--;
	}
	if(direction3=="up" && board[yPoseOrangeMonster-1][xPoseOrangeMonster]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		board[yPoseOrangeMonster][xPoseOrangeMonster]="E";
		yPoseOrangeMonster--;
	}
	if(direction3=="down" && board[yPoseOrangeMonster+1][xPoseOrangeMonster]!="W" && board[yPoseOrangeMonster][xPoseOrangeMonster+1]!="R") {
		board[yPoseOrangeMonster][xPoseOrangeMonster]="E";
		yPoseOrangeMonster++;
	}
	// Assign values
	OrangeMonster=[xPoseOrangeMonster,yPoseOrangeMonster];
	// If it hits player, remove it
	if(board[yPoseOrangeMonster][xPoseOrangeMonster]==board[yPosePlayer][xPosePlayer]){
		board[yPoseOrangeMonster][xPoseOrangeMonster]=="E";
	}
	//updated
	Redraw();
}
// Controls
function Pause(){
	clearInterval(Timer);
	clearInterval(timer);
}
function Resume(){
	Game();
	timer= setInterval(Scoreboard, 200);
}
function GameOver(x){
	clearInterval(Timer);
	ClearGrid();
	if(x=="Player"){
		Player=[8,8];
		direction='up';
		Hearts--;
		Redraw();
		Timer=setInterval(Tick,500);
	}
	else {
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
		DrawBoard();
		return;
	}
}