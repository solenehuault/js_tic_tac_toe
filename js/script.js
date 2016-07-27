var play = "x"; //set the symbol 'x' or 'o'
var get_id; //get the id of a section of the board
var table = []; //keep the borad in memory
table.length = 9;
var show_menu = false;
var score_p1 = 0;
var score_p2 = 0;


//Put a cross or a circle to the clicked section of the board
function set_section() {
	if ($(this).html() == "") {
		$(this).html(play);
		get_id = $(this).attr("id");
		table[get_id] = play;
		check_winner();
		change_player();
	}
}

//Change player 1 to 2 and player 2 to 1
function change_player() {
	if (play == "x") {
		play = "o";
		$("h2").text("Joueur 2 : " + play);
	}
	else {
		play = "x";
		$("h2").text("Joueur 1 : " + play);
	}
};

//Check if there is a victory
function check_winner() {
	var check = table[0] + table[1] + table[2];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[3] + table[4] + table[5];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[6] + table[7] + table[8];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[0] + table[3] + table[6];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[1] + table[4] + table[7];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[2] + table[5] + table[8];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[0] + table[4] + table[8];
	if (check === "xxx" || check === "ooo") {
		won();
	}
	check = table[2] + table[4] + table[6];
	if (check === "xxx" || check === "ooo") {
		won();
	}
};

//display the winner
function won() {
	var winner = play == "x" ? "Joueur1" : "Joueur2";
	alert(winner + " a gagné !");
	if (winner == "Joueur1") {score_p1++;}
	else {score_p2++;}
	$("#score1").text("Joueur1: " + score_p1);
	$("#score2").text("Joueur2: " + score_p2);
	display_menu();
}

//show/hide the menu
function display_menu() {
		if (!show_menu) {
		$("#menu").show();
		show_menu = true;
	}
	else {
		$("#menu").hide();
		show_menu = false;
	}
};

//function clear board & table
function clear() {
	$("td").text("");
	table = [];
	table.length = 9;
};

$("#new_game").click(function() {
	clear();
	display_menu();
});

$("body").keypress(display_menu);
$("td").click(set_section);