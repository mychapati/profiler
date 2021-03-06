dw.transform.description.clause.ints = function(container, transform, parameter, opt) {
  var clause = dw.transform.description.clause(container, transform, parameter, opt),
      vis;

  clause.vis = function() {
    return vis;
  }

  clause.text = function() {
    return transform[parameter]().join(', ').substr(0, 12)
  }

  return clause;
};
