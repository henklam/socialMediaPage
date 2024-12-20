async function getComment(i) {
    let thing;
    const resource = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(resource => resource.json())
    .then(json => thing = json);
    return thing[i].body;
}

async function getUser(i) {
    let thing;
    const resource = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(resource => resource.json())
    .then(json => thing = json);
    return thing[i].username;
}

async function getAddress(i) {
    let thing;
    const resource = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(resource => resource.json())
    .then(json => thing = json);
    return thing[i].address;
}

async function getImage() {
    const resource = await fetch('https://unsplash.it/1920/1080?random');
    const blob = await resource.blob();
    return blob;
}

async function loadUser(i) {
    const image = await getImage(i);
    document.getElementById("image" + i).src = URL.createObjectURL(image);
    const username = await getUser(i);
    document.getElementById("username" + i).innerHTML = "Username: " + username;
    const comment = await getComment(i);
    document.getElementById("comment" + i).innerHTML = "Comment: " + comment;
    const address = await getAddress(i);
    document.getElementById("address" + i).innerHTML = "Address: " + address.street + ", " + address.suite + ", " + address.city + ", " + address.zipcode + ", Latitude: " + address.geo.lat + ", Longitude: " + address.geo.lng;
}


for(let i = 1; i < 10; i++) {
    loadUser(i);
}