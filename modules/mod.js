function countLength(text){
    console.log(text.length);
}
function logFirst(text){
    let output = '';
    for (let i = 0; i < text.length; i++) {
        output += text[0];
    }
    console.log(output);
}
function logLast(text){
    console.log(text.at(-1));
}

module.exports = {
    countLength, 
    logFirst,
    logLast,

}