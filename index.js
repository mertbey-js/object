



module.exports = function (object){
    if(!object) throw TypeError('Objecy is not defined')
    var arr = []
    for(var i in object) {
        arr.push(object[i])
    }
    return arr
}