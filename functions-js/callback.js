function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const f1 = function (callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

const f2 = function (callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

const f3 = function (callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// callback hell
f1(function() {
    f2(function() {
        f3(function() {
            console.log('complete');
        });
    });
});

