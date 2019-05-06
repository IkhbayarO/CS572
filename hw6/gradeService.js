class gradeService {
    constructor() {
        this.grades = [];
    }

    add(grade) {
        const prevLength = this.grades.length;
        this.grades.push(grade);

        return (this.grades.length > prevLength) ? true : false;

    }

    getAll() {
        this.grades;
    }

    get(id) {
        let grade = {};
        this.grades.forEach(x => {
            if (x.id == id) grade = x;
        });
        return grade;
    }

    delete(id) {
        let delIndex = -1;
        this.grades.forEach((grade, index) => {
            if (grade.id == id) delIndex = index;
        })
        if (delIndex !== -1) {
            this.grades.splice(delIndex, 1);
            return true;
        }
        return false;
    }

    update(id, obj) {
        let isUpdated = false;
        this.grades.forEach((x, index) => {
            if (x.id == id) {
                this.grades[index] = obj;
                isUpdated = true;
            }
        });
        return isUpdated;
    }
}

module.exports = gradeService;