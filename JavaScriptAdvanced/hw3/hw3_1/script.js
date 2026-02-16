document
  .getElementById("fetchDataBtn")
  .addEventListener("click", fetchAndAnalyzeData);

function fetchAndAnalyzeData() {
  const button = document.getElementById("fetchDataBtn");

  button.disabled = true;
  console.log(" Fetching student data...");

  fetch(
    "https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G2/Homeworks/students.json",
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      return response.json();
    })
    .then(function (students) {
      analyzeStudents(students);
    })
    .catch(function (error) {
      console.error(" An error occurred while fetching data:", error.message);
    })
    .finally(function () {
      button.disabled = false;
      console.log(" Analysis complete!");
    });
}

function analyzeStudents(students) {
  
  // 1. All students with an average grade higher than 3
  const highGradeStudents = students
    .filter((student) => student.averageGrade > 3)
    .map((s) => ({
      name: `${s.firstName} ${s.lastName}`,
      average: s.averageGrade,
    }));

  console.log(
    "1. All students with an average grade higher than 3:",
    highGradeStudents,
  );

  // 2. All female student names with an average grade of 5
  const femaleGrade5 = students
    .filter(
      (student) => student.gender === "Female" && student.averageGrade === 5,
    )
    .map((s) => `${s.firstName} ${s.lastName}`);

  console.log(
    "2. All female students with an average grade of 5:",
    femaleGrade5,
  );

  // 3. All male student full names who live in Skopje and are over 18 years old
  const maleSkopjeOver18 = students
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.city === "Skopje" &&
        student.age > 18,
    )
    .map((s) => `${s.firstName} ${s.lastName}`);

  console.log("3. All male students in Skopje over 18:", maleSkopjeOver18);

  // 4. The average grades of all female students over the age of 24
  const femaleOver24Grades = students
    .filter((s) => s.gender === "Female" && s.age > 24)
    .map((s) => ({
      name: `${s.firstName} ${s.lastName}`,
      average: s.averageGrade,
      age: s.age
    }));

  console.log(
    "4. The average grades of all female students over the age of 24",
    femaleOver24Grades,
  );

  // 5. All male students with a name starting with B and average grade over 2
  const maleStudentsWithB = students
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.firstName.startsWith("B") &&
        student.averageGrade > 2,
    )
    .map((s) => `${s.firstName} ${s.lastName}`);

  console.log(
    "5. Male students with name starting with B and average > 2:",
    maleStudentsWithB,
  );

  // 6. Student emails of all female students with age between 20 and 30 years, ordered ascending
  const femaleEmailsAge20to30 = students
    .filter((student) =>
      student.gender === "Female" && student.age >= 20 && student.age <= 30,
    )
    .map((student) => student.email)
    .sort((a, b) => a.localeCompare(b));

  console.log(
    "6. Female student emails (age 20-30) in ascending order:",
    femaleEmailsAge20to30,
  );

  // 7. Students full names of students above 40, ordered descending
  const studentsAbove40 = students
    .filter((student) => student.age > 40)
    .map((s) => `${s.firstName} ${s.lastName}`)
    .sort((a, b) => b.localeCompare(a));

  console.log("7. Students above 40 (descending order):", studentsAbove40);

  // 8. Count of students using google mail
  const googleMailCount = students
  .filter((student) =>
      student.email.includes("@gmail.com") ||
      student.email.includes("@googlemail.com"),
  ).length;

  console.log("8. Number of students using Google Mail:", googleMailCount);

  // 9. Average age of female students in Skopje
 const femaleSkopjeStudents = students
  .filter((student) => 
    student.gender === "Female" && 
    student.city === "Skopje")
  .map((s) => s.age);

  const averageAgeFemaleSkopje = 
  femaleSkopjeStudents.reduce((sum, age) => sum + age, 0) / 
  femaleSkopjeStudents.length;

  console.log("9. Average age of female students in Skopje:", averageAgeFemaleSkopje);}
