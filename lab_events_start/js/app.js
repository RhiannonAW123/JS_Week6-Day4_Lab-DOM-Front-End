document.addEventListener('DOMContentLoaded', () => {
  createButton();
  console.log('JavaScript loaded');

  const theForm = document.querySelector ('#new-item-form');
  theForm.addEventListener ('submit', handleFormSubmit);

  const deleteButton = document.querySelector ('button');
  deleteButton.addEventListener ('click', handleDeleteClick);
})


const handleFormSubmit = function (submission) {
  submission.preventDefault();                                      // USEFUL IN FORMS prevents making HTTP GET REQUESTS (aka reloading the page)
  const newListItem = document.createElement('li');
  newListItem.textContent = `${submission.target.title.value}
  ${submission.target.author.value}
  ${submission.target.category.value}`

  const mario = document.querySelector('ul');
  mario.appendChild(newListItem);
  document.getElementById('new-item-form').reset();
}


const handleDeleteClick = function () {
  const resultUl = document.querySelector('ul');
  resultUl.removeChild = '${target.title.value} '
}


function createButton () {
 const newButton = document.createElement ('button');
 newButton.innerHTML = 'Delete All';
 document.body.appendChild(newButton);
}

