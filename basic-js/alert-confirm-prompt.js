setTimeout(() => {
    alert('Test alert');
}, 1000);

setTimeout(() => {
    let response = confirm('Test confirm');
    console.log(response);
}, 10000);

setTimeout(() => {
    let response = prompt('Test promp');
    console.log(response);
}, 20000);