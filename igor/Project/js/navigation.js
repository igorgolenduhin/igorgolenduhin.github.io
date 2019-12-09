var isScrolling = false;
let adoptionArray= [{
  title: "Give them a new LIFE",
  description: "You are not just bring a dog, you can give it a chance to see what a normal life is. A dog will understand that life is not just a cage and short walking on the street, but it is love, tenderness, care and support.",
  picture: 'pictures/adoption/insideR1.jpg'
},{
  title: "You can save the dog",
  description: "Unfortunately, animal shelters usually don`t have enough money, medicines and veterinarians to keep dogs for a long time. Do you know what happen next? Yes, killing a dog...",
  picture: 'pictures/adoption/insideR2.jpg'
},
{
  title: "They are healthy",
  description: "All dogs are healthy in shelters. Usually every shelter has a veterinarian who treats dogs, who helps them with illness and fleas. After that shelter can start to find a new home for a dog. In every case you can bring the dog back.",
  picture: 'pictures/adoption/insideR1_health.jpg'
},
{
  title: "You have a helper",
  description: "As we told you before, every shelter has a doctor for pets. They care about dogs every day, they know their habits, character and temperament. They can help you to find your perfect friend.",
  picture: 'pictures/adoption/insideR2_vet.jpg'
}
]

$(window).on("DOMMouseScroll mousewheel", function (e) {
  if (!isScrolling) {
    isScrolling = true;
    var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
    if (delta >= 0) {
      isScrolling = false;
      $('.hidden').removeClass('hidden');
    } else {
      if ($(window).scrollTop() > 200) {
        $('.nav').addClass('hidden');
      }
      isScrolling = false;
    }
  }
  
});
$(function () {
  $('#beginningAdoption').html('<h2>Buy or Adopt?</h2><p>If you are visiting this page you probably think about reasons of pet adoption. If you buy a dog, it will be a puppy who will love you. You can be sure about its breed and health. Why should I bring any dog from the street at home? Usually these are typical phrases of people who don`t know anything about pet adoption. We want to explain to you that it is wrong opinion</p>');
  
    let result1 = '<h2>' + adoptionArray[0].title + '</h2>'+'<div class = "insideR1">' + '<p>' + adoptionArray[0].description +'</p>' +  '<img src=' +adoptionArray[0].picture + '>' + '</div>';
    $('#reason1').html(result1);
    
    let result2 = '<h2>' + adoptionArray[1].title + '</h2>'+'<div class = "insideR2">' + '<p>' + adoptionArray[1].description +'</p>' +  '<img src=' +adoptionArray[1].picture + '>' + '</div>';
    $('#reason2').html(result2);

    let result3 = '<h2>' + adoptionArray[2].title + '</h2>'+'<div class = "insideR1">' + '<p>' + adoptionArray[2].description +'</p>' +  '<img src=' +adoptionArray[2].picture + '>' + '</div>';
    $('#reason3').html(result3);

    let result4 = '<h2>' + adoptionArray[3].title + '</h2>'+'<div class = "insideR2">' + '<p>' + adoptionArray[3].description +'</p>' +  '<img src=' +adoptionArray[3].picture + '>' + '</div>';
    $('#reason4').html(result4);
});