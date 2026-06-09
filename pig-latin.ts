const isVowel = (char: string): boolean =>
  ["a", "e", "i", "o", "u"].includes(char);

export function pigLatin(word: string): string {
  if (isVowel(word[0])) {
    return word + "ay";
  }

  let i = 0;
  while (i < word.length && !isVowel(word[i])) {
    i++;
  }

  return word.slice(i) + word.slice(0, i) + "ay";
}