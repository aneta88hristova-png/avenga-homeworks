function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

const database = [];
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

function getFormValues() {
  return {
    firstName: document.getElementById("firstName").value.trim(), //trim tar bort onödiga mellanslag
    lastName: document.getElementById("lastName").value.trim(),
    age: document.getElementById("age").value,
    email: document.getElementById("email").value.trim(),
  };
}

function validateStudentData(firstName, lastName, age, email) {
  if (!firstName || !lastName) {
    alert("Please enter both first and last name");
    return false;
  }

  if (!lastName || /\d/.test(lastName)) {
    ///\d/ söker siffror
    alert("Last Name: Letters only, no numbers");
    return false;
  }
  if (!age || age < 1) {
    alert("Please enter a valid age");
    return false;
  }

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function createStudent(firstName, lastName, age, email) {
  return new Student(firstName, lastName, age, email);
}

function addStudentToDatabase(student) {
  database.push(student);
  console.log("Student added to database:", student);
  console.log("Total students:", database.length);
}

function clearForm() {
  studentForm.reset();
}

function createStudentListItem(student) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  ${student.firstName} ${student.lastName}<br>
  Age: ${student.age}<br>
  Email: ${student.email}
  `;
  return listItem;
}

function updateStudentList() {
  // Clear current list
  studentList.innerHTML = "";

  // Add each student to the list
  database.forEach((student) => {
    const listItem = createStudentListItem(student);
    studentList.appendChild(listItem);
  });

  console.log("Database updated:", database);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const { firstName, lastName, age, email } = getFormValues();

  if (!validateStudentData(firstName, lastName, age, email)) {
    return;
  }

  const student = createStudent(firstName, lastName, age, email);
  addStudentToDatabase(student);
  updateStudentList();
  clearForm();
}

function initializeEventListeners() {
  studentForm.addEventListener("submit", handleFormSubmit);
}

function initializeApp() {
  initializeEventListeners();
  console.log("Student Registry App initialized");
  console.log("Current database:", database);
}

initializeApp();
