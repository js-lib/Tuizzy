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
    this.timeLimit = object.time; // TODO: convert this to millis
    this.question  = object.text;
    this.answer    = object.answ;
    this.type      = object.type;
    this.options   = object.opts;
    
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
