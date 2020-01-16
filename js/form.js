const addTodoNode = document.forms.addToDo;
const addBtn = document.getElementById("addBtn");
const showModalBtn = document.querySelector(".nav-btn");
const modalNode = document.querySelector(".modal-container");

showModalBtn.addEventListener("click", function() {
    modalNode.classList.add("modal-container--active");
});

addBtn.addEventListener("click", function() {
    const { topic, description, date} = addTodoNode;
    if (
        topic.value.trim() &&
        description.value.trim() &&
        date.value.trim()
    ) {
    addTask({
        topic: topic.value,
        description: description.value,
        date: date.value,
        status: false
    });
    topic.value = "";
    description.value = "";
    date.value = "";
    }
    modalNode.classList.remove("modal-container--active");
});
