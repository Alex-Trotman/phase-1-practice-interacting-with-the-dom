const counterElement = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const togglePause = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const listElement = document.getElementById('list')



const likesList = document.getElementsByClassName('likes')
const commentsList = document.getElementById('list')

const commentInput = document.getElementById('comment-input')
const commentSubmitButton = document.getElementById('submit')

function refreshCount(){
    counterElement.innerHTML = count
}

let count = 0

function counter(){
    count++
    refreshCount()
}

function counterDown(){
    count--
    refreshCount()
}

let timer = setInterval(counter, 1000)

const likesObject = {}

plusButton.addEventListener('click',() => counter())
minusButton.addEventListener('click',() => counterDown())
heartButton.addEventListener('click', () => {
    if (!likesObject[count]){
        likesObject[count] = 1
        const ul = document.getElementsByClassName('likes')[0]
        const li = document.createElement('li')
        li.id = count
        li.innerHTML = `${count} has been liked ${likesObject[count]} time`
        ul.appendChild(li)
    } else {
        likesObject[count]++
        let updatedLi = document.getElementById(`${count}`)
        updatedLi.innerHTML = `${count} has been liked ${likesObject[count]} times`
    }
})

togglePause.addEventListener('click', () => {

    if(togglePause.textContent === " STOP "){
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        clearInterval(timer)
        togglePause.textContent = " RESUME "
    } else {
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
        timer = setInterval(counter, 1000)
        togglePause.textContent = " STOP "
    }
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)
    const currentInputValue = document.getElementById('comment-input').value
    console.log(currentInputValue)
    const div = listElement 
    const p = document.createElement('p')
    p.innerHTML = currentInputValue
    div.appendChild(p)
    let updatedP = document.getElementById('p')
})