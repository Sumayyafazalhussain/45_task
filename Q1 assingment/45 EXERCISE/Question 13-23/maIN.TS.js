// Question 13;
///your own Array;Think of your favorite mode of transport, such as a motor cycle or a car , and make alist that store several examples. sue your list to print a series of statement about these items, such as "i would like to own a Honda motorcycle."
//answer;
//let transportationMode = ["Toyota Corolla","Land Cruiser Parado", "Revoloution"];
//transportationMode.forEach((Mode) =>
//    console.log(`I would like to buy a ${Mode}`)
//);
//console.log(`but ${transportationMode[2]} is my dream car`);
// Question 14;
///Guest List: If you could invite anyone , Living or deaceased , to dinner. then use your list to print a message to each person, inviting them to dinner;
//Anwer;
let Guestlist =["Zainab" ,"Samavia","tameen"];
Guestlist.forEach((invitation)=>
    console.log(`"Hey ${invitation},I'd love to catch up over dinner!
how about joining for a delicious meal this "saturdayat "8 pm" at "KFC".let me know if you are free`)
);
// Question 15;
// changing Guest List: you just heared that one of your guest can't make the dinner, So you need to send out the new set of invitation. you'll have to think of the guest can't make it. 
// * start with your program form exercise 14. add a print statement at the and of your program stating the name of the guest who can't make it.
// *  Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
// * print a second set of invitation message, one for each person who is still in your list.
// Answer;
//let newGuestList =["zainab","ssamavia","tameen"];
//console.log(`${newGuestList[1]} is not coming`)
//newGuestList.splice(1,1,"muskan")
//newGuestList.forEach((newinvitation)=>
//console.log(`"Hey ${newinvitation}, I'd love to catch up over dinner!
//How about joining me for a delicious meal this "Saturday" at "8 pm" at "KFC".let me know if you are free! `)
//);
// Question 16;
// Answer ;
var moreGuestList = ["zainab", "samavia", "tameen"];
console.log("".concat(moreGuestList[1], " is not coming"));
moreGuestList.splice(1, 1, "muskan");
console.log("Hey everyone ! we found a bigger dinner table. lets call some more guests");
moreGuestList.unshift("javeria");
moreGuestList.push("Amna");
var middleGuest = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(middleGuest, 0, "maryam");
moreGuestList.forEach(function (moreinvitation) {
    return console.log("Hey ".concat(moreinvitation, ", I'd love to catch up over dinner!\nHow about joining me for a delicious meal this \"saturday\" at \"8 pm\" at \"kFC\".let me know if you arefree!"));
});
