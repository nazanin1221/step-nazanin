  //1
  document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("Form");
  const resultLink = document.getElementById("result");
  const resultContainer = document.getElementById("resultContainer");
  const resultContent = document.getElementById("resultContent");

  // 2
  // ذخیره اطلاعات در localStorage هنگام ارسال فرم
 form.addEventListener("submit", function(event) {
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
 // اعتبارسنجی فرم
function validateForm() {
  let isValid = true;
                
 // اعتبارسنجی نام
const fullName = document.getElementById("FullName");
   if (!fullName.value.trim()) {
        document.getElementById("FullNameError").style.display = "block";
        isValid = false;
    } else {
    document.getElementById("FullNameError").style.display = "none"; }
                
// اعتبارسنجی سن
const age = document.getElementById("Age");
  if (!age.value || age.value <= 0) {
      document.getElementById("AgeError").style.display = "block";
      isValid = false;
   } else {
     document.getElementById("AgeError").style.display ="none"; }
                
 // اعتبارسنجی شغل
 const job = document.getElementById("Job");
  if (!job.value.trim()) {
    document.getElementById("JobError").style.display = "block";
    isValid = false;
   } else {
      document.getElementById("JobError").style.display = "none";  }
                
 // اعتبارسنجی تعداد دوستان
const friends = document.getElementById("Friends");
   if (!friends.value.trim()) {
      document.getElementById("FriendsError").style.display = "block";
      isValid = false;
      } else {
       document.getElementById("FriendsError").style.display = "none"; }
                
// اعتبارسنجی وضعیت مدرک
const certificate = document.getElementById("CertificateStatus");
 if (!certificate.value.trim() || (certificate.value.toLowerCase() !== "بله" && certificate.value.toLowerCase() !== "خیر")) {
       document.getElementById("CertificateError").style.display = "block";
       isValid = false;
     } else {
       document.getElementById("CertificateError").style.display = "none"; }
                
// اعتبارسنجی سن بازنشستگی
const retirement = document.getElementById("RetirementAge");
  if (!retirement.value || retirement.value <= 0) {
    document.getElementById("RetirementError").style.display = "block";
    isValid = false;
   } else {
    document.getElementById("RetirementError").style.display = "none";}
                
   return isValid; }

// نمایش نتایج
 function showResults(formData) {
 // محاسبه سن بر اساس سال جاری
const currentYear = new Date().getFullYear();
const birthYear = currentYear - parseInt(formData.age);
                
// محاسبه سال های باقی مانده تا بازنشستگی
const yearsToRetirement = parseInt(formData.retirementAge) - parseInt(formData.age);
                
 // ایجاد محتوای نتایج
let content = `
 <p><strong>نام کامل:</strong> ${formData.fullName}</p>
 <p><strong>سن:</strong> ${formData.age} سال</p>
 <p><strong>شغل:</strong> ${formData.job}</p>
 <p><strong>تعداد دوستان:</strong> ${formData.friends} نفر</p>
 <p><strong>وضعیت مدرک:</strong> ${formData.certificateStatus}</p>
 <p><strong>سن بازنشستگی:</strong> ${formData.retirementAge} سال</p>
  <hr>
 <p><strong>سال تولد:</strong> ${birthYear}</p>
 <p><strong>سال های باقی مانده تا بازنشستگی:</strong> ${yearsToRetirement} سال</p> `;
                
 // اضافه کردن اطلاعات از کد JavaScript شما
const friendsArray = ["neda", "nedaa", "nedaaa"];
friendsArray.push("mozhde");
                
content += `
  <hr>
   <p><strong>دوستان نمونه:</strong> ${friendsArray.join(', ')}</p>
   <p><strong>اولین دوست:</strong> ${friendsArray[0]}</p>
   <p><strong>آخرین دوست:</strong> ${friendsArray[friendsArray.length - 1]}</p>
  `;
                
// اضافه کردن اطلاعات شیء person
content += `
   <hr>
   <p><strong>نمونه اطلاعات شیء:</strong> shayan is a 22 years old and he has 
   3 friends, and he has a driver's license.</p>
 `;
                
resultContent.innerHTML = content;
 resultContainer.style.display = "block";
                
 // اسکرول به بخش نتایج
 resultContainer.scrollIntoView({ behavior: "smooth" }); }});

