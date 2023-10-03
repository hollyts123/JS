const friends = {
    students: [],
    addStudent: function (name) {
        this.students.push({ name: name, friends: [] });
        console.log(`Students ${name} was added successfully!`);
    },
    addFriend: function (name, friendName) {
        let nameExists = false;
        let friendNameExists = false;
        for (let student of this.students) {
            if (student.name === name) {
                nameExists = true;
                console.log(`Name ${name} is on the list!`);
            }
        }
        if (!nameExists) {
            console.log(`Name ${name} is not on the list!`);
        }

        for (let studentFriend of this.students) {
            if (studentFriend.name === friendName) {
                friendNameExists = true;
                console.log(`Name ${friendName} is on the list!`);
            }
        }

        if (!friendNameExists) {
            console.log(`Name ${friendName} is not on the list!`);
        }

        for (student of this.students) {
            if (nameExists && friendNameExists && student.name === name) {
                student.friends.push(friendName);
                console.log(
                    `${friendName} was successfully added to ${name}'s friends`
                );
            }
        }
    },
    showFriends: function (name) {
        for (let item of this.students) {
            if (item.name === name) {
                console.log(item.friends);
            }
        }
    },
};

friends.addStudent("Danil");
friends.addStudent("Vasya");
console.log(friends);

friends.addFriend("Danil", "Vasya");
console.log(friends);

friends.showFriends("Danil");
