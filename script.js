let btns = document.querySelector(".task-manage__button")
let roof = document.querySelector(".task-manage__rooftop")
let smiles = document.querySelectorAll(".task-manage__delite")
let input = document.querySelector(".task-manage__input")
let mainDiv = document.querySelector(".task-manage__main-area")
let sortBtn = document.querySelector(".task-manage__sort")


const state = {
    id: 4,
    arr: [{val:'hello', id: 0},{val:'bye', id: 1},{val:'hello', id: 2}, {val:'danila', id: 3}, {val:'aleksei', id: 4}],
    arrCopy: [],
    flag:false
}

btns.addEventListener('click', () => {
    addElement()
    render()
})

sortBtn.addEventListener('click', () => {
   if(!state.flag){
          state.arrCopy = [...state.arr]
          sortOf()
          state.flag = true
   } else{
          state.arr = [...state.arrCopy]
          state.flag = false

   }
  render()
  console.log(state)
})

function sortOf() {
  state.arr.sort((a, b) => {
    if(a.val > b.val)
      return 1
    return -1  
  })
}

function deleteHandler(id){    // удаление поля в массиве
    state.arr.splice(id, 1)
}

function addElement(){   // добавление поля в массиве
    state.arr.push({val: input.value, id: state.id++})
}

function render() {  // отрисовка на основании состояния
    let div = document.createElement('div')
    state.arr.forEach((elem, index) => {
        div.append(createNewBlock(elem.val, index))
    })
    mainDiv.innerHTML = ''
    mainDiv.append(div)
}

function createNewBlock(val, id) {       //создание поля
    const newBlock = document.createElement('div')
    const newInput = document.createElement('input')
    const newImg = document.createElement('div')
    newBlock.classList.add('task-block')
    newInput.classList.add('task-manage__input')
    newInput.value = val
    newImg.classList.add('task-manage__delite')
    newImg.classList.add('happy')

    newBlock.append(newInput)
    newBlock.append(newImg)

    addAnimateSmile(newImg, id)

    return newBlock
}

function addAnimateSmile(block, id) {       //удаление поля
    block.addEventListener('click', (event) => {
        console.log(event.target.style)
        if (event.target.style.backgroundImage === `url("images/mood_bad_black_24dp.svg")`) {
            event.target.style.backgroundImage = `url('images/mood_black_24dp.svg')`
        } else {
            event.target.style.backgroundImage = `url('images/mood_bad_black_24dp.svg')`
            deleteHandler(id)
            render()
        }
    })
}


addAnimateSmile(smiles[0])
