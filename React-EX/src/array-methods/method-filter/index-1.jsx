

export default function FilterMethod01 () {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ];


      const DeleteAnUser = users.filter(user => user.id !==2);


      console.log(DeleteAnUser);
}