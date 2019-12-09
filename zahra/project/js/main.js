


// Java script to make a top button to navigate easily to top of the screen from any where
window.onload = function() {
  let topbutton = document.getElementById("topbtn");
  topbutton.onclick = topFunction;
  let x = window.matchMedia("(max-width: 700px)")
  window.onscroll = function(){
    if ((document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) &&  !x.matches) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }



}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Script for add lists dinamically 

$(function(){    
  
   
/* Breeds */  
// Script for add breeds list dinamically 

  let breeds=[{
                  "name":"Basset Dachshund",
                  "page":"../../juliana/adoptable1.html",
                  "img":"images/basset-dachshund.jpg",
                  "description":"The basset hound is a friendly, easygoing dog. Originally hunting in packs, they tend to be good with other dogs and other pets in general. Bassets are people oriented and get along well with children. Fairly smart dogs, bassets are not easy to train as they are somewhat stubborn."
              },
              {
                  "name":"Labrador Retriever",
                  "page":"../../juliana/adoptable2.html",
                  "img":"images/labrador-retriever.jpg",
                  "description":"Its affable nature, loyal and helpful disposition, ideal size and strength for assisting people in everything from search-and-rescue to hunting to service animal has kept the Labrador as the top dog. But before the Labrador gained fame as a perfect all-around dog, the breed nearly disappeared."
              },
              {
                  "name":"German Shepherd",
                  "page":"adoptable3.html",
                  "img":"images/german-shepherd.jpg",
                  "description":"The only breed of large dog with the closest, natural resemblance to a wolf is the German Shepherd who has remained one of the top two picks for Americans for many years. Considered a faithful and utterly devoted companion, this pup also fits in perfectly to a home with established pets."
              },
              {
                  "name":"Rotweiler",
                  "page":"adoptable4.html",
                  "img":"images/rotweiler.jpg",
                  "description":"Looks can be deceptive and that is never truer than when it comes to the Rottweiler. A powerful dog by nature, this medium to large pup is deeply loyal, very affectionate and reserved around new people. The handsome, black and tan German Rottweiler is happiest when given a job to do. Once having the important job of herding cattle in the Roman era, today Rottweiler’s play an important role with law enforcement, as therapy dogs and as service dogs."
              },
              {
                  "name":"Great Dane",
                  "page":"#",
                  "img":"images/great-dane.jpg",
                  "description":" Best known for their friendly and patient demeanor, the Great Dane may fall into the largest breed of dog category but that doesn’t mean he needs a living space to match his size. This breed can be content in an apartment if there is enough space to stretch out and if regular, short walks are part of his daily routine."
              },
              {
                  "name":"Bernese Mountain",
                  "page":"#",
                  "img":"images/bernese-mountain.jpg",
                  "description":"If you consider yourself an outdoors enthusiast, exploring undiscovered trails and feeling connected to nature then the Bernese Mountain Dog is your ideal lifestyle match. Of course, that doesn’t mean that Berners are restricted to country life. As long as these large breed dogs get to spend time with their human family and enjoy their active lives – these big fluffy dog breeds are happy. "
              }];

    let availablity;
    $.each(breeds, function(index,value) {


      if(value.page=="#")
         availablity = "Not available";
      else
         availablity = "Available for adoption";


      $('#breedList').append('<section>' +
                                  '<div class="page-grid">' + 
                                    '<div class="column">' +
                                      '<img src="' + value.img + '" alt="'+ value.name +' breed">' +
                                    '</div>'+
                                    '<div class="column">'+
                                      '<h2 class="breeds_title">'+ value.name +'</h2>'+
                                      '<p class=body-text>'+ value.description +'</p>' +
                                      '<a class="available" href="'+ value.page+'"><img src="images/dog-paw.png" alt="paw"></img>'+availablity+'</a>' + 
                                    '</div>'+
                                  '</div> '+
                              '</section>'
                            );

    });

//Prevent to click unavailable breeds
    $('a').click(function(e){
     if($(this).attr('href')=="#")
     e.preventDefault();
    })

/* Animal care */  
// Script for add list of animal cares which provided in Petbuys dinamically 

  let animalCares =[
                      "Petbuys's™ does not participate in studies that jeopardise the health of dogs. All Petbuys's™-supported studies are designed to maintain and improve the animal's health. No study will be performed on dogs that requires euthanasia.",
                      "When studying how a nutrient is absorbed, distributed, stored, used and released by a dog's body, we only use research methods that are the veterinary equivalent of human nutritional or medical studies. Petbuys's™ does not support or conduct studies that cause pain or hurt the dogs. This is based on the belief that what is painful to humans is also painful to dogs.",
                      "We only conduct studies if we have compelling evidence that we can improve the health and welfare of companion animals. These studies often result in breakthrough nutritional findings, improving the lives of millions of dogs.",
                      "We continually strive to find ways to reduce dependence on animal research. A substantial number of dogs participating in our feeding studies are involved in in-home tests. Our veterinarians and nutritionists are skilled at developing methods that simulate animal systems. For example, we have developed and published a mathematical formula, based on the nutrient profile of the food that accurately predicts the pH of feline or canine urine without animal testing.",
                      "To assure pet owners that our therapeutic foods are safe and effective, we support studies using pets with naturally occurring diseases or conditions. We do not participate in studies in which surgical or non-surgical methods are used to create or simulate disease conditions.",
                      "The Petbuys's™ Pet Nutrition Centre and any external facility Petbuys's™ supports must meet or exceed all industry regulatory standards for animal care. For all studies conducted at external facilities, we appoint and fund pet advocates, responsible for ensuring each pet's compassionate care, which has the key components of providing exercise and a socially enriched environment.",
                      "We publish the results of our studies to advance the knowledge of nutritional health care and to help prevent the unnecessary repetition of studies involving dogs.",
                      "Petbuys's™ only uses data from animal studies that are in the public domain, either previously published or that were conducted under this Global Animal Welfare Policy."
                    ];
  $.each(animalCares, function(index,value) {

        $('#animalcare-list').append('<li>' + value + '</li>');
  });


/* Training */  
// Script for add list of recomended trainer in Petbuys dinamically 

let trainerList =[{
  "name":"Suzan Millan",
  "img":"images/trainer1.jpg",
  "description":"She trains a happy, well-balanced dog that is ready and willing to execute your commands every time."
},
{
  "name":"Brandon McMillan",
  "img":"images/trainer2.jpg",
  "description":"If your dog qualifies for our Perfect Dog For Life Off-Leash K9 Training Program, she can help you. In just 2-weeks we will train your dog to obey your commands, anywhere, anytime."
},
{
  "name":"Jolian Smithe",
  "img":"images/trainer3.jpg",
  "description":"She use the latest E-Collar technology along with precision techniques, positive reinforcement, and a generous helping of praise to teach your dog to pay attention and obey your commands."
},
{
  "name":"Jenifer Lopeziano",
  "img":"images/trainer4.jpg",
  "description":"She belives with a balanced program of exercises, engagement, and exposure, your dog learns to pay attention to commands."
}];

$.each(trainerList, function(index,value) {

   $('#trainer-list').append('<li>' +
                              '<img src="' +  value.img + '" alt="trainer"></img>' +
                              '<p><b>' + value.name + '</b><br>' + value.description + '</p>' +
                              '</li>');
  });



 
});
  




                    
                        
                                
                        
                        
                            
                            
                                                       
                          
