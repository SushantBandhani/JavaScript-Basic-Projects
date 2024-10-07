function convertViews(num) {
    if (num < 1000000) {
        const views = (num / 1000).toString() + 'K'
        return views
    }
    else if (num < 1000000000) {
        const views = (num / 1000000).toString() + 'M'
        return views
    }
    else {
        const views = (num / 1000000000).toString() + 'B'
        return views
    }
}

function builder(title, cName, views, monthsOld, duration, thumbnail) {
    const Tviews = convertViews(views)
    const ele = document.getElementsByClassName("container")[0];
    ele.insertAdjacentHTML('beforeend', `
        <div class="content">
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
}

function submit() {
    const Title = document.getElementById("Title").value;
    const Channel = document.getElementById("Channel").value;
    const views = document.getElementById("Views").value;
    const Months = document.getElementById("Months").value;
    const Time = document.getElementById("Time").value;
    const Image = document.getElementById("Image").value;
    builder(Title, Channel, views, Months, Time, Image)
    /* builder("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","code with harry", 500000000,7,"31:22","https://tse4.mm.bing.net/th/id/OIP.PAUo8-tavpOkHgCMi6M3UAHaD3?w=284&h=180&c=7&r=0&o=5&pid=1.7") */
}
