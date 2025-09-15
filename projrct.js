  document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("Form");
  const resultLink = document.getElementById("result");
  const resultContainer = document.getElementById("resultContainer");
  const resultContent = document.getElementById("resultContent");

  // ذخیره اطلاعات در localStorage هنگام ارسال فرم
 form.addEventListener('submit', function(event) {
     event.preventDefault();
                
   if (validateForm()) {
// ذخیره اطلاعات در localStorage
 const formData = {
   fullName: document.getElementById("FullName").value,
   age: document.getElementById("Age").value,
   job: document.getElementById("Job").value,
   friends: document.getElementById("Friends").value,
   certificateStatus: document.getElementById("CertificateStatus").value,
   retirementAge: document.getElementById("RetirementAge").value };
                    
 localStorage.setItem("userData", JSON.stringify(formData));
                    
 // نمایش نتیجه
  showResults(formData); } });
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

