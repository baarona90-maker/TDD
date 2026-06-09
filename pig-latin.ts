export function pigLatin(word: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(word[0])) {
    return word + "ay";
  }

  let i = 0;
  while (i < word.length && !vowels.includes(word[i])) {
    i++;
  }

  return word.slice(i) + word.slice(0, i) + "ay";
}