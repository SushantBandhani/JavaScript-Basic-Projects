function convertViews(num) {
    if (num < 1000000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    else if (num < 1000000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    else {
        return (num / 1000000000).toFixed(1) + 'B';
    }
}


function builder(title, cName, views, monthsOld, duration, thumbnail) {
    const Tviews = convertViews(views)
    const ele = document.getElementsByClassName("container")[0];
    ele.insertAdjacentHTML('beforeend', `
        <div class="content" id="redirectDiv">
            <div class="contentImage">
                <img src="${thumbnail}" />
                <span>${duration}</span>
            </div>
            <div class="contentDescription">
                <h4>${title}</h4>
                <p>${cName} &bull; ${Tviews} &bull; ${monthsOld} months old</p>
            </div>
        </div>
    `);
    document.getElementById("redirectDiv").addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/watch?v=ApXoWvfEYVU"; // Redirect to Sunflower song
    });
}

function submit() {
    const Title = document.getElementById("Title").value;
    const Channel = document.getElementById("Channel").value;
    const views = document.getElementById("views").value;
    const Months = document.getElementById("Months").value;
    const Time = document.getElementById("Time").value;
    const Image = document.getElementById("Image").value;
    builder(Title, Channel, views, Months, Time, Image)
    /* builder("Post Malone, Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse) (Official Video)","Post Malone", 2749054240,60,"2:42","https://i.ytimg.com/vi/ApXoWvfEYVU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9YG0rLWYh_4OR7Gg5_hk_9mu76w") */
    /* builder("The Weeknd - Save Your Tears (Official Music Video)","The Weeknd", 1699669530,36,"4:08","images/weekend") */
}

