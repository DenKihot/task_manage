let btns = document.querySelectorAll(".task-manage__button")
let roof = document.querySelector(".task-manage__rooftop")
let smiles = document.querySelectorAll(".task-manage__delite")

btns[0].addEventListener('click', () => {
  setTimeout(() => {
    btns[0].style.display = 'none';
    btns[1].style.display = 'block';  
    roof.style.background = 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)';
  }, 200);  

})

btns[1].addEventListener('click', () => {
  setTimeout(() => {
    btns[1].style.display = 'none';
    btns[0].style.display = 'block';  
    roof.style.background = "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)";
  }, 200);
})

smiles[0].addEventListener('click', () => {
  
  smiles[0].style.display = 'none';
  smiles[1].style.display = 'block';  

})
smiles[1].addEventListener('click', () => {
  
  smiles[1].style.display = 'none';
  smiles[0].style.display = 'block';  

})
