$(document).ready(function() {

	var guessLetter = "";
	var previousGueses = [];
	var lives = 8;
	var word = "test";
	var wordList = ["programming", "northcoders", "pineapple", "function", "variable"];

	//////////////////////////////////////////////////
	console.log(word);
	Reset();
	console.log(word);
	//////////////////////////////////////////////////

	function Update() {

		if (!word.includes(guessLetter) && guessLetter !== "") {
			lives--;
		}

		$(".lifeCounter").text("Lives: " + lives);

		if (lives <= 0) {
			// LOSE
			alert("You Lose");
			Reset();
		}

		displayWord();

		if ($(".word").text() === word.split("").join(" ")) {
			// WIN
			alert("You Win");
			Reset();
		}
	}

	function Reset() {
		previousGueses = [];
		lives = 5;
		$(".lifeCounter").text("Lives: " + lives);
		word = wordList[Math.floor(Math.random() * wordList.length)];
		$("li h1").css("background-color", "white");
		displayWord();
	}

	function displayWord() {
		$(".word").text(function() {
			return word.split("").map(function(elm) {
				return previousGueses.includes(elm) ? elm : "_";
			}).join(" ");
		});
	}

	function selectLetter(l) {
		if (!previousGueses.includes(l)) {
			previousGueses.push(l);
			$("." + l).css("background-color", "black");
			guessLetter = l;
			Update();
		}
	}

	$(".a").click(function() { selectLetter("a"); });
	$(".b").click(function() { selectLetter("b"); });
	$(".c").click(function() { selectLetter("c"); });
	$(".d").click(function() { selectLetter("d"); });
	$(".e").click(function() { selectLetter("e"); });
	$(".f").click(function() { selectLetter("f"); });
	$(".g").click(function() { selectLetter("g"); });
	$(".h").click(function() { selectLetter("h"); });
	$(".i").click(function() { selectLetter("i"); });
	$(".j").click(function() { selectLetter("j"); });
	$(".k").click(function() { selectLetter("k"); });
	$(".l").click(function() { selectLetter("l"); });
	$(".m").click(function() { selectLetter("m"); });
	$(".n").click(function() { selectLetter("n"); });
	$(".o").click(function() { selectLetter("o"); });
	$(".p").click(function() { selectLetter("p"); });
	$(".q").click(function() { selectLetter("q"); });
	$(".r").click(function() { selectLetter("r"); });
	$(".s").click(function() { selectLetter("s"); });
	$(".t").click(function() { selectLetter("t"); });
	$(".u").click(function() { selectLetter("u"); });
	$(".v").click(function() { selectLetter("v"); });
	$(".w").click(function() { selectLetter("w"); });
	$(".x").click(function() { selectLetter("x"); });
	$(".y").click(function() { selectLetter("y"); });
	$(".z").click(function() { selectLetter("z"); });

	/*
	var $a = $(".a");
	var $b = $(".b");
	var $c = $(".c");
	var $d = $(".d");
	var $e = $(".e");
	var $f = $(".f");
	var $g = $(".g");
	var $h = $(".h");
	var $i = $(".i");
	var $j = $(".j");
	var $k = $(".k");
	var $l = $(".l");
	var $m = $(".m");
	var $n = $(".n");
	var $o = $(".o");
	var $p = $(".p");
	var $q = $(".q");
	var $r = $(".r");
	var $s = $(".s");
	var $t = $(".t");
	var $u = $(".u");
	var $v = $(".v");
	var $w = $(".w");
	var $x = $(".x");
	var $y = $(".y");
	var $z = $(".z");
	*/

});