// script.js

// Create
function createItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Read
function readItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Update
function updateItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Delete
function deleteItem(key) {
    localStorage.removeItem(key);
}

// Example Usage
createItem('user', { name: 'John', age: 30 });
console.log(readItem('user')); // { name: 'John', age: 30 }
updateItem('user', { name: 'John', age: 31 });
console.log(readItem('user')); // { name: 'John', age: 31 }
deleteItem('user');
console.log(readItem('user')); // null
