const words = ["tsar", "rat", "tar", "star", "tars", "cheese"];
function groupAnagrams(words) {
    const anagramGroups = {};
    words.forEach((word) => {
        const newWord = word.split('').sort().join('');

        if (!anagramGroups[newWord]) {
            anagramGroups[newWord] = [word];
        } else {
            anagramGroups[newWord].push(word);
        }
    });
    const result = Object.values(anagramGroups);
    return result;
}
const resEnd = groupAnagrams(words);
console.log(resEnd);

