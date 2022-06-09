function addUser()
{
var player_1 = document.getElementById("player1_name_input").value;
var player_2 = document.getElementById("player2_name_input").value;

localStorage.setItem("playerName1" , player_1);
localStorage.setItem("playerName2" , player_2);

window.location = "quiz_game_page.html";
}