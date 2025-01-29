


export default function FilterMethod () {
    const users = [
        { id: 1, name: 'Alice', age: 22 },
        { id: 2, name: 'Bob', age: 17 },
        { id: 3, name: 'Charlie', age: 19 }
      ];

// Remove all users under 18

const adults = users.filter(user => user.age >=18)



    return console.log(adults)
}