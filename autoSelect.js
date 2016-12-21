function autoSelect() {
    var tasks = document.getElementsByClassName("task-item active");
    var toDo;
    toDo = contains(tasks, 1198);             // CATEGORY REVIEW
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1135);             // REVIEW ROAD MARKS
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 829);              // SPORTS REVIEW
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    //toDo = contains(tasks, 1183);              // DESCRIBE IMAGE
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }
}
