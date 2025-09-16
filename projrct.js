document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("userForm");
const resultContainer = document.getElementById("resultContainer");
const resultContent = document.getElementById("resultContent");
            
 // مخفی کردن همه پیامهای خطا در ابتدا
const errorElements = document.querySelectorAll('.error');
errorElements.forEach(error => {
 error.style.display = "none"; });

// ذخیره اطلاعات در localStorage هنگام ارسال فرم
form.addEventListener("submit", function(event) {
  event.preventDefault();
                
 if (validateForm()) {
// ذخیره اطلاعات در localStorage
const formData = {
fullName: document.getElementById("FullName").value,
age: document.getElementById("Age").value,
job: document.getElementById("Job").value,
friendsList: document.getElementById("FriendsList").value,
certificateStatus: document.getElementById("CertificateStatus").value,
retirementAge: document.getElementById("RetirementAge").value };
                    
 localStorage.setItem("userData", JSON.stringify(formData));
                    
 // نمایش نتیجه
  showResults(formData); }
    });

 // اعتبارسنجی فرم
 function validateForm() {
  let isValid = true;
                
// اعتبارسنجی نام
const fullName = document.getElementById("FullName");
 if (!fullName.value.trim()) {
    document.getElementById("FullNameError").style.display = "block";
   isValid = false;
       } else {
           document.getElementById("FullNameError").style.display = "none";}
                
// اعتبارسنجی سن
const age = document.getElementById("Age");
  if (!age.value || age.value < 1300 || age.value > 1400) {
  document.getElementById("AgeError").style.display = "block";
  isValid = false;
     } else {
        document.getElementById("AgeError").style.display = "none"; }
                
  // اعتبارسنجی شغل
  const job = document.getElementById("Job");
  if (!job.value.trim()) {
        document.getElementById("JobError").style.display = "block";
        isValid = false;
       } else {
          document.getElementById("JobError").style.display = "none"; }
                
 // اعتبارسنجی لیست دوستان
 const friendsList = document.getElementById("FriendsList");
 const friendsArray = friendsList.value.split(/[،,]+/).filter(friend => friend.trim() !== '');
                
if (friendsArray.length === 0) {
     document.getElementById("FriendsError").style.display = "block";
     isValid = false;
        } else {
    document.getElementById("FriendsError").style.display = "none";}
                
 // اعتبارسنجی وضعیت گواهینامه
 const certificate = document.getElementById("CertificateStatus");
 if (!certificate.value) {
   document.getElementById("CertificateError").style.display = "block";
   isValid = false;
      } else {
         document.getElementById("CertificateError").style.display = "none"; }
                
 // اعتبارسنجی سن بازنشستگی
const retirement = document.getElementById("RetirementAge");
    if (!retirement.value || retirement.value < 45 || retirement.value > 70) {
     document.getElementById("RetirementError").style.display = "block";
       isValid = false;
           } else {
               document.getElementById("RetirementError").style.display = "none"; }
                
    return isValid; }

 // نمایش نتایج
   function showResults(formData) {
  // محاسبه سن بر اساس سال جاری
const currentYear = new Date().getFullYear();
const solarCurrentYear = currentYear - 621; // تبدیل به سال شمسی
const solarBirthYear = parseInt(formData.age);
const age = solarCurrentYear - solarBirthYear;
                
 // محاسبه سال های باقی مانده تا بازنشستگی
   const yearsToRetirement = parseInt(formData.retirementAge) - age;
                
// تبدیل رشته دوستان به آرایه
 const friendsArray = formData.friendsList.split(/[،,]+/).map(friend => friend.trim()).filter(friend => friend !== '');
                
// ایجاد محتوای نتایج
let content = `
  <p><strong>نام کامل:</strong> ${formData.fullName}</p>
  <p><strong>سال تولد:</strong> ${formData.age} (${age} سال)</p>
  <p><strong>شغل:</strong> ${formData.job}</p>
  <p><strong>تعداد دوستان:</strong> ${friendsArray.length} نفر</p>
  <p><strong>وضعیت گواهینامه:</strong> ${formData.certificateStatus}</p>
  <p><strong>سن بازنشستگی:</strong> ${formData.retirementAge} سال</p>
  <hr>
  <p><strong>سال های باقی مانده تا بازنشستگی:</strong> ${yearsToRetirement} سال</p> `;
                
// اضافه کردن اطلاعات دوستان
  content += `
  <hr>
  <p><strong>لیست دوستان:</strong> ${friendsArray.join('، ')}</p>
  <p><strong>اولین دوست:</strong> ${friendsArray[0]}</p>
  <p><strong>آخرین دوست:</strong> ${friendsArray[friendsArray.length - 1]}</p>`;
                
// اضافه کردن اطلاعات شیء به صورت پویا
  const hasLicense = formData.certificateStatus === "بله";
  content += `
   <hr>
   <p><strong>نمونه اطلاعات شیء:</strong> ${formData.fullName} یک ${formData.job} ${age} ساله است و 
   ${friendsArray.length} دوست دارد (از جمله ${friendsArray[0]} و ${friendsArray[friendsArray.length - 1]})، و ${hasLicense ? "گواهینامه رانندگی دارد" : "گواهینامه رانندگی ندارد"}.</p>`;
                
  resultContent.innerHTML = content;
 resultContainer.style.display = "block";

// اسکرول به بخش نتایج
   resultContainer.scrollIntoView({ behavior: "smooth" });
     }
      });