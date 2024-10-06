'use strict'

function onInit() {
    hideAns()
}

function onAsk(ev) {
    ev.preventDefault()
    hideAns()
    const elLoader = document.querySelector('.loader-box')
    elLoader.classList.remove('hide')

    const value = document.querySelector('.user-question').value
    if (value.length > 3 && value.endsWith('?')) {
            getAns(renderAns)
    }
    else console.log('Not valid question')
}

function renderAns(ans) {
    const elLoader = document.querySelector('.loader-box')
    elLoader.classList.add('hide')
    const elAns = document.querySelector('.answer h2')
    elAns.innerText = ans.answer
    const elImg = document.querySelector('.answer img')
    elImg.src = ans.image
    showAns()
}

function showAns() {
    const elAns = document.querySelector('.answer')
    elAns.classList.remove('hide')
    const elNoAns = document.querySelector('.answer-no')
    elNoAns.classList.remove('hide')
    const elDogImg = document.querySelector('.answer-no img')
    elDogImg.classList.remove('hide')
}

function hideAns() {
    const elAns = document.querySelector('.answer')
    elAns.classList.add('hide')
    const elLoader = document.querySelector('.loader-box')
    elLoader.classList.add('hide')
    const elJoke = document.querySelector('.answer-yes')
    elJoke.classList.add('hide')
    const elDogImg = document.querySelector('.answer-no')
    elDogImg.classList.add('hide')
}