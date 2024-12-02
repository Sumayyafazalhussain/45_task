// Question 13;
//your own Array;Think of your favorite mode of transport, such as a motor cycle or a car , and make alist that store several examples. sue your list to print a series of statement about these items, such as "i would like to own a Honda motorcycle."
//answer;
//let transportationMode = ["Toyota Corolla","Land Cruiser Parado", "Revoloution"];
//transportationMode.forEach((Mode) =>
//    console.log(`I would like to buy a ${Mode}`)
//);
//console.log(`but ${transportationMode[2]} is my dream car`);
// Question 14;
///Guest List: If you could invite anyone , Living or deaceased , to dinner. then use your list to print a message to each person, inviting them to dinner;
//Anwer;
//let Guestlist =["Zainab" ,"Samavia","tameen"];
//Guestlist.forEach((invitation)=>
//    console.log(`"Hey ${invitation},I'd love to catch up over dinner!
//how about joining for a delicious meal this "saturdayat "8 pm" at "KFC".
//);
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
//let moreGuestList =["zainab","samavia","tameen"];
//console.log(`${moreGuestList[1]} is not coming`)
//moreGuestList.splice(1,1,"muskan")
//console.log(`Hey everyone ! we found a bigger dinner table. lets call some more guests`);
//moreGuestList.unshift("javeria")
//moreGuestList.push("Amna")
//let middleGuest : number=Math.floor(moreGuestList.length/2);
//moreGuestList.splice(middleGuest,0,"maryam");
//moreGuestList.forEach((moreinvitation)=>
//  console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
//How about joining me for a delicious meal this "saturday" at "8 pm" at "kFC".let me know if you arefree!`)
// );
// Question 17;
// Answer;
//let shrinkGuestList =["zainab","samavia","tameen"];
//console.log(`${shrinkGuestList[1]} is not coming`)
//shrinkGuestList.splice(1,1,"misba")
//console.log(`Hey everyone! We found a bigger dinner table. lets call some more guest`);
//shrinkGuestList.unshift("javeria")
//shrinkGuestList.push("aliza")
//let middGuest: number=Math.floor(shrinkGuestList.length/2);
//shrinkGuestList.splice(middGuest,0,"maryam");
//shrinkGuestList.forEach((shirinkinvitation)=>
//  console.log(`hey ${shirinkinvitation}, I'd love to catch up over dinner!
//How about joining me for a delicious meal this "saturday" at "8 pm" at "KFC".let me know if you are free!`)
//);
//console.log("Unfortunely, new dinner table wont arrive in time for the dinner, so I've space for only 2 guest for dinner ");
//while(shrinkGuestList.length > 2){
//  let removeGuest=shrinkGuestList.pop();
//console.log(`Sorry, ${removeGuest} I cant invite you for dinner`);
//}
//console.log("invitation to the last 2 guest");
//shrinkGuestList.forEach(guestinvitation =>console.log(`Hey ${guestinvitation}you are still invited for dinner`));
//shrinkGuestList.pop();
//shrinkGuestList.pop();
// Question 18;
// Answer;
//let places : string [] = ['lahore','Karachi','Dubai','America']
//console.log('original:' + places);
//print your array in alphabetical order without modifying the actual list
//console.log('copy '+[...places].sort());
//show that your array is still in its original order by printing it.
//console.log('original:'+ places);
//print your array in reverse alphabetical order without changing the order of the original list
//console.log('copy '+[...places].sort().reverse());
//show that ypur array is still in its originalby printing it again
//console.log('copy '+[...places].sort().reverse());
//reverse order of your list. print the array to show that its order has changed.
//console.log('original :'+ places.sort());
// reverse the order of your list again. print the list to show it is back to its original order
//console.log('original :' + places.sort().reverse());
// Question 19;
//Answer
//let shrinkGuestList :string []= ['zainab','samavia','tameen'];
//for(let i=0; i<shrinkGuestList.length; i++){
//  console.log('respected my dear friends'+ shrinkGuestList[i]+',\nWe invited you on dinner');
//}
//export{shrinkGuestList}
// Question 20;
// Answer ;
//let languages : string []=['english','urdu','arabic','chinese']
//console.log("list of languages:");
//for(let top of languages){
//   console.log(top);
//}
// Question 21;
// Answer;
//interface item{
//  name:string
//  price:number
//}
// create two object;
//const casualwear: item ={
//  name:'jordan',
//price:22000
//}
//const dailywear: item ={
//  name:'Nike',
//price:33300
//}
//console.log(`casualwear: ${casualwear.name}, price:$${casualwear.price}`);
//console.log(`dailywear: ${dailywear.name}, price: $${dailywear.price}`);
//Question 22;
// Answer;
//let array:(string | number) [] = ['samiyah','habiba',3,5,8,"ayesha"]
//console.log(array[5]);
// Question 23
// Answer 
// let car :string = 'subaru';
//console.log("is car =='subaru? I predict True.");
//console.log(car =='subaru');
// Question 24
//Answer;
// using string;
console.log("is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true (case insensitive)
console.log("is car === 'subaru'? I predict false ");
console.log(car === 'subaru');
