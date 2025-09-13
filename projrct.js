const firstname = "zahra";
const birthday = 2005;
const job = "danceinstructor";
const currentyear = 2025;
const age = currentyear - birthday ;
console.log(age);
//2
function birthdayy(birthday,currentyear){
   return currentyear - birthday ;
}
function retirementt(birthday,firstname){
    const agee = birthdayy(birthday,currentyear)
     const retirement = 65 - agee
return `${firstname} retires in ${retirement}`
}
console.log( retirementt(2005,"zahra"));
//3
const friends = ["neda","nedaa","nedaaa"];
friends.push("mozhde");
console.log(friends[0]);
console.log(friends[friends.length-1]); 
//4
const person = {
    firstname2: "shayan",
    lastname: "shirdeli",
    birthday2: 2003,
    friends2: ["amir", "mehdi", "hojat"],
    hasdriverslicense: true,
  
    calcAge: function () {
      return 2025 - this.birthday2;
    },
  
    getsummary: function () {
      const licensestatus = this.hasdriverslicense
        ? "and he has a driver's license"
        : "and he does not have a driver's license";
  
      return `${this.firstname2} is a ${this.calcAge()} years old and he has 
      ${this.friends2.length} friends, ${licensestatus}.`;
    }
  }
  
  console.log(person.getsummary());
  //5
  const name3 = "zari";
  const age3 = 20 ;
  const job2 = "student";
  const hasdriverslicense2 = true;
  const friend3 = 5;
 function getinfo(name3,age3,job2,hasdriverslicense2,friend3){
let summer = `${name3} is a ${age3}year old ${job2} 
and he has ${friend3}friends.`;
if (hasdriverslicense2){
  summer += "and he has a drivers license. "
}
else {
  summer += "and he dose not have a drivers."
}
return summer;

  }

console.log(getinfo(name3,age3,job2,hasdriverslicense2,friend3));

