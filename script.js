let btn = document.querySelector(".task-manage__button")
let roof = document.querySelector(".task-manage__rooftop")
let smile = document.querySelector(".task-manage__delite")
let input = document.querySelector(".task-manage__input")
let mainDiv = document.querySelector(".task-manage__main-area")
const arr = []
id = 0


smile.addEventListener('click', (event) => {
  if (event.target.src.split('/')[11] === 'mood_black_24dp.svg') {
    event.target.src = 'images/mood_bad_black_24dp.svg'
  } else {
    event.target.src = 'images/mood_black_24dp.svg'
  }
 
 })



btn.addEventListener('click', (event) => {
  arr.push({val: input.value, id: id++})
  console.log(arr)
  let newInput = document.createElement('input')
  newInput.classList.add('.task-manage__input')
  newInput.value = input.value
  mainDiv.append(newInput)
})

