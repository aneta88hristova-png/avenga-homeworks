let reminders = [];

const reminderForm = document.getElementById("reminderForm");
const titleInput = document.getElementById("title");
const priorityInput = document.getElementById("priority");
const colorInput = document.getElementById("color");
const descriptionInput = document.getElementById("description");
const showBtn = document.getElementById("showBtn");
const remindersContainer = document.getElementById("remindersContainer");

reminderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const reminder = {
    title: titleInput.value.trim(),
    priority: priorityInput.value,
    color: colorInput.value,
    description: descriptionInput.value.trim(),
  };

  if (!reminder.title) {
    alert("Please enter a title");
    return;
  }

  if (!reminder.priority) {
    alert("Please select a priority");
    return;
  }

  reminders.push(reminder);

  reminderForm.reset();
  colorInput.value = "#000000";
//ColorInput бара посебно ресетирање бидејќи .reset() не работи со него
  console.log("Reminder added:", reminder);
});

function showAllReminders() {
  remindersContainer.innerHTML = "";

  if (reminders.length === 0) {
    remindersContainer.innerHTML = "<p>No reminders added yet.</p>";
    return;
  }

  const table = document.createElement("table");
  table.setAttribute("border", "1");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Title", "Priority", "Description"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  reminders.forEach((reminder) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = reminder.title;
    titleSpan.style.color = reminder.color;
    titleCell.appendChild(titleSpan);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = reminder.priority;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = reminder.description;

    row.appendChild(titleCell);
    row.appendChild(priorityCell);
    row.appendChild(descriptionCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  remindersContainer.appendChild(table);
}

showBtn.addEventListener("click", showAllReminders);
