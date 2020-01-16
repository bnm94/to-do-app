const taskListContainerNode = document.querySelector(".tasks");

const taskState = {
  list: []
};

function addTask(task) {
  const taskId = new Date().getTime();
  taskState.list.push({ id: taskId, ...task });
  drawTaskList();
}

function drawTaskList() {
  const taskListNode = document.createElement("div");
  taskState.list.forEach(task => {
    taskListNode.appendChild(drawTaskItem(task));
  });
  taskListContainerNode.appendChild(taskListNode);
}

function drawTaskStatus(status) {
  const imgNode = document.createElement("img");
  const statuText = status ? "on" : "off";
  imgNode.src = `./images/status_${statuText}.svg`;
  imgNode.setAttribute("alt", "task status");
  return imgNode;
}

function drawTaskItem(task) {
  const taskNode = document.createElement("div");
  taskNode.className = "task-item";
  const taskTopicNode = document.createElement("div");
  taskTopicNode.className = "task-item__topic";
  taskTopicNode.appendChild(drawTaskStatus(task.status));
  const topicText = document.createElement("span");
  topicText.innerText = task.topic;
  taskTopicNode.appendChild(topicText);
  taskNode.appendChild(taskTopicNode);

  const taskDateNode = document.createElement("div");
  taskDateNode.className = "task-item__date";
  taskDateNode.innerHTML = `${task.date} • ${task.time}`;
  taskNode.appendChild(taskDateNode);
  return taskNode;
}

function drawDeleteBtn(){
    const deleteBtn = document.createElement('button');
    deleteBtn.className = ('task-item__btn-delete');
    const deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', '../img/')
}