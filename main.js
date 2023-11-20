const displayFormBtn = document.querySelector("#displayFormBtn");
const modal = document.querySelector(".modal-bg");
const formContainer = document.querySelector(".form-container");
const taskForm = document.querySelector("#taskForm");
const errorContainer = document.querySelector("#errorContainer");
const errorMsg = document.querySelector("#errorMsg");
const tasks = document.querySelector("#tasks");

const titleInput = document.getElementById('titleInput');
const dateInput = document.getElementById('dateInput');
const textarea = document.getElementById('textarea');

const emptyList = document.querySelector(".wrapper-container");




// Modal popup
let showModal = () => {
    modal.classList.remove("hide")
    emptyList.classList.remove("show")
}
let closeModal = () => {
    modal.classList.add("hide")
}

modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target === formContainer) {
        closeModal();
    }
})

errorContainer.style.display = "none"


// Form validation
let formValidation = (e) => {
    if (titleInput.value === "") {
        errorContainer.style.display = "flex"
        errorMsg.textContent = "Please enter a Task Title!"
        setTimeout(() => {
            errorContainer.style.display = "none"
        }, 3000)

    }
    else if (dateInput.value === "") {
        errorContainer.style.display = "flex"
        errorMsg.textContent = "Please select a Due Date of the new task!"
        setTimeout(() => {
            errorContainer.style.display = "none"
        }, 3000)
    }
    else if (textarea.value === "") {
        errorContainer.style.display = "flex"
        errorMsg.textContent = "Please describe this new task you wish to complete!"
        setTimeout(() => {
            errorContainer.style.display = "none"
        }, 3000)
    }
    else {
        // return true;
        // closeModal();
        // alert("success")
        acceptData();
    }

}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation();
})

let data = {};

let acceptData = () => {
    data["title"] = titleInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;

    console.log(data);

    createTask();
    closeModal();
    checkEmptyTaskItems();
}

let createTask = () => {
    tasks.innerHTML +=
        `<div class="task-box">
        <div class="task-info">
            <h3 class="task-title">${data.title}</h3>
            <p class="task-date">${data.date}</p>
            <p class="task-description">${data.description}</p>
        </div>

        <div class="action-btns">
            <button onclick="completeTask(this)" class="completedBtn btn-flex">
                <span class="material-symbols-outlined">check</span>
            </button>
            <button onclick="deleteTask(this)" class="deleteBtn btn-flex">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    </div>
    `

    resetForm();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();

    checkEmptyTaskItems();
}

let completeTask = (e) => {
    e.parentElement.parentElement.classList.add("disable");
    // const completedBtn = document.querySelectorAll(".completedBtn")
    // completedBtn.forEach((btn) =>{
    //     btn.classList.add("disable")
    // })

    checkEmptyTaskItems();

}


let resetForm = () => {
    titleInput.value = ""
    dateInput.value = ""
    textarea.value = ""
}

let checkEmptyTaskItems = ()=>{
        if (tasks.childElementCount === 0) {
            console.log("Task items is empty");
            emptyList.classList.add("show")
        } else {
            console.log("Task items is not empty");
            emptyList.classList.remove("show")
        }
}


