function createSentenceFromPrompt() {
  const input = prompt(
    "Enter words separated by commas:\nExample: Hello,there,students,of,SEDC,!"
  );

  if (!input) {
    alert("You didn't enter anything!");
    return;
  }

  const wordsArray = input.split(",");

  const sentence = wordsArray.join(" ");

  alert("Your sentence:\n\n" + sentence);

  return sentence;
}

createSentenceFromPrompt();
