function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);

    alert("Student registration successful!");

    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Please enter email and password.");
    }
}

function createClass(event) {
    event.preventDefault();

    const className = document.getElementById("className").value;
    const teacher = document.getElementById("teacher").value;

    localStorage.setItem("className", className);
    localStorage.setItem("teacher", teacher);

    alert("Virtual class created successfully!");

    window.location.href = "live-class.html";
}

function postQuestion(event) {
    event.preventDefault();

    const question = document.getElementById("question").value;

    if (question) {
        const questions = JSON.parse(
            localStorage.getItem("questions") || "[]"
        );

        questions.push(question);

        localStorage.setItem(
            "questions",
            JSON.stringify(questions)
        );

        document.getElementById("question").value = "";

        displayQuestions();
    }
}

function displayQuestions() {
    const questionList = document.getElementById("questionList");

    if (!questionList) {
        return;
    }

    const questions = JSON.parse(
        localStorage.getItem("questions") || "[]"
    );

    questionList.innerHTML = "";

    questions.forEach(function(question, index) {
        questionList.innerHTML += `
            <div class="class-box">
                <strong>Question ${index + 1}</strong>
                <p>${question}</p>
                <p><strong>Teacher Reply:</strong> Pending</p>
            </div>
        `;
    });
}

window.onload = displayQuestions;