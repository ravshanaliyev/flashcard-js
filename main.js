const container = document.querySelector(".container");
const addQuestionCard = document.querySelector("#add-question-card");
const cardBtn = document.querySelector("#save-btn");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const errorMessage = document.querySelector("#error");
const addQuestion = document.querySelector("#add-flashcard");
const closeBtn = document.querySelector("#close-btn");
let editBool = false;

addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});
closeBtn.addEventListener("click", hideQuestion);
function hideQuestion() {
  container.classList.remove("hide");
  addQuestionCard.classList.add("hide");
  if (editBool) {
    editBool = false;
    submitQuestion();
  }
}
cardBtn.addEventListener("click", submitQuestion);
function submitQuestion() {
  editBool = false;
  tempQuestion = question.value.trim();
  tempAnswer = answer.value.trim();
  if (!tempQuestion || !tempAnswer) {
    errorMessage.classList.remove("hide");
  } else {
    container.classList.remove("hide");
    errorMessage.classList.add("hide");
    viewList();
    question.value = "";
    answer.value = "";
  }
}
function viewList() {
  let listCard = document.querySelector(".card-list-container");
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `<p class="question-div">${question.value}</p>`;
  let displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;

  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });
  div.appendChild(link);
  div.appendChild(displayAnswer);

  let buttonCons = document.createElement("div");
  buttonCons.classList.add("buttons-con");
  let editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonCons.appendChild(editButton);
  buttonCons.appendChild(deleteButton);
  //   disableButtons(false);
  div.appendChild(buttonCons);
  listCard.appendChild(div);
  hideQuestion();
}

const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement.parentElement;
  let parentQuestion = parentDiv.querySelector(".question-div").innerText;
  if (edit) {
    let parentAns = parentDiv.querySelector(".answer-div").innerText;
    answer.value = parentAns;
    question.value = parentQuestion;
    // disableButtons(true);
  }
  parentDiv.remove();
};

// const disableButtons = (value) => {
//   let editButtons = document.querySelector(".edit");
//   console.log(editButtons);
//     Array.from(editButtons).forEach((e) => {
//       e.disabled = value;
//     });
// };
