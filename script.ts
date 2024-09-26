// Interface for Resmue Details
interface ResumeDetails{
    name: string,
    title: string,
    objective: string,
    phone: string,
    email: string,
    socialHandles: string,
    school: string,
    startyear: string,
    endyear: string,
    degree: string,
    grade: string,
    skills: string,
    position: string,
    company: string,
    duration: string,
}


// Function to read the uploaded image and display it.
function readURL (input: HTMLInputElement) : void {
    const img = document.getElementById("userpic") as HTMLImageElement;
    const file = input.files?.[0];

    if(file) {
        const reader = new FileReader();
        reader.onload = () => img.src = reader.result as string;
        reader.readAsDataURL(file);
    }
}

// Function to validate form inputs
function ValidateForm() {
    // Getting form elements
    const profilepic = (document.getElementById("profile-pic") as HTMLInputElement).files;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    // Education
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const grade = (document.getElementById("grade") as HTMLInputElement).value;

    // Experience
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const position = (document.getElementById("position") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;

    // Skills
    const skills = (document.getElementById("skills") as HTMLInputElement).value;



    if(!profilepic || profilepic.length === 0 || !name || !title || !phone || !email || !school || !degree || !grade || !duration || !position || !company || !skills) {
        alert("Please fill out mandatory fields!");
        return false;         //if validation fails
    }

    return true;       //if validation passes

};



//Function to generate the resume
function GenerateResume(): void {

    // Getting all form fields

    const ResumeOutput : ResumeDetails = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        title: (document.getElementById("title") as HTMLInputElement).value,
        objective: (document.getElementById("objective") as HTMLTextAreaElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        startyear: (document.getElementById("startyear") as HTMLInputElement).value,
        endyear: (document.getElementById("endyear") as HTMLInputElement).value,
        socialHandles: (document.getElementById("socialHandles") as HTMLInputElement).value,
        school: (document.getElementById("school") as HTMLInputElement).value,
        degree: (document.getElementById("degree") as HTMLInputElement).value,
        grade: (document.getElementById("grade") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        position: (document.getElementById("position") as HTMLInputElement).value,
        company: (document.getElementById("company") as HTMLInputElement).value,
        duration: (document.getElementById("duration") as HTMLInputElement).value,
    };


// Upadating resume fields with the entered data.
(document.getElementById("username") as HTMLElement).innerText = ResumeOutput.name;
(document.getElementById("usertitle") as HTMLElement).innerText = ResumeOutput.title;
(document.getElementById("userobjective") as HTMLElement).innerText = ResumeOutput.objective;

// Contact Info Field of resume
(document.getElementById("userphoneNo") as HTMLElement).innerText = ResumeOutput.phone;
(document.getElementById("useremail") as HTMLElement).innerText = ResumeOutput.email;
(document.getElementById("usersocialhandles") as HTMLElement).innerText = ResumeOutput.socialHandles;

// Education Field
(document.getElementById("userschool") as HTMLElement).innerText = ResumeOutput.school;
(document.getElementById("userdegree") as HTMLElement).innerText = ResumeOutput.degree;
(document.getElementById("usergrade") as HTMLElement).innerText = ResumeOutput.grade;
(document.getElementById("display-startdate") as HTMLElement).innerText = ResumeOutput.startyear;
(document.getElementById("display-enddate") as HTMLElement).innerText = ResumeOutput.endyear;

// Skills field
(document.getElementById("userskills") as HTMLElement).innerText = ResumeOutput.skills;

// Experience Field
(document.getElementById("userposition") as HTMLElement).innerText = ResumeOutput.position;
(document.getElementById("usercompany") as HTMLElement).innerText = ResumeOutput.company;
(document.getElementById("userduration") as HTMLElement).innerText = ResumeOutput.duration;

};












document.addEventListener('DOMContentLoaded', function () {
    const objectiveTextarea = document.getElementById('objective') as HTMLTextAreaElement | null;
    const socialHandlesInput = document.getElementById('socialHandles') as HTMLInputElement | null;
    const objectiveSection = document.getElementById('objectiveSection') as HTMLElement | null;
    const userObjective = document.getElementById('userobjective') as HTMLElement | null;
    const socialHandlesSection = document.getElementById('socialhandlesSection') as HTMLElement | null;
    const userSocialHandles = document.getElementById('usersocialhandles') as HTMLElement | null;

    // Function to update sections based on input values
    function updateSections(): void {
        if (!objectiveTextarea || !socialHandlesInput || !objectiveSection || !userObjective || !socialHandlesSection || !userSocialHandles) {
            console.error('One or more elements are missing.');
            return;
        }

        const objectiveValue = objectiveTextarea.value.trim();
        const socialHandlesValue = socialHandlesInput.value.trim();

        // Update objective section visibility
        if (objectiveValue) {
            objectiveSection.style.display = 'block';
            userObjective.textContent = objectiveValue;
        } else {
            objectiveSection.style.display = 'none';
            userObjective.textContent = '';
        }

        // Update social handles section visibility
        if (socialHandlesValue) {
            socialHandlesSection.style.display = 'block';
            userSocialHandles.textContent = socialHandlesValue;
        } else {
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
document.getElementById("ResumeForm")?.addEventListener("submit", (event) => {
        event.preventDefault();       
    
    // If validation is successful, proceed with resume generation and scrolling
    if(ValidateForm()) {
    GenerateResume();

    // Scroll to the resume section
    const resumeHeading = document.getElementById("Resume-heading");
    if(resumeHeading) {
        resumeHeading.scrollIntoView({behavior: "smooth"});
       };
    };

});




const downloadaspdf = document.getElementById("downloadaspdf") as HTMLButtonElement;
downloadaspdf?.addEventListener('click', () => {
    window.print();
});