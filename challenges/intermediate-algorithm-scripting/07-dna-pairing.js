/**
 * Pair DNA strands
 *
 * A -> T
 * C -> G
 *
 * G -> C
 * T -> A
 */

function pairElement(str) {
  const eachStrand = str.split('');

  const containerArray = [];
  for (let i = 0; i < eachStrand.length; i++) {
    const subArray = [];
    if (eachStrand[i] === 'A') {
      subArray.push('A', 'T');
    }
    else if (eachStrand[i] === 'T') {
      subArray.push('T', 'A');
    }
    else if (eachStrand[i] === 'C') {
      subArray.push('C', 'G');
    }
    else if (eachStrand[i] === 'G') {
      subArray.push('G', 'C');
    }

    containerArray.push(subArray);
  }

  return containerArray;
}

console.log(pairElement("GCG"));