(function(context) {
  
  // NOTE: for getTuizFile() to work, the current URL must be in
  //   the directory containing /tuizzes/
  // TODO: Check name for validity?
  var getTuizFile = function(name, callback) {
    var request = new context.XMLHttpRequest();
    request.addEventListener('load', function() {
      callback.call(this, this.responseText);
    });
    request.open('GET', './tuizzes/'+name+'.tuiz');
    request.send();
  };
  
  if (!context.Tuizzy) {
    context.Tuizzy = {};
  }
  
  // A simple function to get an object form of a .tuiz file
  context.Tuizzy.getTuizObject = function(name, callback) {
    getTuizFile(name, function(content) {
      var object = JSON.parse(content);
      callback(object);
    })
  };
})(window);
