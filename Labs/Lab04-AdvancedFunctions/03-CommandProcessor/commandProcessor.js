function solve(input) {
    let commandProcessor = (function () {
        let result = "";
        return {
            "append": (str) => {result += str},
            "removeStart": (num) => result = result.slice(num),
            "removeEnd": (num) => result = result.slice(0, result.length - num),
            "print": () => console.log(result)
    }
    }());
    
    for (let comm of input){
        let [command, item] = comm.split(' ');
        commandProcessor[command](item);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);