"use strict";const moodChoose=document.querySelector(".mood__control--choose"),moodUpdate=document.querySelector(".mood__control--update"),moodFace=document.querySelector(".mood__face"),body=document.querySelector(".body");function getRandomNumber(e){return Math.ceil(Math.random()*e)}function isEven(e){return e%2==0}function updateMoodFace(){moodFace.innerHTML=moodChoose.value}function updateColorTheme(){const e=getRandomNumber(100);console.log(e),isEven(e)?(body.classList.remove("theme-green"),body.classList.add("theme-yellow")):(body.classList.add("theme-green"),body.classList.remove("theme-yellow"))}function handleUpdateClick(e){e.preventDefault(),updateMoodFace(),updateColorTheme()}moodUpdate.addEventListener("click",handleUpdateClick);