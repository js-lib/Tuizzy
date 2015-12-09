(function(context) {
  
  // NOTE: for getTuizFile() to work, the current URL must be in
  //   the directory containing /tuizzes/
  // TODO: Check name for validity?
  var getTuizFile = function(name, callback) {
    var request = new context.XMLHttpRequest();
    request.addEventListener('load', callback);
    request.open('GET', './tuizzes/'+name);
  };
})(window);
