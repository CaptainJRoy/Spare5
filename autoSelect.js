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
    toDo = contains(tasks, 1223);             // Confirm hotel review categories
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1206);             // Review furniture items
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1204);             // Create boxes review
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1198);             // Category review
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1135);             // Review road marks
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 829);              // Sports review
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1183);              // Describe image
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1195);              // Categorize hotel reviews
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }

    toDo = contains(tasks, 1222);              // Categorize hotel reviews
    if(toDo != -1) {
        tasks[toDo].click();
        return;
    }
}
