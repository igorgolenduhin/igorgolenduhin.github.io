// 1. Javascript and Jquery: Login and Signup box with array. Functionality used in all pages.

function openLogin(){
    document.getElementById("login").style.display="block";
}
function closeLogin(){
    document.getElementById("login").style.display="none";
}
function openSignup(){
    document.getElementById("signup").style.display="block";
}
function closeSignup(){
    document.getElementById("signup").style.display="none";
}

$( document ).ready( function() {    //When the document is ready, do this function
    let loginsArr = [];              //Create an empty array of objects for username and password
    $('.signup-form').on('submit', function(e) {  //Take the element on submit and do the function
        e.preventDefault();           // Prevent default behavior for forms
        const name     = $(this).find('#name-box').val();   //this:signup-form; find value inside box
        const email    = $(this).find('#email-box').val();   //this:signup-form; find value inside box
        const username = $(this).find('#sign-username-box').val();   //this:signup-form; find value inside box
        const password = $(this).find('#sign-password-box').val();
        const validate = $(this).find('.validation');

        if ( name == "" || email == "" || username == "" || password == "" ) {
            validate.removeClass('success').text( "All the spaces must be filled out."+
            " Password must have one lower case letter, one uppercase, and one special character."+
            " Email must be in the format character@domain.com" );
            return false;
        }

        const foundUser = $.grep( loginsArr, function( n ) { //Return array foundUser
            return n.login === username;
        });
        if ( foundUser.length <= 0 && (username != '') && (password !='') ) {     //If array foundUser is empty that means no username found.
            loginsArr.push(  //If username and password box is not empty, proceed.
                {
                    login: username,
                    pass: password
                }
            );
            validate.addClass('success').text( 'Account ' + username + ' registered!' );
        } else {
            validate.removeClass('success').text( 'This username is taken or the boxes were not properly filled.' );
        }
    });

    $('.login-form').on('submit', function(e) {
        e.preventDefault();
        const username = $(this).find('#login-username-box').val();
        const password = $(this).find('#login-password-box').val();
        const validate = $(this).find('.validation');

        if ( username == "" || password == "" ) {
          validate.removeClass('success').text( "All the spaces must be filled out." );
          return false;
        }

        const foundUser = $.grep( loginsArr, function( n ) {
            return n.login === username && n.pass === password;
        });
        if ( foundUser.length <= 0 ) {
          validate.removeClass('success').text( 'Username or Password are incorrect.' );
        } else {
          validate.addClass('success').text( 'User ' + username + ' logged in successfully' );
        }
    });
    function populateAdoptables(){

        $("#lucy").html("<p>Lucy is a female basset dachshund that survived from the huricane Harvey." +
        "She is a 4 years old dog that loves strangers and is very playfull. If you want to know more about her," +
        "check <a href='adoptable1.html'> Lucy</a></p>");

        $("#castor").html(" <p>Castor is a male Labrador Retriever. He is 5 years old that is ready to find his forever family."+
        "He is housebroken and completely idependent."+
        "If you want to know more about him, check <a href='adoptable2.html'>Castor</a></p>");

        $("#humphrey").html("<p>Humphrey is male German Shepherd that is only 2 months. He is friendly and loveable with people,"+
        "housetrained and knows his basic commands. He loves to sit with his people and get loving attention."+
        "If you want to know more about him, check <a href='zahra/project/adoptable3.html'>Humphrey</a></p>");

        $("#ryker").html(" <p> Ryker is a lovely female rotweiler that is available for adoption. She is 2 years old, very good with people and other dogs."+
        "If you want to know more about her, check <a href='zahra/project/adoptable4.html'>Ryker</a></p>");

        $("#adoptable1-img").html("<img class='adoptable-img' src='images/adoptable1.jpg' alt='adoptable 1 image'>");

        $("#adoptable2-img").html("<img class='adoptable-img' src='images/adoptable2.jpg' alt='adoptable 2 image'>");

        $("#adoptable3-img").html("<img class='adoptable-img' src='../../zahra/project/images/adoptable3.jpg' alt='adoptable 3 image'>");

        $('#adoptable4-img').html("<img class='adoptable-img' src='../../zahra/project/images/adoptable4.jpg' alt='adoptable 4 image'>");

        $('#donate-banner').html("<img src='images/donatebanner1.jpg' alt='donate banner'>");
    }
        populateAdoptables();

        //page slider for banners. Button added in css. Automatic and manual display.
        if ( $('.banner-cases').length > 0 ) {
          $('.banner-cases').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
          });
        }

        //page banner for luna image. Not working, img appearing to out of scale.
        // //$('#luna').slick({
        //     centerMode: true,
        //     centerPadding: '60px',
        //     slidesToScroll:3,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //     slidesToShow: 3,
        //     arrows: true,
        //   });
});
