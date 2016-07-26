var play = "x"; //set the symbol 'x' or 'o'
var player1 = 0;
var player2 = 1;
var get_id;
var table = [];
table.length=9;
console.log(table);

function set_section(target) {
	if (target.innerHTML == "") {
		target.innerHTML = play;
		get_id = target.id;
		table[get_id] = play;
		
		check_winner();
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

function check_winner() {
	var check = table[0] + table[1] + table[2];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[3] + table[4] + table[5];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[6] + table[7] + table[8];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[0] + table[3] + table[6];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[1] + table[4] + table[7];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[2] + table[5] + table[8];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[0] + table[4] + table[8];
	if (check === "xxx" || check === "ooo") {won();}
	check = table[2] + table[4] + table[6];
	if (check === "xxx" || check === "ooo") {won();}
};

function won() {
	console.log("won");
}