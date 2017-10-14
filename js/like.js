




// let incrementButtons = Array.from(document.getElementsByClassName('btn-inc'))

// incrementButtons.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         let content = btn.nextSibling.textContent.trim()
//         let currentLikes = parseInt(content)
//         btn.nextSibling.textContent = ` ${++currentLikes} `
//     })
// })

//-------^^this is the working javascript, but doesn't increment------
//-------vvthis is the working jquery - it does increment

// $(function() {
//     $(".btn-inc").click(function(event) {
//         let currentCount = $(this).next().text();
//         let newCount = parseInt(currentCount) + 1;
//         $(this).next().text(newCount);
//     })
// })

//-------vvthis is the example jquery to make the posts work

// $(function () {
	
// 		// <button class="btn btn-xs btn-danger pull-right delete">
// 		//     <i class="fa fa-times fa-fw"></i>
// 		// </button>
// 		function addDeleteButton(element) {
// 			$(element).prepend(
// 				$("<button>").addClass('btn btn-xs btn-danger pull-right delete')
// 					.append($("<i>").addClass('fa fa-times fa-fw'))
// 			)
// 		}
	
// 		$("#movieList li").each(function () {
// 			addDeleteButton(this)
// 		})
	
// 		$(document).on('click', 'button.delete', function (e) {
// 			$(this).parent().remove()
// 		})
	
// 		// $("button.delete").click(function (e) {
// 		//     $(this).parent().remove()
// 		// })
	
// 		$("#newMovieForm").submit(function (e) {
// 			e.preventDefault()
// 			let newMovieInput = $("[name=title]", $(this))
// 			let newMovie = newMovieInput.val()
	
// 			if (newMovie.trim() == '') return
	
// 			// Select an Existing Similar Element
// 			let newElement = $("li:last-child", $("#movieList")).clone()
// 			// Modify It
// 			newElement.text(newMovie)
	
// 			// Create a new element to insert into the page
// 			// let newElement = $('<li class="list-group-item">' + newMovie + '</li>')
// 			// Modify said element so it looks the same as the others
// 			// newElement.addClass('list-group-item')
// 			// newElement.text(newMovie)
	
// 			// Insert into the page
// 			$("#movieList").append(newElement)
// 			addDeleteButton(newElement)
// 			newMovieInput.val('')
// 		})
//     })
	
// end of example code


// Increments the like and retweet buttons	
$(function() 
{
	// When the heart and circle-y icons are clicked
	// the number next to them increments accordingly
	$(".btn-inc").click(function(event) 
	{
		let currentCount = $(this).next().text();
		let newCount = parseInt(currentCount) + 1;
		$(this).next().text(newCount);
	})
})

// // Failed attempt at getting the time stamp to work correctly
// // but I ran out of time.
// $(function tellTime() 
// {
// 	// Get the current month 
// 	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// 	var now = new Date();
// 	var theMonth = new now.getMonth();
// 	var currentMonth = new monthNames[theMonth];

// 	// Get the numerical day of the month
// 	var currentDayNum = new now.getDate();

// 	// Get the year
// 	var currentYear = new now.getFullYear();

// 	// Get the time in hours and minutes
// 	var currentHrs = new now.getHours();
// 	var currMins = new now.getMinutes();
				
// 	// Creates a new date/time stamp for each new post
// 	//let timeStamp = $('.media-heading').val().tellTime();
// 	// Creates a new date/time stamp for each new post
// 	//let timeStamp = $('.media-heading').val().tellTime();
// 	alert(currentHour + ":" + currentMinutes + " "  + currentMonth + currentDayNum + ", " + currentYear);

// })

$(function() 
{
	// Copy the tweet box format
	let copy = $("#clone-tweet").clone(true)
	

	// When characters are added to or deleted from the text area
	// the character limit of 140 counds up and down accordingly
	var maxlength = 140;
	$('.char-area').keyup(function() 
	{
		var length = $(this).val().length
		length = maxlength - length
		$('.char-count').text(length)
	});

	// Functions that happen once the "Tweet" button is clicked
	$(".tweet-form").submit(function(e) 
	{
		// Prevent default functions
		e.preventDefault()

		// An if statement that takes action when someone types 
		// something into the text area
		if ($("#text-area").val() != "") 
		{
			// Places the copied form above the last tweet
			$(".save-tweet").after(copy.clone(true))

			// Adds the new text
			let text2 = $("#text-area").val()
			$('#message-body').replaceWith(text2)
			
			// Resets the text box character area to blank
			// and resets the character limit to 140
			$('.char-area').val('');
			var maxlength = 140
			var length = $(this).val().length
			var length = maxlength - length
			$('.char-count').text(length)

			// Focuses or hilights the text area once it has been
			// clicked on and unfocuses or unhilights when it is
			// clicked out of
			const focusing = document.getElementById("text-area")
			focusing.focus()
			$('#activity-message').replaceWith("Awesome - you are now a Tweeten expert!")

			// //Part of the failed time telling attempt
			//tellTime();
			//$('#date-time-stamp').replaceWith(alert)
			
		} 

	});
});