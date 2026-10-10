// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));


// ================= POPUP MODAL =================

function openModal(project){

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    if(project === "todo"){

        title.innerHTML = "To-Do Backend";

        body.innerHTML = `
        <p><b>Internship:</b> CodSoft</p>
        <p><b>Technology:</b> Node.js, Express, MongoDB</p>
        <p><b>Features:</b> Add, Update, Delete & View Tasks</p>
        <p><b>Type:</b> Backend REST API</p>
        `;
    }

    else if(project === "library"){

        title.innerHTML = "Library Management System";

        body.innerHTML = `
        <p><b>Internship:</b> CodSoft</p>
        <p><b>Technology:</b> Node.js, Express, MongoDB</p>
        <p><b>Features:</b> Book Management, Categories & CRUD APIs</p>
        <p><b>Type:</b> Backend Project</p>
        `;
    }

    else if(project === "contact"){

        title.innerHTML = "Contact Management System";

        body.innerHTML = `
        <p><b>Internship:</b> CodSoft</p>
        <p><b>Technology:</b> Node.js, Express, MongoDB</p>
        <p><b>Features:</b> Store, Edit & Delete Contacts</p>
        <p><b>Type:</b> Backend Project</p>
        `;
    }

    else if(project === "attendance"){

        title.innerHTML = "Student Attendance System with Real-Time Alert";

        body.innerHTML = `
        <p><b>Project:</b> Diploma Final Year</p>
        <p><b>Technology:</b> Java, Android Studio, Firebase</p>
        <p><b>Features:</b> Real-Time Alert, Attendance Report</p>
        <p><b>Role:</b> Team Project</p>
        `;
    }

    else if(project === "rental"){

        title.innerHTML = "House Rental Management Application";

        body.innerHTML = `
        <p><b>Project:</b> Diploma Final Year</p>
        <p><b>Technology:</b> Java, Android Studio, Firebase</p>
        <p><b>Features:</b> House Listing, Tenant Management</p>
        <p><b>Type:</b> Android Application</p>
        `;
    }
    else if(project==="calculator"){

    title.innerHTML="Modern Calculator";

    body.innerHTML=`
    <p><b>Internship:</b> CodeAlpha</p>
    <p><b>Technology:</b> HTML, CSS, JavaScript</p>
    <p><b>Features:</b> Basic Operations, Percentage, Backspace, Keyboard Support & Calculation History</p>
    <p><b>Type:</b> Frontend Web Application</p>`;
}

else if(project==="gallery"){

    title.innerHTML="Responsive Image Gallery";

    body.innerHTML=`
    <p><b>Internship:</b> CodeAlpha</p>
    <p><b>Technology:</b> HTML, CSS, JavaScript</p>
    <p><b>Features:</b> Responsive Layout, Image Preview, Lightbox & Hover Effects</p>
    <p><b>Type:</b> Frontend Web Application</p>`;
}
    modal.style.display = "flex";
}



function closeModal(){
    document.getElementById("projectModal").style.display = "none";
}

window.addEventListener("click", function(e){

    const modal = document.getElementById("projectModal");

    if(e.target === modal){
        closeModal();
    }

});
function openCertificate(image,title){

    document.getElementById("certificateTitle").innerHTML=title;
    document.getElementById("certificateImage").src=image;

    document.getElementById("certificateModal").style.display="flex";
}

function closeCertificate(){
    document.getElementById("certificateModal").style.display="none";
}

window.addEventListener("click",function(e){

    const modal=document.getElementById("certificateModal");

    if(e.target===modal){
        closeCertificate();
    }

});