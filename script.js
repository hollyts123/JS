const Academy = {
    students: [],
    addStudent: function (group, name) {
        let groupExists = false;
        if (Academy.students.length === 0) {
            Academy.students.push({ group: group, groupStudents: [name] });
            console.log(`Group ${group} created and student ${name} added successfully!`);
        } else {
            for (let student of Academy.students) {
                if (student.group === group) {
                    student.groupStudents.push(name);
                    groupExists = true;
                    console.log(`Student ${name} added successfully in group ${group}!`)
                }
            }
            if (!groupExists) {
                Academy.students.push({ group: group, groupStudents: [name] });
                console.log(`Group ${group} created and student ${name} added successfully!`);
            }
        }
    },
    removeStudent: function (group, name) {
        let groupExists = false;
        for (let i = 0; i < Academy.students.length; i++) {
            if (Academy.students[i].group === group) {
                groupExists = true;
                for (let j = 0; j < Academy.students[i].groupStudents.length; j++) {
                    if (Academy.students[i].groupStudents[j] === name) {
                        Academy.students[i].groupStudents.splice(j, 1);
                        console.log(`Student ${name} removed from group ${group} successfully!`)
                    } else {
                        console.log(`There's no student with the name ${name} in group ${group}!`);
                    }
                }
            }

        }
        if (!groupExists) {
            console.log(`Group ${group} doesn't exist!`);
        }
    },
    getStudents: function (group, name) {
        let groupExists = false;
        let studentExist = false;
        for (item of Academy.students) {
            if (item.group === group) {
                groupExists = true;
                if (groupExists && item.groupStudents.includes(name)) {
                    studentExist = true;
                    let studentIndex = item.groupStudents.indexOf(name);
                    console.log(`Student ${name} is in group ${group} and is at number ${studentIndex + 1} in the list`);
                }
            }
        }

        if (!groupExists) {
            console.log(`Group ${group} doesn't exist!`);
        } else if (!studentExist) {
            console.log(`There's no student with the name ${name} in group ${group}!`);
        }
    },

    getStudent: function (group, index) {
        let groupExists = false;
        for (let item of Academy.students) {
            if (item.group === group) {
                groupExists = true;
                if (index >= 0 && index < item.groupStudents.length) {
                    console.log(`The index ${index} corresponds to the student ${item.groupStudents[index]} in the group ${group}`);
                } else {
                    console.log(`There's no students with the index ${index} in this group`);
                }
            }
        }
        if (!groupExists) {
            console.log(`Group ${group} doesn't exist!`);
        }
    }
}
