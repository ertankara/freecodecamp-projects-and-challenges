const main = function () {
	const
		quoteArray = [],
		imgArray = [];

	let currentQuote;


	const handleImage = function imageHandler(response) {
		const pics = response.photos;

		pics.forEach(el => {
			imgArray.push(el);
		});

		insertImage();
	};


	const handleQuote = function quoteHandler(response) {
		response.forEach(el => {
			// To prevent object's proto to be included
			if (el.author && el.quote)
				quoteArray.push(el);
		});

		insertQuote();
	};


	const insertQuote = function() {
		const
			randomIndex = Math.floor(Math.random() * quoteArray.length),
			randomQuote = quoteArray.splice(randomIndex, 1)[0];


		// Set current quote to tweet about it

		currentQuote = randomQuote;

		$('#quote')
			.text(randomQuote.quote);

		$('#author')
			.text(randomQuote.author);
	};


	const insertImage = function() {
		const randomPic =
			imgArray[Math.floor(Math.random() * imgArray.length)];

		let
			photo,
			attribute = randomPic.attr;

		if (screen.width > 900) {
			photo = randomPic.large;
		}
		else {
			photo = randomPic.small;
		}

		$('.quote-area')
			.css('background-image', 'url(' + photo + ')');
		$('#artist-attributer')
			.text(randomPic.attr)
			.attr('href', 'https://unsplash.com/' + attribute);
	};


	$('#tweet-button').click(function() {
		let tweetTemplate =
			`https://twitter.com/intent/tweet?text=${currentQuote.quote}%20--%20%20${currentQuote.author}`;

		$(this).attr('href', tweetTemplate);


	});


	$('#get-quote-button').click(function() {
		insertImage();
		insertQuote();
	});



	$('.quote-button').click(function () {
		$(this).addClass('active-button');
		setTimeout(() => {
			$(this).removeClass('active-button');
		}, 120);
	});

	// AJAX REQUESTS

	$.ajax({
		type: "GET",
		url: "https://random-quote-generator.herokuapp.com/api/quotes/",
		dataType: "json",
		success: handleQuote
	});


	$.ajax({
		type: "GET",
		url: "data/unsplash-pictures.json",
		dataType: "json",
		success: handleImage
	});
};


$(document).ready(main);
