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
    const section = document.createElement('section');
    section.id = "skill" + numberOfSkill;
    section.innerHTML = "" +
        "<div class='container skill'>" +
        "   <label for='starSkill" + numberOfSkill + "'></label>" +
        "   <input class='starSkill' id='starSkill" + numberOfSkill + "' name='starSkill" + numberOfSkill + "' type='text' placeholder='Name'>" +
        "   <div class='rating' id='rating" + numberOfSkill + "'>" +
        "       <i class='fa fa-star' value='1' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "       <i class='fa fa-star' value='2' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "       <i class='fa fa-star' value='3' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "       <i class='fa fa-star' value='4' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "       <i class='fa fa-star' value='5' onclick='clickStar(this)' onmouseover='hoverStar(this)' onmouseleave='leaveStar(this)'></i>" +
        "       <span id='starText" + numberOfSkill + "'>None</span>" +
        "   </div>" +
        "   <label for='starValue" + numberOfSkill + "'></label>" +
        "   <input id='starValue" + numberOfSkill + "' name='starValue" + numberOfSkill + "' type='text' value='0' hidden>" +
        "</div>";

    const div = document.getElementById("skillDiv");
    div.insertBefore(section, document.getElementById("addSkillButton"));

    numberOfSkill++;
    if (numberOfSkill > 1) {
        document.getElementById("deleteSkillButton").disabled = false;
    }
    if (numberOfSkill === maxSkill) {
        document.getElementById("addSkillButton").disabled = true;
    }
}

function addNewProject() {
    const section = document.createElement('section');
    section.id = "project" + numberOfProject;
    section.innerHTML = "<label for='project" + numberOfProject + "'>Project name:</label>" +
        "                <input id='project" + numberOfProject + "' name='project" + numberOfProject + "' type='text' >" +
        "                <br>" +
        "                <label for='projectText" + numberOfProject + "'>Project infos:</label>" +
        "                <textarea id='projectText" + numberOfProject + "' name='projectText" + numberOfProject + "' ></textarea>";

    const div = document.getElementById("projectDiv");
    div.insertBefore(section, document.getElementById("addProjectButton"));

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
    const section = document.createElement('section');
    section.id = "education" + numberOfEducation;
    section.innerHTML = "<label for='educationSchool" + numberOfEducation + "'>School:</label>" +
        "                <input id='educationSchool" + numberOfEducation + "' name='educationSchool" + numberOfEducation + "' type='text'>" +
        "                <label for='educationDiploma" + numberOfEducation + "'>Diploma:</label>" +
        "                <input id='educationDiploma" + numberOfEducation + "' name='educationDiploma" + numberOfEducation + "' type='text'>" +
        "                <label for='educationStart" + numberOfEducation + "'>Start:</label>" +
        "                <input id='educationStart" + numberOfEducation + "' name='educationStart" + numberOfEducation + "' type='month' value='" + year + "-" + month + "'>" +
        "                <label for='educationEnd" + numberOfEducation + "'>End:</label>" +
        "                <input id='educationEnd" + numberOfEducation + "' name='educationEnd" + numberOfEducation + "' type='month' value='" + year + "-" + month + "'>" +
        "                <label for='educationText" + numberOfEducation + "'>Description:</label>" +
        "                <textarea id='educationText" + numberOfEducation + "' name='educationText" + numberOfEducation + "' ></textarea>";

    const div = document.getElementById("educationDiv");
    div.insertBefore(section, document.getElementById("addEducationButton"));

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
    const section = document.createElement('section');
    section.id = "experience" + numberOfExperience;
    section.innerHTML = "<label for='experienceCompany" + numberOfExperience + "'>Company:</label>" +
        "                <input id='experienceCompany" + numberOfExperience + "' name='experienceCompany" + numberOfExperience + "' type='text'>" +
        "                <label for='experiencePosition" + numberOfExperience + "'>Position:</label>" +
        "                <input id='experiencePosition" + numberOfExperience + "' name='experiencePosition" + numberOfExperience + "' type='text'>" +
        "                <label for='experienceStart" + numberOfExperience + "'>Start:</label>" +
        "                <input id='experienceStart" + numberOfExperience + "' name='experienceStart" + numberOfExperience + "' type='month' value='" + year + "-" + month + "'>" +
        "                <label for='experienceEnd" + numberOfExperience + "'>End:</label>" +
        "                <input id='experienceEnd" + numberOfExperience + "' name='experienceEnd" + numberOfExperience + "' type='month' value='" + year + "-" + month + "'>" +
        "                <label for='experienceText" + numberOfExperience + "'>Description:</label>" +
        "                <textarea id='experienceText" + numberOfExperience + "' name='experienceText" + numberOfExperience + "' ></textarea>";

    const div = document.getElementById("experienceDiv");
    div.insertBefore(section, document.getElementById("addExperienceButton"));

    numberOfExperience++;
    if (numberOfExperience > 1) {
        document.getElementById("deleteExperienceButton").disabled = false;
    }
    if (numberOfExperience === maxExperience) {
        document.getElementById("addExperienceButton").disabled = true;
    }
}

function addNewLanguage() {
    const section = document.createElement('section');
    section.id = "language" + numberOfLanguage;
    section.innerHTML = "<label for='language" + numberOfLanguage + "'>Language:</label>" +
        "                <input id='language" + numberOfLanguage + "' name='language" + numberOfLanguage + "' type='text' >" +
        "                <br>" +
        "                <label for='languageText" + numberOfLanguage + "'>Level:</label>" +
        "                <input id='languageText" + numberOfLanguage + "' name='languageText" + numberOfLanguage + "' type='text' >";

    const div = document.getElementById("languageDiv");
    div.insertBefore(section, document.getElementById("addLanguageButton"));

    numberOfLanguage++;
    if (numberOfLanguage > 1) {
        document.getElementById("deleteLanguageButton").disabled = false;
    }
    if (numberOfLanguage === maxLanguage) {
        document.getElementById("addLanguageButton").disabled = true;
    }
}

function addNewInterest() {
    const section = document.createElement('section');
    section.id = "interest" + numberOfInterest;
    section.innerHTML = "<label for='interestCategory" + numberOfInterest + "'>Interest Category:</label>" +
        "                <input type='text' id='interestCategory" + numberOfInterest + "' name='interestCategory" + numberOfInterest + "' >" +
        "                <br>" +
        "                <label for='interestList" + numberOfInterest + "'>Interests:</label>" +
        "                <textarea type='text' id='interestList" + numberOfInterest + "' name='interestList" + numberOfInterest + "' placeholder='One per line'></textarea>";

    const div = document.getElementById("interestDiv");
    div.insertBefore(section, document.getElementById("addInterestButton"));

    numberOfInterest++;
    if (numberOfInterest > 1) {
        document.getElementById("deleteInterestButton").disabled = false;
    }
    if (numberOfInterest === maxInterest) {
        document.getElementById("addInterestButton").disabled = true;
    }
}

function addNewMore() {
    const section = document.createElement("section");
    section.id = "more" + numberOfMore;
    section.innerHTML = "<label for='moreCategory" + numberOfMore + "'>Category:</label>" +
        "                <input type='text' id='moreCategory" + numberOfMore + "' name='moreCategory" + numberOfMore + "'>" +
        "                <label for='moreTitle" + numberOfMore + "'>Title:</label>" +
        "                <input type='text' id='moreTitle" + numberOfMore + "' name='moreTitle" + numberOfMore + "'>" +
        "                <label for='moreSubtitle" + numberOfMore + "'>Subtitle:</label>" +
        "                <input type='text' id='moreSubtitle" + numberOfMore + "' name='moreSubtitle" + numberOfMore + "'>" +
        "                <label for='moreStart" + numberOfMore + "'>Start:</label>" +
        "                <input id='moreStart" + numberOfMore + "' name='moreStart" + numberOfMore + "' type='month'>" +
        "                <label for='moreEnd" + numberOfMore + "'>End:</label>" +
        "                <input id='moreEnd" + numberOfMore + "' name='moreEnd" + numberOfMore + "' type='month'>" +
        "                <label for='moreInfo" + numberOfMore + "'>Information:</label>" +
        "                <textarea type='text' id='moreInfo" + numberOfMore + "' name='moreInfo" + numberOfMore + "'></textarea>";

    const div = document.getElementById("moreDiv");
    div.insertBefore(section, document.getElementById("addMoreButton"));

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
        const div = document.getElementById("skillDiv");
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
        const div = document.getElementById("projectDiv");
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
        const div = document.getElementById("educationDiv");
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
        const div = document.getElementById("experienceDiv");
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
        const div = document.getElementById("languageDiv");
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
        const div = document.getElementById("interestDiv");
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
        const div = document.getElementById("moreDiv");
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
    document.getElementById("starValue" + skillNumber).value = ratingCount;
    const temp = document.getElementById("starText" + skillNumber);
    temp.textContent = level[ratingCount - 1];
}

function hoverStar(star) {
    const parent = star.parentElement;
    const skillNumber = parent.id.split("rating")[1];
    const clicked = parseInt(document.getElementById("starValue" + skillNumber).value);
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