/* ========== About ========== */
const removeAbout = () => {
    const servicesAll = document.querySelectorAll("#about .services-section .service-development");
    const aboutTopicsAll = document.querySelectorAll("#about .about-section .about-topics .topic");


    for (let topic of aboutTopicsAll) {
        topic.remove();
    }

    for (let service of servicesAll) {
        service.remove();
    }

}

const createAbout = () => {
    removeAbout();

    const aboutTopics = document.querySelector("#about .about-section .about-topics");
    const aboutTitle = document.querySelector("#about .about-section .about-title");
    const servicesSection = document.querySelector("#about .services-section");

    aboutTitle.innerHTML = data["About"]["Sections"][0];

    for (var i = 0; i < data["About"]["Topics"].length; i++) {
        const newTopic = document.createElement("p");
        newTopic.setAttribute("class", "topic");
        newTopic.innerHTML = data["About"]["Topics"][i];

        const arrow = document.createElement("span");
        arrow.setAttribute("class", "about-arrow");
        arrow.innerHTML = "/";
        newTopic.appendChild(arrow);

        aboutTopics.appendChild(newTopic);
    }

    for (var i = 0; i < data["About"]["Services"].length; i++) {
        const newService = document.createElement("div");
        newService.setAttribute("class", "service-development");
        servicesSection.appendChild(newService);

        const newServiceIcon = document.createElement("div");
        newServiceIcon.setAttribute("class", "service-icon");
        newService.appendChild(newServiceIcon);

        const newServiceIconImage = document.createElement("img");
        newServiceIconImage.setAttribute("src", data["About"]["Services"][i]["serviceLogo"]);
        newServiceIconImage.setAttribute("class", "icon");
        newServiceIcon.appendChild(newServiceIconImage);

        const newServiceTitle = document.createElement("p");
        newServiceTitle.setAttribute("class", "service-title");
        newServiceTitle.innerHTML = data["About"]["Services"][i]["serviceTitle"]
        newServiceIcon.appendChild(newServiceTitle);

        const newServiceDescriptionDiv = document.createElement("div");
        newServiceDescriptionDiv.setAttribute("class", "service-description");
        newService.appendChild(newServiceDescriptionDiv);

        const newServiceDescription = document.createElement("p");
        newServiceDescription.innerHTML = data["About"]["Services"][i]["serviceDescription"]

        const textElement = newServiceDescription;
        const originalText = textElement.textContent;
        const modifyText = originalText.replace(/,/g, "<br>");
        newServiceDescription.innerHTML = modifyText;

        newServiceDescriptionDiv.appendChild(newServiceDescription);
    }
}
/* ========== END About ========== */

/* ========== Formation ========== */
const removeFormation = () => {
    const formationTopicsAll = document.querySelectorAll("#formations .formation-section .formation-topics .topic");
    const instituteFormation = document.querySelectorAll("#formations .institute-section .institute-formation");

    for (let topic of formationTopicsAll) {
        topic.remove();
    }

    for (let institute of instituteFormation) {
        institute.remove();
    }

}

const dataFormationsSections = [data["Formation"].Formations, data["Formation"].Courses];
const newDataFormationSection = [];

const createFormation = () => {
    removeFormation();
    const formationTopics = document.querySelector("#formations .formation-section .formation-topics");
    const formationTitle = document.querySelector("#formations .formation-section .formation-title");

    formationTitle.innerHTML = data["Formation"]["Sections"][0];

    for (var i = 0; i < data["Formation"]["Topics"].length; i++) {
        const newTopic = document.createElement("p");
        newTopic.setAttribute("class", "topic");
        newTopic.innerHTML = data["Formation"]["Topics"][i];

        const arrow = document.createElement("span");
        arrow.setAttribute("class", "about-arrow");
        arrow.innerHTML = "/";
        newTopic.appendChild(arrow);

        formationTopics.appendChild(newTopic);
    }

    for (var i = 0; i < dataFormationsSections.length; i++) {
        const instituteSection = document.querySelectorAll("#formations .institute-section");

        newDataFormationSection.push(dataFormationsSections[i]);

        for (var j = 0; j < newDataFormationSection[i].length; j++) {
            const newInstituteFormation = document.createElement("div");
            newInstituteFormation.setAttribute("class", "institute-formation");
            instituteSection[i].appendChild(newInstituteFormation);

            const newInstitute = document.createElement("div");
            newInstitute.setAttribute("class", "institute");
            newInstituteFormation.appendChild(newInstitute);

            const newInstituteFormationIcon = document.createElement("div");
            newInstituteFormationIcon.setAttribute("class", "formation-icon");
            newInstitute.appendChild(newInstituteFormationIcon);

            const newInstituteFormationIconImage = document.createElement("img");
            newInstituteFormationIconImage.setAttribute("src", newDataFormationSection[i][j].formationLogo);
            newInstituteFormationIconImage.setAttribute("class", "icon");
            newInstituteFormationIcon.appendChild(newInstituteFormationIconImage);

            const newInstituteFormationIconName = document.createElement("p");
            newInstituteFormationIconName.setAttribute("class", "year");
            newInstituteFormationIconName.innerHTML = newDataFormationSection[i][j].formationInstituteName;
            newInstituteFormationIcon.appendChild(newInstituteFormationIconName);

            const arrow = document.createElement("span");
            arrow.setAttribute("class", "year");
            arrow.innerHTML = "/";
            newInstituteFormationIconName.appendChild(arrow);

            const newInstituteFormationIconYear = document.createElement("span");
            newInstituteFormationIconYear.setAttribute("class", "year");
            newInstituteFormationIconYear.innerHTML = newDataFormationSection[i][j].formationYearStartEnd;
            newInstituteFormationIconName.appendChild(newInstituteFormationIconYear);

            const newInstituteFormationInfo = document.createElement("div");
            newInstituteFormationInfo.setAttribute("class", "formation-info");
            newInstitute.appendChild(newInstituteFormationInfo);

            const newSkillBar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            newSkillBar.setAttribute("width", "40");
            newSkillBar.setAttribute("height", "110");
            newSkillBar.setAttribute("viewBox", "0 0 22 104");
            newSkillBar.setAttribute("fill", "none");
            newInstituteFormationInfo.appendChild(newSkillBar);

            const newSkillBarLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
            newSkillBarLine.setAttribute("x1", "11.5");
            newSkillBarLine.setAttribute("y1", "-2.18557e-08");
            newSkillBarLine.setAttribute("x2", "11.5");
            newSkillBarLine.setAttribute("y2", "130");
            newSkillBarLine.setAttribute("stroke", "white");
            newSkillBar.appendChild(newSkillBarLine);

            const newSkillBarCircleOutside = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newSkillBarCircleOutside.setAttribute("cx", "20");
            newSkillBarCircleOutside.setAttribute("cy", "43");
            newSkillBarCircleOutside.setAttribute("r", "10.5");
            newSkillBarCircleOutside.setAttribute("transform", "rotate(90 11 43)");
            newSkillBarCircleOutside.setAttribute("fill", "#1D1E20");
            newSkillBarCircleOutside.setAttribute("stroke", "white");
            newSkillBar.appendChild(newSkillBarCircleOutside);

            const newSkillBarCircleInside = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newSkillBarCircleInside.setAttribute("cx", "20");
            newSkillBarCircleInside.setAttribute("cy", "43");
            newSkillBarCircleInside.setAttribute("r", "5");
            newSkillBarCircleInside.setAttribute("transform", "rotate(90 11 43)");
            newSkillBarCircleInside.setAttribute("fill", "white");
            newSkillBar.appendChild(newSkillBarCircleInside);

            const newInstituteFormationInfoDiv = document.createElement("div");
            newInstituteFormationInfo.appendChild(newInstituteFormationInfoDiv);

            const newInstituteFormationInfoDivTitle = document.createElement("p");
            newInstituteFormationInfoDivTitle.setAttribute("class", "title");
            newInstituteFormationInfoDivTitle.innerHTML = newDataFormationSection[i][j].formationTitle;
            newInstituteFormationInfoDiv.appendChild(newInstituteFormationInfoDivTitle);

            const newInstituteFormationInfoDivDescription = document.createElement("p");
            newInstituteFormationInfoDivDescription.setAttribute("class", "description");
            newInstituteFormationInfoDivDescription.innerHTML = newDataFormationSection[i][j].formationDescription;
            newInstituteFormationInfoDiv.appendChild(newInstituteFormationInfoDivDescription);
        }

    }

}
/* ========== END Formation ========== */

/* ========== Skills ========== */
const removeSkills = () => {

    const skillsTopicsAll = document.querySelectorAll("#skills .skills-section .skills-topics .topic");

    const skillsDeveloper = document.querySelectorAll("#skills .skills-developer")[0];
    const skillDeveloperAll = skillsDeveloper.querySelectorAll(".skill");

    const skillsFrameworks = document.querySelectorAll("#skills .skills-developer")[1];
    const skillsFrameworksAll = skillsFrameworks.querySelectorAll(".skill");

    const skillsServices = document.querySelectorAll("#skills .skills-developer")[2];
    const skillsServicesAll = skillsServices.querySelectorAll(".skill");

    const skillsPrinciplesDataModeling = document.querySelectorAll("#skills .skills-developer")[3];
    const skillsPrinciplesDataModelingAll = skillsPrinciplesDataModeling.querySelectorAll(".skill");

    for (let topic of skillsTopicsAll) {
        topic.remove();
    }

    for (let skill of skillDeveloperAll) {
        skill.remove();
    }

    for (let skill of skillsFrameworksAll) {
        skill.remove();
    }

    for (let skill of skillsServicesAll) {
        skill.remove();
    }

    for (let skill of skillsPrinciplesDataModelingAll) {
        skill.remove();
    }

}

const dataSkillsSections = [data["Skills"].DeveloperSkills, data["Skills"].FrameworksSkills, data["Skills"].ServicesSkills, data["Skills"].principlesDataModeling];
const newDataSkillsSection = [];

const createSkills = () => {
    removeSkills();

    const skillsTitle = document.querySelector("#skills .skills-section .skills-title");
    const skillsTopics = document.querySelector("#skills .skills-section .skills-topics");
    const allSkills = document.querySelectorAll("#skills .skills-developer");

    skillsTitle.innerHTML = data["Skills"]["Sections"][0];

    for (var i = 0; i < data["Skills"]["Topics"].length; i++) {
        const newTopic = document.createElement("p");
        newTopic.setAttribute("class", "topic");
        newTopic.innerHTML = data["Skills"]["Topics"][i];

        const arrow = document.createElement("span");
        arrow.setAttribute("class", "about-arrow");
        arrow.innerHTML = "/";
        newTopic.appendChild(arrow);

        skillsTopics.appendChild(newTopic);
    }

    for (var i = 0; i < dataSkillsSections.length; i++) {
        newDataSkillsSection.push(dataSkillsSections[i]);

        for (var j = 0; j < newDataSkillsSection[i].length; j++) {

            const newSkill = document.createElement("div");
            newSkill.setAttribute("class", "skill");
            allSkills[i].appendChild(newSkill);

            const newSkillIcon = document.createElement("img");
            newSkillIcon.setAttribute("class", "icon");
            newSkillIcon.setAttribute("src", newDataSkillsSection[i][j].logoDeveloperSkill);
            newSkill.appendChild(newSkillIcon);

            const newSkillTitle = document.createElement("span");
            newSkillTitle.setAttribute("class", "title")
            newSkillTitle.innerHTML = newDataSkillsSection[i][j].nameDeveloperSkill;
            newSkill.appendChild(newSkillTitle);

            const newSkillBar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            newSkillBar.setAttribute("width", "154");
            newSkillBar.setAttribute("height", "22");
            newSkillBar.setAttribute("viewBox", "0 0 154 22");
            newSkillBar.setAttribute("fill", "none");
            newSkill.appendChild(newSkillBar);

            const newSkillBarLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
            newSkillBarLine.setAttribute("x1", "0");
            newSkillBarLine.setAttribute("y1", "10.5");
            newSkillBarLine.setAttribute("x2", "152");
            newSkillBarLine.setAttribute("y2", "10.5");
            newSkillBarLine.setAttribute("stroke", "white");
            newSkillBar.appendChild(newSkillBarLine);

            const newCirclePosition = (newDataSkillsSection[i][j].proficiencyDeveloperSkill / 100) * 142;

            const newSkillBarCircleOutside = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newSkillBarCircleOutside.setAttribute("cx", newCirclePosition);
            newSkillBarCircleOutside.setAttribute("cy", "11");
            newSkillBarCircleOutside.setAttribute("r", "10.5");
            newSkillBarCircleOutside.setAttribute("fill", "#1D1E20");
            newSkillBarCircleOutside.setAttribute("stroke", "white");
            newSkillBar.appendChild(newSkillBarCircleOutside);

            const newSkillBarCircleInside = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newSkillBarCircleInside.setAttribute("cx", newCirclePosition);
            newSkillBarCircleInside.setAttribute("cy", "11");
            newSkillBarCircleInside.setAttribute("r", "5");
            newSkillBarCircleInside.setAttribute("fill", "white");
            newSkillBar.appendChild(newSkillBarCircleInside);
        }
    }
}
/* ========== End Skills ========== */

/* ========== Projects ========== */

const removeProject = () => {
    const projectsTopicsAll = document.querySelectorAll("#projects .projects-section .projects-topics .topic");
    const ProjectsDeveloperAll = document.querySelectorAll("#projects .projects-developer .project");

    for (let topic of projectsTopicsAll) {
        topic.remove();
    }

    for (let project of ProjectsDeveloperAll) {
        project.remove();
    }
}

const createProject = () => {
    removeProject();

    const projectsSection = document.querySelector("#projects .projects-section");
    const ProjectsDeveloper = document.querySelector("#projects .projects-developer");
    const projectsTitle = document.querySelector("#projects .projects-section .projects-title");
    const projectsTopics = document.querySelector("#projects .projects-section .projects-topics");

    projectsTitle.innerHTML = data["Projects"]["Sections"][0];

    for (var i = 0; i < data["Projects"]["Topics"].length; i++) {
        const newTopic = document.createElement("p");
        newTopic.setAttribute("class", "topic");
        newTopic.innerHTML = data["Projects"]["Topics"][i];

        const arrow = document.createElement("span");
        arrow.setAttribute("class", "about-arrow");
        arrow.innerHTML = "/";
        newTopic.appendChild(arrow);

        projectsTopics.appendChild(newTopic);
    }

    for (var i = 0; i < data["Projects"]["ProjectsDeveloper"].length; i++) {
        const newProject = document.createElement("div");
        newProject.setAttribute("class", "project");
        ProjectsDeveloper.appendChild(newProject);

        const newProjectLink = document.createElement("a");
        newProjectLink.setAttribute("href", data["Projects"]["ProjectsDeveloper"][i]["projectLink"]);
        newProject.appendChild(newProjectLink);

        const newProjectImage = document.createElement("img");
        newProjectImage.setAttribute("class", "image");
        newProjectImage.setAttribute("src", data["Projects"]["ProjectsDeveloper"][i]["projectImage"]);
        newProjectLink.appendChild(newProjectImage);

        const newProjectInfo = document.createElement("div");
        newProjectInfo.setAttribute("class", "project-info");
        newProject.appendChild(newProjectInfo);

        const newProjectHeader = document.createElement("div");
        newProjectHeader.setAttribute("class", "project-header");
        newProjectInfo.appendChild(newProjectHeader);

        const newProjectHeaderImage = document.createElement("img");
        newProjectHeaderImage.setAttribute("class", "icon");
        newProjectHeaderImage.setAttribute("src", data["Projects"]["ProjectsDeveloper"][i]["projectLogo"]);
        newProjectHeader.appendChild(newProjectHeaderImage);

        const newProjectHeaderTitle = document.createElement("span");
        newProjectHeaderTitle.setAttribute("class", "title");
        newProjectHeaderTitle.innerHTML = data["Projects"]["ProjectsDeveloper"][i]["projectTitle"];
        newProjectHeader.appendChild(newProjectHeaderTitle);

        const newProjectDescription = document.createElement("p");
        newProjectDescription.setAttribute("class", "description");
        newProjectDescription.innerHTML = data["Projects"]["ProjectsDeveloper"][i]["projectDescription"];
        newProjectInfo.appendChild(newProjectDescription);
    }
}
/* ========== End Projects ========== */

/* ========== Interacts ========== */
const screenAbout = document.getElementById("about");
const screenFormation = document.getElementById("formations");
const screenSkill = document.getElementById("skills");
const screenProject = document.getElementById("projects");
const screenEmail = document.getElementById("email");

const btnAbout = document.querySelector(".nav .icons .user-icon .icon");
const btnFormation = document.querySelector(".nav .icons .certification-icon .icon");
const btnSkills = document.querySelector(".nav .icons .skill-icon .icon");
const btnProjects = document.querySelector(".nav .icons .project-icon .icon");
const btnEmail = document.querySelector(".nav .icons .email-icon .icon");

const profileImage = document.querySelector(".profile .profile-image");

function initAbout() {
    screenAbout.style.display = 'block';
    screenFormation.style.display = 'none';
    screenSkill.style.display = 'none';
    screenProject.style.display = 'none';
    screenEmail.style.display = 'none';

    btnAbout.src = "../resourcers/nav/user-icon-enable.png";
    btnFormation.src = "../resourcers/nav/certification-icon-disable.png";
    btnSkills.src = "../resourcers/nav/skill-icon-disable.png";
    btnProjects.src = "../resourcers/nav/project-icon-disable.png";
    btnEmail.src = "../resourcers/nav/email-icon-disable.png";
    profileImage.src = "../resourcers/profile/Idelson-Mendes-Profile-1.png";
    createAbout();
}

function initContact() {
    // code
}

function initFormations() {
    screenAbout.style.display = 'none';
    screenFormation.style.display = 'block';
    screenSkill.style.display = 'none';
    screenProject.style.display = 'none';
    screenEmail.style.display = 'none';

    btnAbout.src = "../resourcers/nav/user-icon-disable.png";
    btnFormation.src = "../resourcers/nav/certification-icon-enable.png";
    btnSkills.src = "../resourcers/nav/skill-icon-disable.png";
    btnProjects.src = "../resourcers/nav/project-icon-disable.png";
    btnEmail.src = "../resourcers/nav/email-icon-disable.png";
    profileImage.src = "../resourcers/profile/Idelson-Mendes-Profile-2.png";
    createFormation();
}

function initSkills() {
    screenAbout.style.display = 'none';
    screenFormation.style.display = 'none';
    screenSkill.style.display = 'block';
    screenProject.style.display = 'none';
    screenEmail.style.display = 'none';

    btnAbout.src = "../resourcers/nav/user-icon-disable.png";
    btnFormation.src = "../resourcers/nav/certification-icon-disable.png";
    btnSkills.src = "../resourcers/nav/skill-icon-enable.png";
    btnProjects.src = "../resourcers/nav/project-icon-disable.png";
    btnEmail.src = "../resourcers/nav/email-icon-disable.png";
    profileImage.src = "../resourcers/profile/Idelson-Mendes-Profile-1.png";
    createSkills();
}


function initProjects() {
    screenAbout.style.display = 'none';
    screenFormation.style.display = 'none';
    screenSkill.style.display = 'none';
    screenEmail.style.display = 'none';
    screenProject.style.display = 'block';

    btnAbout.src = "../resourcers/nav/user-icon-disable.png"
    btnFormation.src = "../resourcers/nav/certification-icon-disable.png";
    btnSkills.src = "../resourcers/nav/skill-icon-disable.png";
    btnProjects.src = "../resourcers/nav/project-icon-enable.png";
    btnEmail.src = "../resourcers/nav/email-icon-disable.png";
    profileImage.src = "../resourcers/profile/Idelson-Mendes-Profile-2.png";
    createProject();
}

function initEmail() {
    screenAbout.style.display = 'none';
    screenFormation.style.display = 'none';
    screenSkill.style.display = 'none';
    screenProject.style.display = 'none';
    screenEmail.style.display = 'block';

    btnAbout.src = "../resourcers/nav/user-icon-disable.png";
    btnFormation.src = "../resourcers/nav/certification-icon-disable.png";
    btnSkills.src = "../resourcers/nav/skill-icon-disable.png";
    btnProjects.src = "../resourcers/nav/project-icon-disable.png";
    btnEmail.src = "../resourcers/nav/email-icon-enable.png";
    profileImage.src = "../resourcers/profile/Idelson-Mendes-Profile-1.png";
}

/* ========== END Interacts ========== */

const myEmail = document.getElementById("register-input-email");
const mySubject = document.getElementById("register-input-subject");
const myBody = document.getElementById("register-input-body");

function sendMail() {
    var link = "mailto:ryuuzaki.mendes@gmail.com"
        + "?cc=" + ""
        + "&subject=" + escape(mySubject.value)
        + "&body=" + escape(myBody.value)
        ;

    window.location.href = link;
}

initAbout();
