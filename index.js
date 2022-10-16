function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function bats() {
        return "Hello"
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return "Hi!"
    }
}