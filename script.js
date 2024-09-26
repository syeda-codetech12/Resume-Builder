var _a;
// Function to read the uploaded image and display it.
function readURL(input) {
    var _a;
    var img = document.getElementById("userpic");
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () { return img.src = reader_1.result; };
        reader_1.readAsDataURL(file);
    }
}
// Function to validate form inputs
function ValidateForm() {
    // Getting form elements
    var profilepic = document.getElementById("profile-pic").files;
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // Education
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var grade = document.getElementById("grade").value;
    // Experience
    var duration = document.getElementById("duration").value;
    var position = document.getElementById("position").value;
    var company = document.getElementById("company").value;
    // Skills
    var skills = document.getElementById("skills").value;
    if (!profilepic || profilepic.length === 0 || !name || !title || !phone || !email || !school || !degree || !grade || !duration || !position || !company || !skills) {
        alert("Please fill out mandatory fields!");
        return false; //if validation fails
    }
    return true; //if validation passes
}
;
//Function to generate the resume
function GenerateResume() {
    // Getting all form fields
    var ResumeOutput = {
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        objective: document.getElementById("objective").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        startyear: document.getElementById("startyear").value,
        endyear: document.getElementById("endyear").value,
        socialHandles: document.getElementById("socialHandles").value,
        school: document.getElementById("school").value,
        degree: document.getElementById("degree").value,
        grade: document.getElementById("grade").value,
        skills: document.getElementById("skills").value,
        position: document.getElementById("position").value,
        company: document.getElementById("company").value,
        duration: document.getElementById("duration").value,
    };
    // Upadating resume fields with the entered data.
    document.getElementById("username").innerText = ResumeOutput.name;
    document.getElementById("usertitle").innerText = ResumeOutput.title;
    document.getElementById("userobjective").innerText = ResumeOutput.objective;
    // Contact Info Field of resume
    document.getElementById("userphoneNo").innerText = ResumeOutput.phone;
    document.getElementById("useremail").innerText = ResumeOutput.email;
    document.getElementById("usersocialhandles").innerText = ResumeOutput.socialHandles;
    // Education Field
    document.getElementById("userschool").innerText = ResumeOutput.school;
    document.getElementById("userdegree").innerText = ResumeOutput.degree;
    document.getElementById("usergrade").innerText = ResumeOutput.grade;
    document.getElementById("display-startdate").innerText = ResumeOutput.startyear;
    document.getElementById("display-enddate").innerText = ResumeOutput.endyear;
    // Skills field
    document.getElementById("userskills").innerText = ResumeOutput.skills;
    // Experience Field
    document.getElementById("userposition").innerText = ResumeOutput.position;
    document.getElementById("usercompany").innerText = ResumeOutput.company;
    document.getElementById("userduration").innerText = ResumeOutput.duration;
}
;
document.addEventListener('DOMContentLoaded', function () {
    var objectiveTextarea = document.getElementById('objective');
    var socialHandlesInput = document.getElementById('socialHandles');
    var objectiveSection = document.getElementById('objectiveSection');
    var userObjective = document.getElementById('userobjective');
    var socialHandlesSection = document.getElementById('socialhandlesSection');
    var userSocialHandles = document.getElementById('usersocialhandles');
    // Function to update sections based on input values
    function updateSections() {
        if (!objectiveTextarea || !socialHandlesInput || !objectiveSection || !userObjective || !socialHandlesSection || !userSocialHandles) {
            console.error('One or more elements are missing.');
            return;
        }
        var objectiveValue = objectiveTextarea.value.trim();
        var socialHandlesValue = socialHandlesInput.value.trim();
        // Update objective section visibility
        if (objectiveValue) {
            objectiveSection.style.display = 'block';
            userObjective.textContent = objectiveValue;
        }
        else {
            objectiveSection.style.display = 'none';
            userObjective.textContent = '';
        }
        // Update social handles section visibility
        if (socialHandlesValue) {
            socialHandlesSection.style.display = 'block';
            userSocialHandles.textContent = socialHandlesValue;
        }
        else {
            socialHandlesSection.style.display = 'none';
            userSocialHandles.textContent = '';
        }
    }
    // Initial call to set correct visibility on page load
    updateSections();
    // Listen for changes in the textarea and input fields
    if (objectiveTextarea) {
        objectiveTextarea.addEventListener('input', updateSections);
    }
    if (socialHandlesInput) {
        socialHandlesInput.addEventListener('input', updateSections);
    }
});
// function to handle form submission and scroll to resume section
(_a = document.getElementById("ResumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // If validation is successful, proceed with resume generation and scrolling
    if (ValidateForm()) {
        GenerateResume();
        // Scroll to the resume section
        var resumeHeading = document.getElementById("Resume-heading");
        if (resumeHeading) {
            resumeHeading.scrollIntoView({ behavior: "smooth" });
        }
        ;
    }
    ;
});
var downloadaspdf = document.getElementById("downloadaspdf");
downloadaspdf === null || downloadaspdf === void 0 ? void 0 : downloadaspdf.addEventListener('click', function () {
    window.print();
});
