// let incrementButtons = Array.from(document.getElementsByClassName('btn-inc'))

// incrementButtons.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         let content = btn.nextSibling.textContent.trim()
//         let currentLikes = parseInt(content)
//         btn.nextSibling.textContent = ` ${++currentLikes} `
//     })
// })

//-------^^this is the working javascript, but doesn't increment------

// $(function(){
//     $('.btn-inc').click(function(event) {
//         console.log(this)
//         let currentCount = $(this).next().text()
//         console.log(currentCount)
//     })
// })

// ---------------------
// $(function(){
//     $('.btn-inc').click(({target}) => {
//         //console.log(target)
//         let countTag = $(target).children('span')[0]
//         let currentCount = $(target).next(+1)
//         console.log(currentCount)
//         //console.log(this)
//     })
// })

//  $(function(){

//     $(".btn-inc").click(function(){
//         $('.btn-inc').click(({target}) => {
//             console.log(target)
//             let countTag = $(target).children('span')[0]
//             let currentCount = $(target).next(+1)
//             console.log(currentCount)
//             //console.log(this)
//         })
//     })
//  })

//  $(function(){

//     var howMany = 0;
//     $('.btn-inc').click(function(){
//         howMany = $(target).next(+1);
//         $(".btn-inc").text(howMany);
//     });
//     $(".btn-inc").text(howMany);​
//  })

// $(function() {
// function handler( event ) {
//     var target = $( event.target.countTag );
//     if ( target.is( ".btn-inc" ) ) {
//         let count = parseInt(countTag.text())+1
//         $(target).Text(count)
//         target.children().count();
//     }
//   }
// });


//  $(function() {
//     //var howMany = 1;
//     $(".btn-inc").on("click", function(){
//         $(".btn-inc") {
//             howMany = parseInt(countTag.text())+1;
//         };
//     });
//     $(".btn-inc").text(howMany);
//  });

//---^^^none of this bull crap works, but this finally does vvv---

$(function() {
    $(".btn-inc").click(function(event) {
        let currentCount = $(this).next().text();
        let newCount = parseInt(currentCount) + 1;
        $(this).next().text(newCount);
    })
})