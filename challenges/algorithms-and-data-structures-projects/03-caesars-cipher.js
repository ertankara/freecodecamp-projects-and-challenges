/**
 * Write a function which takes a ROT13 encoded string and returns
 * decoded string
 *
 * All letters will be uppercase, do not edit non alphanumeric characters
 * but input may contain them
 *
 */

function rot13(str) { // LBH QVQ VG!
  let encCharArray = str.toUpperCase().split("");
  let decUnicode = encCharArray.map(function (element) {
    if (element.charCodeAt() >= "A".charCodeAt() &&
      element.charCodeAt() <= "Z".charCodeAt()) {

      if (element != " " ||
        (element.charCodeAt() < "A".charCodeAt() &&
          element.charCodeAt() > "Z".charCodeAt())) {

        if (element.charCodeAt() - 13 < "A".charCodeAt()) {
          return "Z".charCodeAt() - (12 - (element.charCodeAt() - "A".charCodeAt()));
        }
        else if ((element.charCodeAt() - 13) >= "A".charCodeAt()) {
          return element.charCodeAt() - 13;
        }
      }
    }
    return element.charCodeAt();
  });
  let decCharArray = decUnicode.map(function (element) {
    return String.fromCharCode(element);
  });

  return decCharArray.join("").toUpperCase();
}

console.log(rot13("SERR PBQR PNZC"));