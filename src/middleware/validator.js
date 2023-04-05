"use strict";

function validator(request, response, next) {
  if (!request.query.name) {
    next();
  } else {
    next('Error: no name found');
  }
}

module.exports = validator;
