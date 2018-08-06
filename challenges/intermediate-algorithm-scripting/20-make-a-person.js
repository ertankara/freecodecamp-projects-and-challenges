var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  const names = firstAndLast.split(' ');
  console.log(names)
  this.getFullName = function() {
    return names[0] + ' ' + names[1];
  };

  this.getFirstName = function() {
    return names[0];
  };

  this.getLastName = function() {
    return names[1];
  };

  this.setFirstName = function(newFirstName) {
    names[0] = newFirstName;
  };

  this.setLastName = function(newLastName) {
    names[1] = newLastName;
  };

  this.setFullName = function(newFullName) {
    const eachName = newFullName.split(' ');
    names[0] = eachName[0];
    names[1] = eachName[1];
  };
};

var bob = new Person('Bob Ross');


bob.setFullName('Jane Doe');
console.log(bob.getFullName());