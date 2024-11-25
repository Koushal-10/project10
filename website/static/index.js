function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}
function filterNotes() {
  let input = document.getElementById("search-bar").value.toLowerCase();
  let notes = document.getElementsByClassName("note");
  
  for (let note of notes) {
      let text = note.textContent || note.innerText;
      note.style.display = text.toLowerCase().includes(input) ? "" : "none";
  }
}
