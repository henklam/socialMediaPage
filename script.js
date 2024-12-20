async function get() {
    let thing;
    const resource = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(resource => resource.json())
    .then(json => thing = json);
    console.log(thing);
}


get();