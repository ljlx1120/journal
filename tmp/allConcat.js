var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var journalEntry = $('#entry').val();
    var counter = new Journal("something");
    var wordCounter = counter.entryCheck(journalEntry);
    var vowelCheck = counter.vowelCheck(journalEntry);
    var teaser = counter.getTeaser(journalEntry);
    $('#output').append(wordCounter + ' ' + vowelCheck + ' ' + teaser + '...');
    $('#journal-form').hide();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#output').prepend(email);
  });
});
