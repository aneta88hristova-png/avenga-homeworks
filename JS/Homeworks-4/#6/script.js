function createFullNames(firstNames, lastNames) {
  const fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    const fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    fullNames.push(fullName);
  }

  return fullNames;
}

const first = ["Bob", "Jill"];
const last = ["Gregory", "Wurtz"];
const result = createFullNames(first, last);

console.log(result); // ["1. Bob Gregory", "2. Jill Wurtz"]
