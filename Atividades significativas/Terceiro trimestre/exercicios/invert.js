function revString (str){
    var invertida = ""
    for (var c = str.length - 1; c >= 0; c--){
        invertida += str[c]
    }
    return invertida
}
var rev = revString("Javascript")
console.log(rev)