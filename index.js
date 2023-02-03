// Code your solutions in this file
function writeCards(array, event){
    let newMessage = [];
    for(let i=0;i<array.length;i++){
        newMessage.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newMessage;
}
function countDown(number){
    let i=0;
    while (i <= number){
        console.log(number-i);
        i++;
    }

}