console.log('first file')

const allSections = document.getElementsByTagName('section');
console.log(allSections)

const firstTitle = document.getElementById('first-title');
console.log(firstTitle.innerText);
firstTitle.innerText = 'Prothom prothom valo laga'

// second file
console.log('second file')

const sections = document.getElementsByClassName('section-item');
console.log(sections)

// third file
console.log('third js')

// get the parent
const thirdList = document.getElementById('third-list');
console.log(thirdList)
// create the child
const li = document.createElement('li');
li.innerText = 'Brand new list item'

thirdList.appendChild(li)