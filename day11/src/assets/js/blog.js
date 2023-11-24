const data = [];

function submitData(event) {
    event.preventDefault();

    const title = document.getElementById("pName").value;
    const s_date = document.getElementById("s-date").value;
    const e_date = document.getElementById("e-date").value;
    const content = document.getElementById("description").value;
    const isUsingNodeJs = document.getElementById("tech1").checked;
    const isUsingReactJs = document.getElementById("tech2").checked;
    const isUsingNextJs = document.getElementById("tech3").checked;
    const isUsingTypescript = document.getElementById("tech4").checked;
    let image = document.getElementById("attachFile").files;
    const p_duration = durationInDays(s_date, e_date);

    if (title === "" || s_date === "" || e_date === "" || content === "" || image.length === 0 || p_duration <= 0) {
        alert("Mohon isi semua field dengan benar.");
        return;
    }

    image = URL.createObjectURL(image[0]);

    const duration = durationInMonth(p_duration);

    const obj = {
        title,
        s_date,
        e_date,
        duration,
        image,
        content,
        isUsingNodeJs,
        isUsingReactJs,
        isUsingNextJs,
        isUsingTypescript,
    };

    data.push(obj);
    renderProject();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataBlog.length; index++){
        console.log(dataBlog[index])
        const showNodeJsIcon = dataBlog[index].nodejs ? "" : "style='display: none;'";
        const showNextJs = dataBlog[index].nextjs ?  "" : "style='display: none;'";
        const showReactJs = dataBlog[index].reactjs ?  "" : "style='display: none;'";
        const showTypescript = dataBlog[index].typescript ?  "" : "style='display: none;'";



        document.getElementById("contents").innerHTML += `
            <div class="blog-list-items">
                <div class="blog-image">
                    <img src="${dataBlog[index].image}">
                </div>
                <div class="blog-content">
                    <h3>
                        <a href="detailProject.html">${dataBlog[index].projectName}</a>
                    </h3>
                    <div class="detail-blog-content">durasi : ${dateDiff(dataBlog[index].starDate, dataBlog[index].endDate)}</div>
                    <p>${dataBlog[index].description}</p>
                    <div class="icon">
                    <i class="fa-brands fa-node-js" ${showNodeJsIcon}></i>
                    <i class="fa-brands fa-google-play" ${showNextJs}></i>
                    <i class="fa-brands fa-android" ${showReactJs}></i>
                    <i class="fa-solid fa-mobile" ${showTypescript}></i>
                    </div>
                    <div class="btn-grup">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
            </div>
        `;  
    }
}

function renderTechImages(project) {
    let renderImages = "";

    if (project.isUsingNodeJs) {
        renderImages += `<li><i class="fab fa-node-js"></i></li>`;
    }
    if (project.isUsingReactJs) {
        renderImages += `<li><i class="fab fa-react"></i></li>`;
    }
    if (project.isUsingNextJs) {
        renderImages += `<li><i class="fab fa-js"></i></li>`;
    }
    if (project.isUsingTypescript) {
        renderImages += `<li><i class="fab fa-js"></i>  </li>`;
    }

    return renderImages;
}

function durationInDays(s_date, e_date) {
    const oneDay = 1000 * 60 * 60 * 24;

    const s_dateMs = new Date(s_date).getTime();
    const e_dateMs = new Date(e_date).getTime();
    const durationMs = e_dateMs - s_dateMs;

    return Math.floor(durationMs / oneDay);
}

function durationInMonth(days) {
    monthDuration = Math.floor(days / 30);
    daysDuration = days % 30;

    if (monthDuration == 0) {
        return `${daysDuration} Hari`;
    }

    if (daysDuration > 20) {
        monthDuration++;
    } else if (daysDuration <= 20 && daysDuration > 10) {
        monthDuration += 0.5;
    }

    return `${monthDuration} Bulan`;
}