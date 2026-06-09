export function pigLatin(word: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(word[0])) {
    return word + "ay";
  }

  return word.slice(1) + word[0] + "ay";
}