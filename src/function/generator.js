function* generatorFunction(){
    yield 'Hello World'
    yield 'Generator function'
    return 'Return from funciton'
}

const func = generatorFunction()


for (const object of func) {
    console.log(object);
}