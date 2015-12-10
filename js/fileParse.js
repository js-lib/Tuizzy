(function(context) {
  
  // NOTE: for getTuizFile() to work, the current URL must be in
  //  the directory containing /tuizzes/
  // TODO: Check name for validity?
  var getTuizFile = function(name, callback) {
    var request = new context.XMLHttpRequest();
    request.addEventListener('load', function() {
      callback.call(this, this.responseText);
    });
    request.open('GET', './tuizzes/'+name+'.tuiz');
    request.send();
  };
  
  var Question = function(object) {
    var undefined; // To ensure undefined has the correct value 
    
    var timeLimit = object.time; // TODO: convert this to millis
    var question  = object.text;
    var answer    = object.answ;
    var type      = object.type; // "choice", "blank", or "essay"
    var options   = object.opts; // Optional
    
    var timeLeft = timeLimit;
    var timeUp   = false;
    
    this.start = function() {
      var willReturn = {
        question: question,
        type:     type,
        options:  options,
        timeUp:   false,
        answer:   undefined
      };
      // Create willReturn here so it's accessible to below func
      
      var intervalID = context.setInterval( function() {
        timeLeft -= 100;
        if (timeLeft <= 0) {
          timeUp = true;
          willReturn.timeUp = true;
          context.clearInterval(intervalID);
        }
      }, 100);
      
      return willReturn;
    };
    
    // TODO: finish
  };
  
  var Tuiz = function(object) {
    // TODO: finish
    // This should contain sections, questions, etc.
  };
  
  
  // If Tuizzy does not exist (it shouldn't), make it an object
  if (!context.Tuizzy) {
    context.Tuizzy = {};
  }
  
  // A simple function to get an object form of a .tuiz file
  // NOTE: This function should only be used by HTML if HTML wants
  //  to directly interact with object - normally ...getTuiz()
  //  should be used.
  context.Tuizzy.getTuizObject = function(name, callback) {
    getTuizFile(name, function(content) {
      var object = JSON.parse(content);
      callback(object);
    })
  };
  
  context.Tuizzy.getTuiz = function(name, callback) {
    context.Tuizzy.getTuizObject(name, function() {
      
    });
  };
})(window);
