"use strict";

function validator(request, response, next) {
  if (!request.query.name) {
    next('Error: no name found');
  } else {
    next();
  }
}

module.exports = validator;
