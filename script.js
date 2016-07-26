var play = "x"; //set the symbol 'x' or 'o'
var player1 = 0;
var player2 = 1;

function set_section(target) {
	if (target.innerHTML == "") {
	target.innerHTML=play;
	change_player();
	}
};

function change_player() {
	if (play == "x") {
		play = "o";
		$("h2").text("Player 2 : " + play);	
	}
	else {
		play = "x";
		$("h2").text("Player 1 : " + play);
	}
};