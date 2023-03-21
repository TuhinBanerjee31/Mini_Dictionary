window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  let selectedWord = window
    .getSelection()
    .toString()
    .trim();

    if (selectedWord.length > 0) {
      console.log(selectedWord);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
      .then((response) => response.json())
      .then((data) => {
        alert(`${selectedWord} : ${data[0].meanings[0].definitions[0].definition}`);
      })
    }
}