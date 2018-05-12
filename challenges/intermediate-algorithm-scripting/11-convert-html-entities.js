/**
 * Convert character to their corresponding html entities
 */

function convertHTML(str) {
  const eachChar = str.split(''),
    newArr = eachChar.map(char => {
      switch (char) {
        case '&':
          return '&amp;';

        case '<':
          return '&lt;';

        case '>':
          return '&gt;';

        case '\'':
          return '&apos;';

        case '"':
          return '&quot;';

        default:
          return char;
      }
    });

  return newArr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));