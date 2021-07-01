let numberOfSkill = 0;
let numberOfProject = 0;
let numberOfEducation = 0;
let numberOfLanguage = 0;
let numberOfInterest = 0;
let numberOfMore = 0;

const maxSkill = 8;
const maxProject = 10;
const maxEducation = 6;
const maxLanguage = 4;
const maxInterest = 5;
const maxMore = 5;

// ADD NEW

function addNewSkill() {
    const section = document.createElement('section');
    section.id = "skill" + numberOfSkill;
    const div = document.getElementById("skillDiv");
    section.innerHTML = "<label for=\"starSkill" + numberOfSkill + "\">Skill:</label>\n" +
        "                <input id=\"starSkill" + numberOfSkill + "\" name=\"starSkill" + numberOfSkill + "\" type=\"text\">\n" +
        "                <div class=\"rating\" id=\"rating" + numberOfSkill + "\">\n" +
        "                    <i class=\"fa fa-star\" aria-hidden=\"true\" value=\"1\" onclick=\"clickStar(this)\"></i>\n" +
        "                    <i class=\"fa fa-star\" aria-hidden=\"true\" value=\"2\" onclick=\"clickStar(this)\"></i>\n" +
        "                    <i class=\"fa fa-star\" aria-hidden=\"true\" value=\"3\" onclick=\"clickStar(this)\"></i>\n" +
        "                    <i class=\"fa fa-star\" aria-hidden=\"true\" value=\"4\" onclick=\"clickStar(this)\"></i>\n" +
        "                    <i class=\"fa fa-star\" aria-hidden=\"true\" value=\"5\" onclick=\"clickStar(this)\"></i>\n" +
        "                    <span id=\"starText" + numberOfSkill + "\">None</span>\n" +
        "                </div>\n" +
        "                <label for=\"starValue" + numberOfSkill + "\"></label>\n" +
        "                <input id=\"starValue" + numberOfSkill + "\" name=\"starValue" + numberOfSkill + "\" type=\"text\" value=\"0\" hidden>";
    div.insertBefore(section, document.getElementById("addSkillButton"));
    numberOfSkill++;
    if (numberOfSkill === 2) {
        document.getElementById("deleteSkillButton").disabled = false;
    }
    if (numberOfSkill === maxSkill) {
        document.getElementById("addSkillButton").disabled = true;
    }
}

function addNewProject() {
    const section = document.createElement('section');
    section.id = "project" + numberOfProject;
    const div = document.getElementById("projectDiv");
    section.innerHTML = "<label for=\"project" + numberOfProject + "\">Project name:</label>\n" +
        "                <input id=\"project" + numberOfProject + "\" name=\"project" + numberOfProject + "\" type=\"text\" placeholder=\"Project Name\" >\n" +
        "                <br>\n" +
        "                <label for=\"projectText" + numberOfProject + "\">Project infos:</label>\n" +
        "                <textarea id=\"projectText" + numberOfProject + "\" name=\"projectText" + numberOfProject + "\" placeholder=\"Project Infos\" ></textarea>";
    div.insertBefore(section, document.getElementById("addProjectButton"));
    numberOfProject++;
    if (numberOfProject === 2) {
        document.getElementById("deleteProjectButton").disabled = false;
    }
    if (numberOfProject === maxProject) {
        document.getElementById("addProjectButton").disabled = true;
    }
}

function addNewEducation() {
    const section = document.createElement('section');
    section.id = "education" + numberOfEducation;
    const div = document.getElementById("educationDiv");
    section.innerHTML = "<label for=\"education" + numberOfEducation + "\">Education/diploma:</label>\n" +
        "                <input id=\"education" + numberOfEducation + "\" name=\"education" + numberOfEducation + "\" type=\"text\" placeholder=\"Education Name\" >\n" +
        "                <br>\n" +
        "                <label for=\"educationText" + numberOfEducation + "\">Education Infos:</label>\n" +
        "                <textarea id=\"educationText" + numberOfEducation + "\" name=\"educationText" + numberOfEducation + "\" placeholder=\"Education Infos\" ></textarea>";
    div.insertBefore(section, document.getElementById("addEducationButton"));
    numberOfEducation++;
    if (numberOfEducation === 2) {
        document.getElementById("deleteEducationButton").disabled = false;
    }
    if (numberOfEducation === maxEducation) {
        document.getElementById("addEducationButton").disabled = true;
    }
}

function addNewLanguage() {
    const section = document.createElement('section');
    section.id = "language" + numberOfLanguage;
    const div = document.getElementById("languageDiv");
    section.innerHTML = "<label for=\"language" + numberOfLanguage + "\">Language:</label>\n" +
        "                <input id=\"language" + numberOfLanguage + "\" name=\"language" + numberOfLanguage + "\" type=\"text\" placeholder=\"Name\">\n" +
        "                <br>\n" +
        "                <label for=\"languageText" + numberOfLanguage + "\">Level:</label>\n" +
        "                <input id=\"languageText" + numberOfLanguage + "\" name=\"languageText" + numberOfLanguage + "\" type=\"text\" placeholder=\"Proficiency\">";
    div.insertBefore(section, document.getElementById("addLanguageButton"));
    numberOfLanguage++;
    if (numberOfLanguage === 2) {
        document.getElementById("deleteLanguageButton").disabled = false;
    }
    if (numberOfLanguage === maxLanguage) {
        document.getElementById("addLanguageButton").disabled = true;
    }
}

function addNewInterest() {
    const section = document.createElement('section');
    section.id = "interest" + numberOfInterest;
    const div = document.getElementById("interestDiv");
    section.innerHTML = "<label for=\"interestCategory" + numberOfInterest + "\">Interest Category:</label>\n" +
        "                <input type=\"text\" id=\"interestCategory" + numberOfInterest + "\" name=\"interestCategory" + numberOfInterest + "\" placeholder=\"Interest Category\">\n" +
        "                <br>\n" +
        "                <label for=\"interestList" + numberOfInterest + "\">Interests:</label>\n" +
        "                <textarea type=\"text\" id=\"interestList" + numberOfInterest + "\" name=\"interestList" + numberOfInterest + "\" placeholder='Interests (one per line)'></textarea>";
    div.insertBefore(section, document.getElementById("addInterestButton"));
    numberOfInterest++;
    if (numberOfInterest === 2) {
        document.getElementById("deleteInterestButton").disabled = false;
    }
    if (numberOfInterest === maxInterest) {
        document.getElementById("addInterestButton").disabled = true;
    }
}

function addNewMore() {
    const section = document.createElement("section");
    section.id = "more" + numberOfMore;
    const div = document.getElementById("moreDiv");
    section.innerHTML = "<label for=\"moreTitle" + numberOfMore + "\">Title:</label>\n" +
        "                <input type=\"text\" id=\"moreTitle" + numberOfMore + "\" name=\"moreTitle" + numberOfMore + "\" placeholder=\"Title\">\n" +
        "                <label for=\"moreSubtitle" + numberOfMore + "\">Subtitle:</label>\n" +
        "                <input type=\"text\" id=\"moreSubtitle" + numberOfMore + "\" name=\"moreSubtitle" + numberOfMore + "\" placeholder=\"Subtitle\">\n" +
        "                <label for=\"moreInfo" + numberOfMore + "\">Information:</label>\n" +
        "                <textarea type=\"text\" id=\"moreInfo" + numberOfMore + "\" name=\"moreInfo" + numberOfMore + "\" placeholder=\"Infos\"></textarea>";
    div.insertBefore(section, document.getElementById("addMoreButton"));
    numberOfMore++;
    if (numberOfMore === 2) {
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
    if (numberOfMore=== 1) {
        document.getElementById("deleteMoreButton").disabled = true;
    }
    if (numberOfMore === maxMore - 1) {
        document.getElementById("addMoreButton").disabled = false;
    }
}


function clickStar(ele) {
    const parent = ele.parentElement;
    const skillNumber = parent.id.split("rating")[1];

    const level = ["Beginner", "Novice", "Advanced", "Experienced", "Expert"];
    let ratingCount = 0;
    const ratingValue = parseInt(ele.getAttribute("value"));

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