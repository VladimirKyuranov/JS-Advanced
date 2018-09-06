function solve(input) {
    let processor = (function () {
        let arr = [];
        
        function add(str) {
            arr.push(str);
        }
        
        function remove(str) {
            arr = arr.filter(el => el !== str);
        }
        
        function print() {
            console.log(arr.join(","));
        }
        
        return { add, remove, print };
    })();
    
    for (let commandArgs of input) {
        let [command, str] = commandArgs.split(/ /);
        processor[command](str);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);