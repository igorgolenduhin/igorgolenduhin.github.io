let aboutArray= [{
  title: "Juliana Claussen - One step is enough...",
  description: "A lot of people have a story with pets. Some people realized that they do not have enough time for it, and they are trying to avoid them. But some people love animals, have a free time and ready to have a pet. I am a person who loves it, and I wanted to buy a dog. After couple of weeks I found the best dog ever, and you will not believe me, but I found it on the street. I stopped near it, looked at its eyes and realized",
  picture: 'pictures/about/about_Juliana.png',
  ending: 'ONE STEP IS ENOUGH TO CHANGE SOMEONES LIFE'
},
{
  title: "Zahra Safari - Something that changed me...",
  description: "Have you ever seen a stray dog? I think your answer is 'Yes', because, unfortunately, it is a normal thing in our world. I saw my first dog on the street when I was 14 years old. I asked my parents to bring it to our house, asked to help it. It was hard but in the end they let me take a dog from the street. It was very tired and sick. We bought a lot of medicine for our new friend. After 2 weeks my first dog died due to illness, I know that it affected me, and",
  picture: 'pictures/about/about_Zahra.png',
  ending: 'I WILL NEVER BE THE SAME PERSON'
},
{
  title: "Harshil Sankadasariya - My thoughts",
  description: "I do not have any sad story about pets and I am happy about it because pets have a special place in my heart. I really cannot understand people who leave their pets. How can animals trust us after that? How can they love again if their previous owner betrayed them? I thought it is not possible, but I was wrong. They can love and trust again if they feel the same from people. They can give us a second chance. I want to believe that we will not disappoint them.",
  picture: 'pictures/about/about_Harshil.png',
  ending: 'WE CAN CHANGE THIS WORLD AND MAKE IT BETTER'
},
{
  title: "Igor Golendukhin - My story in this project...",
  description: "I was 20 years old when my brother brought a puppy from the street. She was hungry, dirty and scared. It was just dog from the street without any breed, but she was amazing. After couple of days she began to trust us, and a few days later I saw love in her eyes. She was saved by my brother, so she protected him and was devoted. And I saw that dog can feel, can love, it changed my mind and life. That is why I want to help every dog in the street to find a FAMILY.",
  picture: 'pictures/about/about_igor.png',
  ending: 'WE ARE RESPONSIBLE FOR THOSE WHOM WE TAMED!'
}
]
var timeOut;
function scrollUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-75);
      timeOut = setTimeout('scrollUp()', 20);
   } else clearTimeout(timeOut);
}
$(function () {
  $('#wrapper').html('<div class="beginningAbout" id="beginningAbout"></div><div class="card"><div class="cardMain" id="cardMainJuliana"></div></div><div class="card"><div class="cardMain" id="cardMainZahra"></div></div><div class="card"><div class="cardMain" id="cardMainHarshil"></div></div><div class="card"><div class="cardMain" id="cardMainIgor"></div></div><div id="scrollUp" onclick="scrollUp();"><i class="fa fa-chevron-circle-up fa-2x" aria-hidden="true"></i></div>');  
  $('#beginningAbout').html('<h2>Why are we doing this? Any reasons? We will tell you our stories and you will understand it</h2><p>This site started like a project in Humber College for Web Programming and Design. Our team:<b>Juliana Claussen</b> as a leader, <b>Zahra Safari</b>, <b>Harshil Sankadasariya</b> and <b>Igor Golendukhin</b> as developers. Everyone of us has some experience with adoption, and we wanted to make some really useful site for that. We are hope that everybody will find a new friend with us, that every dog will find a new home. If you read some reasons for adoption instead of buying, but you are not sure yet, just read our stories and maybe you will make this world a little bit better.</p><h2>4 stories which can change your mind</h2>'); 
  
  let Julianacard = '<div class="h3Header"><h3>'+ aboutArray[0].title+'</h3></div><div class="cardContent"><div class="cardImg"><img class="ourimg" src="'+aboutArray[0].picture+'"/></div><div><p>'+aboutArray[0].description+'</p></div></div><p class="boldText">'+aboutArray[0].ending+'</p>';
     $('#cardMainJuliana').html(Julianacard);
    
  let Zahracard = '<div class="h3Header"><h3>' + aboutArray[1].title + '</h3></div><div class="cardContent"><div class="cardImg"><img class="ourimg" src="'+aboutArray[1].picture+'"/></div><div><p>'+aboutArray[1].description+'</p></div></div><p class="boldText">'+aboutArray[1].ending+'</p>';
    $('#cardMainZahra').html(Zahracard);

  let Harshilcard = '<div class="h3Header"><h3>' +aboutArray[2].title +'</h3></div><div class="cardContent"><div class="cardImg"><img class="ourimg" src="' +aboutArray[2].picture+'"/></div><div><p>'+aboutArray[2].description+'</p></div></div><p class="boldText">'+aboutArray[2].ending+'</p>';
    $('#cardMainHarshil').html(Harshilcard);

  let Igorcard = '<div class="h3Header"><h3>'+aboutArray[3].title+'</h3></div><div class="cardContent"><div class="cardImg"><img class="ourimg" src="'+aboutArray[3].picture+'"/></div><div><p>'+aboutArray[3].description+'</p></div></div><p class="boldText">'+aboutArray[3].ending+'</p>';
    $('#cardMainIgor').html(Igorcard);
  
  
});
