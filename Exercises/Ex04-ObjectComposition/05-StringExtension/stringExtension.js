(function () {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };
    
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };
    
    String.prototype.isEmpty = function () {
        return this == "";
    };
    
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        
        if (n < 4) {
            return '.'.repeat(n);
        }
        
        let result = this.slice(0, n - 2);
        
        let lastSpace = result.lastIndexOf(" ");
        
        if (lastSpace !== -1) {
            result = result.slice(0, lastSpace) + "...";
        }else{
            result += "...";
        }
        
        return result;
    };
    
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})();

function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };
    
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };
    
    String.prototype.isEmpty = function () {
        return this == "";
    };
    
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        
        if (n < 4) {
            return '.'.repeat(n);
        }
        
        let result = this.slice(0, n - 2);
        
        let lastSpace = result.lastIndexOf(" ");
        
        if (lastSpace !== -1) {
            result = result.slice(0, lastSpace) + "...";
        }else{
            result += "...";
        }
        
        return result;
    };
    
    let test = 'the quick brown fox jumps over the lazy dog';
    console.log(test.truncate(6));
}

solve();