class Grades {
    add(name, course, grade) {
        this[Math.random()] = { name, course, grade };
    }

    update(id, name, course, grade) {
        this[id] = { name, course, grade };
    }

    remove(id) {
        delete this[id];
    }
}

const grades = new Grades();
grades.add("Ikhbayar Otgonbaasan", "CS572", "97");

module.exports = grades;
