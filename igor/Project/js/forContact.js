
$(function () {
  alert('If you want to contact us, please enter some information about yourself. And we will show our information to you. It will be fair :)');
  let namepattern = /^[a-zA-Z]{2,30}$/
 
    do {
      customerName = prompt('Enter your first name', '');
      if (!namepattern.test(customerName)) {
        do {
          alert('Use letters only, we do not believe that your name contains numbers or special symbols');
          customerName = prompt('Enter your first name again', '');
        } while (!namepattern.test(customerName));
      }
    } while (customerName == '');
  
  customerAddress = prompt('Enter your address', '');
  if (customerAddress == '') {
    alert("Enter your address");
    do {
      customerAddress = prompt('Enter your address', '');
    } while (customerAddress == '');
  }
  $('#IgorW').html('WhatsApp: <a id=btnIW href="https://wa.me/16475728860?text=Hi Igor, my name is ' + customerName + '. I live on ' + customerAddress + ' and I want to talk about pet adoption">Text to Igor in WhatsApp</a>');
  $('#IgorM').html('<p>Contact Information: <br />Mail: <a href="mailto:Igor@petbyus.ca">Igor@petbyus.ca</a> <br />');
  $('#HarshilW').html('WhatsApp: <a id=btnHW href="https://wa.me/14372300016?text=Hi Harshil, my name is ' + customerName + '. I live on ' + customerAddress + ' and I want to talk about pet adoption">Text to Harshil in WhatsApp</a>');
  $('#HarshilM').html('<p>Contact Information: <br />Mail: <a href="mailto:Harshil@petbyus.ca">Harshil@petbyus.ca</a> <br />');
  $('#ZahraW').html('WhatsApp: <a id=btnZW href="https://wa.me/989122432972?text=Hi Zahra, my name is ' + customerName + '. I live on ' + customerAddress + ' and I want to talk about pet adoption">Text to Zahra in WhatsApp</a>');
  $('#ZahraM').html('<p>Contact Information: <br />Mail: <a href="mailto:Zahra@petbyus.ca">Zahra@petbyus.ca</a> <br />');
  $('#JulianaW').html('WhatsApp: <a id=btnJW href="https://wa.me/16476731595?text=Hi Juliana, my name is ' + customerName + '. I live on ' + customerAddress + ' and I want to talk about pet adoption">Text to Juliana in WhatsApp</a>');
  $('#JulianaM').html('<p>Contact Information: <br />Mail: <a href="mailto:Juliana@petbyus.ca">Juliana@petbyus.ca</a> <br />');

});
