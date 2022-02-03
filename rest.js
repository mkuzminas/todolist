fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todoJson) => {
        console.log(todoJson)
    });