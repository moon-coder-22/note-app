const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

// 1. Write function createNote()
// 2. Add button and event listener for card adding 
// 3. Add styles
// 4. Realize editing functional



function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  /*html*/
  noteEl.innerHTML = `
    <div class="note-header">
      <p id="note-title">${title}</p>
      <input id="note-title-input" class="hidden" value="${title}">
      <div>
        <button class="note-edit"><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
        <button class="note-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
    <p id="note-text">${text}</p>
     <textarea id="note-textarea" class="hidden">${text}</textarea>

  `

  const editBtn = noteEl.querySelector('.note-edit');
  const deleteBtn = noteEl.querySelector('.note-delete');

  const noteTitle = noteEl.querySelector('#note-title');
  const noteText = noteEl.querySelector('#note-text');
  const titleInputEl = noteEl.querySelector('#note-title-input');
  const textInputEl = noteEl.querySelector('#note-textarea');

  editBtn.addEventListener('click', (e) => {
    noteTitle.classList.toggle('hidden');
    noteText.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');

    noteTitle.innerText = titleInputEl.value;
    noteText.innerText = textInputEl.value;
  })

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  return noteEl;
}



addBtn.addEventListener('click', (e) => {
  const el = createNote('Title', 'Card text');
  notesEl.appendChild(el);
})