"use strict";

// Modal pop up
const doneBtn = document.querySelector(".done-btn");
const Modal1 = document.getElementById("modal-1");
const Modal2 = document.getElementById("modal-2");
const Overlay = document.querySelector(".overlay");

const openModal = function () {
  Modal1.classList.remove("hidden1");
  Overlay.classList.remove("hidden1");
  };

doneBtn.addEventListener("click", openModal);

// Modal options
const Options = [
  {
    a: "SPAIN",
    b: "FRANCE",
    c: "GERMANY",
    d: "GREECE",
    No: "1",
  },
  {
    a: "FRANCE",
    b: "SPAIN",
    c: "ITALY",
    d: "BRAZIL",
    No: "2",
  },
  {
    a: "SPAIN",
    b: "ITALY",
    c: "GERMANY",
    d: "AUSTRALIA",
    No: "3",
  },
];

const One = document.querySelector(".one");
const Two = document.querySelector(".two");
const Three = document.querySelector(".three");
const Four = document.querySelector(".four");

let modalPage = 0; //indexNo
let str = "";
let width = 0;

// load modal with options 
const loadNewModal = function () {
  const Places = Options[modalPage]; //Options[0] = object - 1

  One.innerHTML = Places.a;
  Two.innerHTML = Places.b;
  Three.innerHTML = Places.c;
  Four.innerHTML = Places.d;
};

loadNewModal();

//modal close by overlay
const closeModal = function () {
  modalPage = 0;
  str = "";
  loadNewModal()
  width = 0;
  progressBar.style.width =  width + "%";
  Modal1.classList.add("hidden1");
  Overlay.classList.add("hidden1");
};

Overlay.addEventListener("click", closeModal);

const modalBtns = document.querySelectorAll(".modal-btn");
const progressBar = document.querySelector(".progress-bar")
const favPlace = document.querySelector(".fav-place");
const placeName = document.querySelector(".place-name");
const playAgain = document.querySelector(".play-again")

// console.log(modalBtns);

const btnNext = () => {
  modalPage++;
  width += 33.3
  progressBar.style.width =  width + "%";
  loadNewModal();
}

const btnEnd = () => {
  doneBtn.disabled = true;
  Modal1.classList.add("hidden1");
  Modal2.classList.remove("hidden2");
  Overlay.classList.add("hidden1");

  if (str === "123") {
    favPlace.src = "Image/Spain.png";
    placeName.innerHTML = `Spain is your favourite place!😃`;
  } else if (str === "12") {
    favPlace.src = "Image/France.png";
    placeName.innerHTML = `France is your favourite place!😃`;
  } else if (str === "13") {
    favPlace.src = "Image/Germany.png";
    placeName.innerHTML = `Germany is your favourite place!😃`;
  } else if (str === "23") {
    favPlace.src = "Image/Italy.png";
    placeName.innerHTML = `Italy is your favourite place!😃`;
  } else if (str === "1") {
    favPlace.src = "Image/Greece.png";
    placeName.innerHTML = `Greece is your favourite place!😃`;
  } else if (str === "3") {
    favPlace.src = "Image/Australia.png";
    placeName.innerHTML = `Australia is your favourite place!😃`;
  } else if (str === "2") {
    favPlace.src = "Image/Brazil.png";
    placeName.innerHTML = `Brazil is your favourite place!😃`;
  } else if (str === "") {
    favPlace.src = "Image/Portugal.png";
    placeName.innerHTML = `Portugal is your favourite place!😃`;
  }
}

// buttons click
  modalBtns[0].addEventListener("click", () => {
    if (modalPage < Options.length - 1) {
       btnNext()
        str += "";

    } else { 
      str += "";
      btnEnd();
    }
  });

  modalBtns[1].addEventListener("click", () => {
    if (modalPage < Options.length - 1) {

      btnNext();
      str += Options[modalPage-1].No;

    } else {
        str += Options.length;
        btnEnd();
    }
  });


  // Play Again
playAgain.addEventListener("click",  () => {
  Modal2.classList.add("hidden2");
  doneBtn.disabled = false;
  modalPage = 0;
  str = "";
  loadNewModal()
  width = 0;
  progressBar.style.width =  width + "%";
})

  
  
