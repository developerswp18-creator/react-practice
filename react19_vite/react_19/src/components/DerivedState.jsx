export const DerivedState = () => {
   const users = [
      { id: 1, name: "Alice Johnson", age: 28 }, 
      { id: 2, name: "Alice houmor", age: 30 }, 
      { id: 3, name: "Alice Johnson", age: 28 } 
    ];

    const user = users;
    const userdata = users.length;
    const average = (users.reduce((accum, curElem) => accum + curElem.age, 0) / userdata).toFixed(1);

    return (
        <>
        <h1>Users</h1>
        <ul>
            {users.map((curElem) => (
                <li key= {curElem.id}>
                   {curElem.name} - {curElem.age} years old
                </li>
        ))}
        </ul>
        <h3>total users: {userdata} </h3>
        <h1>Average Age: {average} </h1>
        </>
    );
}
