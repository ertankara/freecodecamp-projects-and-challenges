/**
 * Return true if passed string looks like a valid US phone number else false
 *
 * it can be in the following formats:
 *
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 *
 * Country code may also be provided
 */

function telephoneCheck(str) {
  const regExp = /^\d{3}[\s-]*\d{3}[\s-]*\d{4}$/g,
        regExp2 = /^1[\s-]*\(\d{3}\)[\s-]*\d{3}[\s-]\d{4}$/g,
        regExp3 = /^1[\s-]*\d{3}[\s-]*\d{3}[\s-]*\d{4}$/g,
        regExp4 = /^\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}$/g;

  return regExp.test(str) || regExp2.test(str) || regExp3.test(str) || regExp4.test(str);
}

console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 555 555 5555"));