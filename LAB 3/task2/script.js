document.getElementById("add-btn").addEventListener("click", addTask);
document.getElementById("new-task").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">🗑️</button>
  `;



  taskList.appendChild(li);
  taskInput.value = "";  



  li.querySelector(".task-checkbox").addEventListener("change", function() {
    li.classList.toggle("completed", this.checked);
  });

  li.querySelector(".delete-btn").addEventListener("click", function() {
    taskList.removeChild(li);
  });
}