(function(context) {
  
  // NOTE: for getTuizFile() to work, the current URL must be in
  //   the directory containing /tuizzes/
  // TODO: Check name for validity?
  var getTuizFile = function(name, callback) {
    var request = new context.XMLHttpRequest();
    request.addEventListener('load', function() {
      callback.call(this, this.responseText);
    });
    request.open('GET', './tuizzes/'+name);
  };
  
  if (!window.Tuizzy) {
    window.Tuizzy = {};
  }
  
  // A simple function to get an object form of a .tuiz file
  window.Tuizzy.getTuizObject = function(name, callback) {
    getTuizFile(name, function(content) {
      var object = JSON.parse(content);
      callback(object);
    })
  };
})(window);
