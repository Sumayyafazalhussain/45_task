// Question 24;
// Answer;

// let name_1 : string ="sumayya"
// let name_2 : string ="sumayya fazal"
// let name_3 : string ="sumayya fazal hussain"

// if (name_1 == name_3){
//    console.log("names are not equal");
// } else{
//    console.log("names are not equal");  
// }

// if (name_1 != name_2){
//    console.log("names are equal");   
// }


// let age_1 :number = 18
// let age_2 : number = 20

// if (age_1 == 18){
//    console.log("eligible for vote");
// }

// if (age_1 != 20){
//    console.log("eligible for vote in older category");
// }

// if (age_1 <= age_2){  
//     console.log("younger");  
// }

// if (age_2 => age_1){
//    console.log("older");  
// }

// if (age_1 == 18 &&  age_2 == 20){
//    console.log("person is eligible for vote");
// }

// if (age_1 == 18 || age_2 != 20){
//    console.log("person is eligible not for vote");
// }

// let country : string [] =["pakistan", "india", "japan","china"]
//  if (country.includes("pakistan")){
    // console.log("pakistan is in country list")
    // }

    // if (!country.includes ("america")){
        // console.log("america is not includes in an array");
    // }


// Question 25 
// answer ;
//  let alien_color = "green"

//  if (alien_color =="green")
//     console.log(" you earn 5 points");

//  let alien_color : string = "red"
//    if (alien_color == "green")
//        console.log("no output");
        

//    Question 26 ;
//    Answer;
//    let alien_color = "green"
 
//    if (alien_color == "green"){
//     console.log("player just earned 5 points for shooting the alien")
//    }else{
//     console.log("player just earned 10 points")
//    }

//    let alien_color = "red"
//    if (alien_color == "green"){
//     console.log("player just earned 10 points for shooting the alien")
//    }else{
//    console.log("player just earned 10 points")
//   }


// Question 27;
// Answer;
//  let alien_color: string = "red"

//  if (alien_color == "green"){
//    console.log("5 points");
//  }else if (alien_color == "yellow") {
//    console.log("10 points");
//  }else{
//    console.log("15 points")
//  }

//  Question28
//  Answer
//  let  age : number = 15

//  if (age <2 ) {
//    console.log("you are a baby")
//  } else if (age < 4){
//    console.log("you are a toddler")
//  } else if (age < 13){
//  console.log("you are a kid")
//  } else if (age < 20){
//    console.log("you are a teenager")
//  } else if (age < 65){
//    console.log("you are adult");
//  } else {
//    console.log("you are older")
//  }
 

//  Question 29;
//  answer

//  let favorite_fruits : string [] =["kivi","orange","apples"]

//  if (favorite_fruits.includes("kivi")){
//    console.log("kivi")
//  }

//  if (favorite_fruits.includes("peach")){
//    console.log("peach")
//  }
 
//  if (favorite_fruits.includes("orange")){
//    console.log("you really like bananas")
//  }

//  if (favorite_fruits.includes("berry")){
//    console.log("you really like bananas")
//  }

//  Question 30
//  answer;
//  let users : string [] = ["eric", "admin","fatima", "daniel"]
//  for(let user of users){
//     if(user === "admin"){
//        console.log("hello admin, would you like to see a status report?");
//      }else{
//          console.log(`hello ${user}, thank you for logging in again`)
//            }
//     }

// question 31;
// Answer;
// let users : string []= ["eric","haseeb","ali","daniel","fatima"]

// if(users.length === 0){
//    console.log("we need to find some users!");
// }else{
//    for (let user of users){
//        if (user ==="admin"){
//            console.log("hello admin, would you like to see a status report?");
//        }else{
//            console.log(` Hello ${user}, thank you for logging in again`);
            
//     }
//     }
//     }

//    users = []
//    if (users.length === 0){
//     console.log("we need to find some users!")
//    }


//    Question 32;
//    Answer

//    let current_users : string[] = ["admin","eric","ali","hamza","fatima"]
//    let new_users : string[] = ["admin","fatima","danish","hammad","noor"]

//    let current_users_lower : string[] =current_users.map(user => user.toLowerCase())


//    for (let new_user of new_users) {
//     if (current_users_lower.includes (new_user.toLowerCase())) {
//        console.log(`sorry ${new_user}, that name is taken`)
//     } else {
//        console.log(`yes ${new_user}, is still in available list`)
//     }
// } 


// Question 33
// answer;
// let numbers : number [] =[1,2,3,4,5,6,7,8,9]

// for (let number of numbers) {

//    if (number === 1) {
//        console.log(`${number}st`) //1st
//     } else if (number  === 2) {
//        console.log(`${number}nd`) //2nd

//     }else if (number === 3) {
//        console.log(`${number}rd`)

//     } else { console.log(`${number}th`) //4th ,//5th, //6th, //7th,  //8th,  //9th
//     }
        
//     }

//     Question 34
//     Answer;

//     let favorite_pizza : string [] = ["pepproni","chicken","veg"]
 
//     for (let pizza of favorite_pizza) {
//        console.log(pizza)
//     }

//     console.log("\n")

//     for (let pizza of favorite_pizza) {
//        console.log(`i really like ${pizza} pizza!`)
//     }
//     console.log("\ni really love pizza")
    

//     Question 35
//     Answer;
//    let animals : string [] = ["cat", "lion","dog"]

//     for(let animal of animals) {
//        console.log(animal)        
//     }
//     console.log("\n")

//     for (let animal of animals){
//        console.log(` A ${animal} has a tail`)
//     }

//     console.log("\n all of these are great pets but i love cats more")
    

//     Question 36
//     Answer;

//     function makeShirt(size: string, text: string): void {
//        console.log(`you order a${size} shirt that says ${text}`);
//     }

//     makeShirt('large','"ilove typescript"')
//    makeShirt('medium','"i need a big shirt"')


//    Question 37
//    Answer;

//    function makeShirt(size: string, text: string): void {
//     console.log(` you have order a ${size}, shirt that says ${text}`);
//    }

//    makeShirt('small','i need a big shirt to wear')


// Question 38;
// Answer;

// function describe_city(city: string, country: string = 'pakistan'): void {
//    console.log(`${city} is in ${country}`);
// }

// describe_city('karachi')// default sentence
// describe_city('france','europe')
// describe_city('lahore','dubai')


//    Question 39
//    Answer;

//    function cityCountry(city: string, country: string): string {
//     return `${city}, ${country}`
//    }
//    let c1 =cityCountry('lahore','pakistan')
//    let c2 = cityCountry('tokyo','japan')
//    let c3 = cityCountry('paris','france')

//    console.log(c1)
//    console.log(c2)
//    console.log(c3)
   
// Question 40
// Answer;

// function makeAlbum (artist: string, title: string):{artist: string; title: string}  {
//    const dictionaries = {
//        artist:artist.charAt(0).toUpperCase() + artist.slice(1),
//        title: title.charAt(0).toUpperCase()+ title.slice(1)
//     };
//     return dictionaries;
// }
   
// let album = makeAlbum("ali","light")
// console.log(album)

// album = makeAlbum("bilal","parado")
// console.log(album)

// album = makeAlbum("hamza", 'behreen')
// console.log(album)


// Question 41;
// Answer;

// function show_magicians(magicians: string[]): void {

//    for (const magician of magicians) {
//        console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
//     }
// }

// const magician: string[] = ["ali","hamza","bilal"];
// show_magicians(magician)

// question 42 
// answer
// function make_great(magicians: string[]): void {
//    for (let i = 0; i < magicians.length; i ++) {
//        magicians[i] = magicians[i] + 'the great'
//     }
// }

// const magicians2: string[] = ["usman","ali","huzaifa"];
// make_great(magicians2)
// show_magicians(magicians2)

