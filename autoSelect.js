function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].dataset.batchId == obj) {
            return i;
        }
    }
    return -1;
}

function autoSelect(tasks) {
    var toDo;
    toDo = contains(tasks, 1206);             // FURNITURE REVIEW
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

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
