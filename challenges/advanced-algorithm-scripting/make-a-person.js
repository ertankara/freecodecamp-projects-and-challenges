/**
 * Any object created via Person consturctor function
 * must have following properties only
 *
 * getFirstName
 * getLastName
 * getFullName
 *
 * setFirstName
 * setLastName
 * setFullName
 *
 * it can't have more than that, so you have to use closures to
 * make it return useful data
 */

function Person(firstAndLast) {
  var full = firstAndLast.split(' ');
  var obj = {
    firstname: full[0],
    lastname: full[1],
    fullname: function() {
      return this.firstname + ' ' + this.lastname;
    }
  };

  this.getFirstName = function() {
    return obj.firstname;
  };

  this.getLastName = function() {
    return obj.lastname;
  };

  this.getFullName = function() {
    return obj.fullname();
  };

  this.setFirstName = function(firstname) {
    obj.firstname = firstname;
  };

  this.setLastName = function(lastname) {
    obj.lastname = lastname;
  };

  this.setFullName = function(firstAndLast) {
    var full = firstAndLast.split(' ');
    obj.firstname = full[0];
    obj.lastname = full[1];
  };
}

var bob = new Person('Bob Ross');
bob.getFullName();