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
closeBtn.addEventListener("click", (hideQuestion) => {
  container.classList.remove("hide");
  addQuestionCard.classList.add("hide");
  if (editBool) {
    editBool = false;
    submitQuestion();
  }
});
cardBtn.addEventListener("click", () => {
  editBool = false;
  tempQuestion = question.value.trim();
  tempAnswer = answer.value.trim();
  if (!tempQuestion || !tempAnswer) {
    errorMessage.classList.remove("hide");
  } else {
    container.classList.remove("hide");
    errorMessage.classList.add("hide");
    question.value = "";
    answer.value = "";
  }
});
