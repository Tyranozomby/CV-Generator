let numberOfSkill = 0;
let numberOfProject = 0;
let numberOfEducation = 0;
let numberOfExperience = 0;
let numberOfLanguage = 0;
let numberOfInterest = 0;
let numberOfMore = 0;

const maxSkill = 8;
const maxProject = 10;
const maxEducation = 5;
const maxExperience = 5;
const maxLanguage = 4;
const maxInterest = 5;
const maxMore = 5;

// ADD NEW

function addNewSkill() {
    const newSkill = document.createElement('div');
    newSkill.id = "skill" + numberOfSkill;
    newSkill.className = "m-3 form-group";
    newSkill.innerHTML = "" +
        "<div class='form-floating'>" +
        "   <input class='form-control' id='skillName" + numberOfSkill + "' name='skillName" + numberOfSkill + "' type='text' placeholder=' '>" +
        "   <label for='skillName" + numberOfSkill + "'>Name</label>" +
        "</div>" +
        "<div class='ms-2' id='rating" + numberOfSkill + "'>" +
        "   <i class='fa fa-star' value='1' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "   <i class='fa fa-star' value='2' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "   <i class='fa fa-star' value='3' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "   <i class='fa fa-star' value='4' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "   <i class='fa fa-star' value='5' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "   <span class='ms-2' id='skillText" + numberOfSkill + "'>None</span>" +
        "</div>" +
        "<label for='skillValue" + numberOfSkill + "' hidden></label>" +
        "<input id='skillValue" + numberOfSkill + "' name='skillValue" + numberOfSkill + "' type='text' value='0' hidden>";

    const div = document.getElementById("allSkills");
    div.appendChild(newSkill);

    numberOfSkill++;
    if (numberOfSkill > 1) {
        document.getElementById("deleteSkillButton").disabled = false;
    }
    if (numberOfSkill === maxSkill) {
        document.getElementById("addSkillButton").disabled = true;
    }
}

function addNewProject() {
    const newProject = document.createElement('div');
    newProject.id = "project" + numberOfProject;
    newProject.className = "m-3 form-group";
    newProject.innerHTML = "" +
        "<div class='form-floating mb-1'>" +
        "   <input class='form-control' id='projectName" + numberOfProject + "' name='projectName" + numberOfProject + "' type='text' placeholder=' '>" +
        "   <label for='projectName" + numberOfProject + "'>Name</label>" +
        "</div>" +
        "<div>" +
        "   <label for='projectText" + numberOfProject + "' hidden></label>" +
        "   <textarea class='form-control' id='projectText" + numberOfProject + "' name='projectText" + numberOfProject + "' rows='6' placeholder='Project informations'></textarea>" +
        "</div>";

    const div = document.getElementById("allProjects");
    div.appendChild(newProject);

    numberOfProject++;
    if (numberOfProject > 1) {
        document.getElementById("deleteProjectButton").disabled = false;
    }
    if (numberOfProject === maxProject) {
        document.getElementById("addProjectButton").disabled = true;
    }
}

function addNewEducation() {
    let date = new Date();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    const newEducation = document.createElement('div');
    newEducation.id = "education" + numberOfEducation;
    newEducation.className = "m-3 form-group";
    newEducation.innerHTML = "" +
        "<div class='d-flex justify-content-center'>" +
        "   <div class='pull-left me-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' id='educationSchool" + numberOfEducation + "' name='educationSchool" + numberOfEducation + "' placeholder=' ' type='text'>" +
        "           <label for='educationSchool" + numberOfEducation + "'>School</label>" +
        "       </div>" +
        "   </div>" +
        "   <div class='pull-right ms-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' id='educationDiploma" + numberOfEducation + "' name='educationDiploma" + numberOfEducation + "' placeholder=' ' type='text'>" +
        "           <label for='educationDiploma" + numberOfEducation + "'>Diploma</label>" +
        "       </div>" +
        "   </div>" +
        "</div>" +
        "<div class='d-inline-block w-100'>" +
        "   <div class='text-center pull-left w-48'>" +
        "       <label class='form-text' for='educationStart" + numberOfEducation + "'>From</label>" +
        "       <input class='form-control' id='educationStart" + numberOfEducation + "' name='educationStart" + numberOfEducation + "' type='month' value='" + year + "-" + month + "'>" +
        "   </div>" +
        "   <div class='text-center pull-right w-48'>" +
        "       <label class='form-text' for='educationEnd" + numberOfEducation + "'>To</label>" +
        "       <input class='form-control' id='educationEnd" + numberOfEducation + "' name='educationEnd" + numberOfEducation + "' type='month' value='" + year + "-" + month + "'>" +
        "   </div>" +
        "</div>" +
        "<label for='educationText" + numberOfEducation + "' hidden></label>" +
        "<textarea class='form-control mt-1' id='educationText" + numberOfEducation + "' name='educationText" + numberOfEducation + "'  rows='7' placeholder='Description'></textarea>";

    const div = document.getElementById("allEducations");
    div.appendChild(newEducation);

    numberOfEducation++;
    if (numberOfEducation > 1) {
        document.getElementById("deleteEducationButton").disabled = false;
    }
    if (numberOfEducation === maxEducation) {
        document.getElementById("addEducationButton").disabled = true;
    }
}

function addNewExperience() {
    let date = new Date();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    const newExperience = document.createElement('div');
    newExperience.id = "experience" + numberOfExperience;
    newExperience.className = "m-3 form-group";
    newExperience.innerHTML = "" +
        "<div class='d-flex justify-content-center'>" +
        "   <div class='pull-left me-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' id='experienceCompany" + numberOfExperience + "' name='experienceCompany" + numberOfExperience + "' placeholder=' ' type='text'>" +
        "           <label for='experienceCompany" + numberOfExperience + "'>Company</label>" +
        "       </div>" +
        "   </div>" +
        "   <div class='pull-right ms-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' id='experiencePosition" + numberOfExperience + "' name='experiencePosition" + numberOfExperience + "' placeholder=' ' type='text'>" +
        "           <label for='experiencePosition" + numberOfExperience + "'>Position</label>" +
        "       </div>" +
        "   </div>" +
        "</div>" +
        "<div class='d-inline-block w-100'>" +
        "   <div class='text-center pull-left w-48'>" +
        "       <label class='form-text' for='experienceStart" + numberOfExperience + "'>From</label>" +
        "       <input class='form-control' id='experienceStart" + numberOfExperience + "' name='experienceStart" + numberOfExperience + "' type='month' value='" + year + "-" + month + "'>" +
        "   </div>" +
        "   <div class='text-center pull-right w-48'>" +
        "       <label class='form-text' for='experienceEnd" + numberOfExperience + "'>To</label>" +
        "       <input class='form-control' id='experienceEnd" + numberOfExperience + "' name='experienceEnd" + numberOfExperience + "' type='month' value='" + year + "-" + month + "'>" +
        "   </div>" +
        "</div>" +
        "<label for='experienceText" + numberOfExperience + "' hidden></label>" +
        "<textarea class='form-control mt-1' id='experienceText" + numberOfExperience + "' name='experienceText" + numberOfExperience + "'  rows='7' placeholder='Description'></textarea>";

    const div = document.getElementById("allExperiences");
    div.appendChild(newExperience);

    numberOfExperience++;
    if (numberOfExperience > 1) {
        document.getElementById("deleteExperienceButton").disabled = false;
    }
    if (numberOfExperience === maxExperience) {
        document.getElementById("addExperienceButton").disabled = true;
    }
}

function addNewLanguage() {
    const newLanguage = document.createElement('div');
    newLanguage.id = "language" + numberOfLanguage;
    newLanguage.className = "m-3 form-group";
    newLanguage.innerHTML = "" +
        "<div class='form-floating mb-1'>" +
        "   <input class='form-control' id='languageName" + numberOfLanguage + "' name='languageName" + numberOfLanguage + "' type='text' placeholder=' '>" +
        "   <label for='languageName" + numberOfLanguage + "'>Language</label>" +
        "</div>" +
        "<div class='form-floating'>" +
        "   <input class='form-control' id='languageText" + numberOfLanguage + "' name='languageText" + numberOfLanguage + "' type='text' placeholder=' '>" +
        "   <label for='languageText" + numberOfLanguage + "'>Proficiency</label>" +
        "</div>";

    const div = document.getElementById("allLanguages");
    div.appendChild(newLanguage);

    numberOfLanguage++;
    if (numberOfLanguage > 1) {
        document.getElementById("deleteLanguageButton").disabled = false;
    }
    if (numberOfLanguage === maxLanguage) {
        document.getElementById("addLanguageButton").disabled = true;
    }
}

function addNewInterest() {
    const newInterest = document.createElement('div');
    newInterest.id = "interest" + numberOfInterest;
    newInterest.className = "m-3 form-group";
    newInterest.innerHTML = "" +
        "<div class='form-floating mb-1'>" +
        "   <input class='form-control' type='text' id='interestCategory" + numberOfInterest + "' name='interestCategory" + numberOfInterest + "' placeholder=' '>" +
        "   <label for='interestCategory" + numberOfInterest + "'>Category</label>" +
        "</div>" +
        "<div>" +
        "   <label for='interestList" + numberOfInterest + "' hidden></label>" +
        "   <textarea class='form-control' type='text' id='interestList" + numberOfInterest + "' name='interestList" + numberOfInterest + "' rows='7' placeholder='One interest per line'></textarea>" +
        "</div>";

    const div = document.getElementById("allInterests");
    div.appendChild(newInterest);

    numberOfInterest++;
    if (numberOfInterest > 1) {
        document.getElementById("deleteInterestButton").disabled = false;
    }
    if (numberOfInterest === maxInterest) {
        document.getElementById("addInterestButton").disabled = true;
    }
}

function addNewMore() {
    const newMore = document.createElement("div");
    newMore.id = "more" + numberOfMore;
    newMore.className = "m-3 form-group";
    newMore.innerHTML = "" +
        "<div class='form-floating mb-2'>" +
        "   <input class='form-control' type='text' id='moreCategory" + numberOfMore + "' name='moreCategory" + numberOfMore + "' placeholder=' '>" +
        "   <label for='moreCategory" + numberOfMore + "'>Category</label>" +
        "</div>" +
        "<div class='d-flex justify-content-center'>" +
        "   <div class='pull-left me-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' type='text' id='moreTitle" + numberOfMore + "' name='moreTitle" + numberOfMore + "' placeholder=' '>" +
        "           <label for='moreTitle" + numberOfMore + "'>Title</label>" +
        "       </div>" +
        "   </div>" +
        "   <div class='pull-right ms-3'>" +
        "       <div class='form-floating'>" +
        "           <input class='form-control' type='text' id='moreSubtitle" + numberOfMore + "' name='moreSubtitle" + numberOfMore + "' placeholder=' '>" +
        "           <label for='moreSubtitle" + numberOfMore + "'>Subtitle</label>" +
        "       </div>" +
        "   </div>" +
        "</div>" +
        "<div class='d-inline-block w-100'>" +
        "   <div class='text-center pull-left w-48'>" +
        "       <label class='form-text' for='moreStart" + numberOfMore + "'>From</label>" +
        "       <input class='form-control' id='moreStart" + numberOfMore + "' name='moreStart" + numberOfMore + "' type='month'>" +
        "   </div>" +
        "   <div class='text-center pull-right w-48'>" +
        "       <label class='form-text' for='moreEnd" + numberOfMore + "'>To</label>" +
        "       <input class='form-control' id='moreEnd" + numberOfMore + "' name='moreEnd" + numberOfMore + "' type='month'>" +
        "   </div>" +
        "</div>" +
        "<label for='moreInfo" + numberOfMore + "' hidden></label>" +
        "<textarea class='form-control mt-1' type='text' id='moreInfo" + numberOfMore + "' name='moreInfo" + numberOfMore + "' rows='7' placeholder='Information'></textarea>";

    const div = document.getElementById("allMore");
    div.appendChild(newMore);

    numberOfMore++;
    if (numberOfMore > 1) {
        document.getElementById("deleteMoreButton").disabled = false;
    }
    if (numberOfMore === maxMore) {
        document.getElementById("addMoreButton").disabled = true;
    }
}

// DELETE LAST

function deleteLastSkill() {
    if (numberOfSkill > 1) {
        const last = document.getElementById("skill" + (numberOfSkill - 1));
        const div = document.getElementById("allSkills");
        div.removeChild(last);
        numberOfSkill--;
    }
    if (numberOfSkill === 1) {
        document.getElementById("deleteSkillButton").disabled = true;
    }
    if (numberOfSkill === maxSkill - 1) {
        document.getElementById("addSkillButton").disabled = false;
    }
}

function deleteLastProject() {
    if (numberOfProject > 1) {
        const last = document.getElementById("project" + (numberOfProject - 1));
        const div = document.getElementById("allProjects");
        div.removeChild(last);
        numberOfProject--;
    }
    if (numberOfProject === 1) {
        document.getElementById("deleteProjectButton").disabled = true;
    }
    if (numberOfProject === maxProject - 1) {
        document.getElementById("addProjectButton").disabled = false;
    }
}

function deleteLastEducation() {
    if (numberOfEducation > 1) {
        const last = document.getElementById("education" + (numberOfEducation - 1));
        const div = document.getElementById("allEducations");
        div.removeChild(last);
        numberOfEducation--;
    }
    if (numberOfEducation === 1) {
        document.getElementById("deleteEducationButton").disabled = true;
    }
    if (numberOfEducation === maxEducation - 1) {
        document.getElementById("addEducationButton").disabled = false;
    }
}

function deleteLastExperience() {
    if (numberOfExperience > 1) {
        const last = document.getElementById("experience" + (numberOfExperience - 1));
        const div = document.getElementById("allExperiences");
        div.removeChild(last);
        numberOfExperience--;
    }
    if (numberOfExperience === 1) {
        document.getElementById("deleteExperienceButton").disabled = true;
    }
    if (numberOfExperience === maxExperience - 1) {
        document.getElementById("addExperienceButton").disabled = false;
    }
}

function deleteLastLanguage() {
    if (numberOfLanguage > 1) {
        const last = document.getElementById("language" + (numberOfLanguage - 1));
        const div = document.getElementById("allLanguages");
        div.removeChild(last);
        numberOfLanguage--;
    }
    if (numberOfLanguage === 1) {
        document.getElementById("deleteLanguageButton").disabled = true;
    }
    if (numberOfLanguage === maxLanguage - 1) {
        document.getElementById("addLanguageButton").disabled = false;
    }
}

function deleteLastInterest() {
    if (numberOfInterest > 1) {
        const last = document.getElementById("interest" + (numberOfInterest - 1));
        const div = document.getElementById("allInterests");
        div.removeChild(last);
        numberOfInterest--;
    }
    if (numberOfInterest === 1) {
        document.getElementById("deleteInterestButton").disabled = true;
    }
    if (numberOfInterest === maxInterest - 1) {
        document.getElementById("addInterestButton").disabled = false;
    }
}

function deleteLastMore() {
    if (numberOfMore > 1) {
        const last = document.getElementById("more" + (numberOfMore - 1));
        const div = document.getElementById("allMore");
        div.removeChild(last);
        numberOfMore--;
    }
    if (numberOfMore === 1) {
        document.getElementById("deleteMoreButton").disabled = true;
    }
    if (numberOfMore === maxMore - 1) {
        document.getElementById("addMoreButton").disabled = false;
    }
}


// STAR RATING

function clickStar(star) {
    const parent = star.parentElement;
    const skillNumber = parent.id.split("rating")[1];

    const level = ["Beginner", "Novice", "Advanced", "Experienced", "Expert"];
    let ratingCount = 0;
    const ratingValue = parseInt(star.getAttribute("value"));

    for (let i = 0; i < ratingValue; i++) {
        parent.children[i].classList.add("clicked");
        for (let j = ratingValue; j <= 4; j++) {
            if (parent.children[j].classList.contains("clicked")) {
                parent.children[j].classList.remove("clicked");
            }
        }
    }
    for (let i = 0; i < parent.children.length - 1; i++) {
        if (parent.children[i].classList.contains("clicked")) {
            ratingCount++;
        }
    }
    document.getElementById("skillValue" + skillNumber).value = ratingCount;
    const temp = document.getElementById("skillText" + skillNumber);
    temp.textContent = level[ratingCount - 1];
}

function hoverStar(star) {
    const parent = star.parentElement;
    const skillNumber = parent.id.split("rating")[1];
    const clicked = parseInt(document.getElementById("skillValue" + skillNumber).value);
    const hovered = parseInt(star.getAttribute("value"));

    for (let i = clicked; i < hovered; i++) {
        parent.children[i].classList.add("hovered");
    }
}

function leaveStar(star) {
    const children = star.parentElement.children;

    for (let i = 0; i < children.length - 1; i++) {
        if (children[i].classList.contains("hovered")) {
            children[i].classList.remove("hovered");
        }
    }
}


// SHOW PICTURE

function showImage() {
    const [file] = document.getElementById("picture-input").files;

    if (file) {
        const extension = file.name.split('.').pop();
        const supported = ["png", "jpeg", "jpg", "pjpeg", "pjp", "jfif"];
        const maxSize = 1048576; // 1 Mb
        let valid = false;

        for (let i = 0; i < supported.length; i++) {
            if (extension === supported[i]) {
                valid = true;
            }
        }

        if (valid) {
            if (file.size < maxSize) {
                document.getElementById('imagePreview').src = URL.createObjectURL(file);
                document.getElementById("cancel-button").disabled = false;
            } else {
                alert("This file is too big, more than 1Mb");
            }
        } else {
            alert("This file extension is not supported (" + extension + ")");
            document.getElementById('imagePreview').src = "";
        }
    } else {
        document.getElementById('imagePreview').src = "images/no_pic.jpg";
    }
}

// REMOVE PICTURE

function removeImage() {
    document.getElementById('imagePreview').src = "images/no_pic.jpg";
    document.getElementById("cancel-button").disabled = true;
}

// STORE PICTURE

function savePicture() {
    const bannerImage = document.getElementById('imagePreview');
    if (!bannerImage.src.endsWith("images/no_pic.jpg")) {
        const imgData = getBase64Image(bannerImage);
        sessionStorage.setItem("imgData", imgData);
    } else {
        sessionStorage.removeItem("imgData")
    }
}

function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// EXECUTE STARTING FUNCTIONS

function start() {
    addNewSkill();
    addNewProject();
    addNewEducation();
    addNewExperience();
    addNewLanguage();
    addNewInterest();
    addNewMore();
}

// ALERT
function close_alert() {
    document.getElementById("close-button").parentNode.remove();
}