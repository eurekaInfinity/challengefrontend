function changeText (listID, data) {
    for (let i = 0; i <= listID.length + 1; i++){
        let id = listID[i].id
        let atr = listID[i].atr
        console.log(i,"i%3: ",i%3, data[i%3].category, data[i%3].icon, data[i%3].score)
        if (atr === "src") {
            document.getElementById(id).src = `${data[i%3].icon}`;
        } else if (atr === "category") {
            document.getElementById(id).innerHTML = `${data[i%3].category}`;
        } else {
                document.getElementById(id).innerHTML = `${data[i%3].score}`;
        }

            // document.getElementById(id).src = `${data[i].icon}`;
            // document.getElementById(id).innerHTML = `${data[i].category}`;
            // document.getElementById(id).innerHTML = `${data[i].score}`;
    }
}

const traerData = async ()  => {
const xhttpr = new XMLHttpRequest()
xhttpr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        const id = [
            { id:'icon_reaction', atr: "src" }, {id:'reaction_category', atr: "category"}, {id:'score_reaction',atr:"score"},
            { id:'icon_memory', atr: "src" },   {id:'memory',            atr: "category"}, {id:'score_memory',  atr:"score"},
            { id:'icon_verbal', atr: "src" },   {id:'verbal',            atr: "category"}, {id:'score_verbal',  atr:"score"},
            { id:'icon_visual', atr: "src" },   {id:'visual',            atr: "category"}, {id:'score_visual',  atr:"score"},
        ]
        let data = JSON.parse(this.responseText)
        const yourResult = document.getElementById('yourResult');
        yourResult.innerHTML = `Your Result`
        const result = document.getElementById('result');
        result.innerHTML = `76`
        const total = document.getElementById('total');
        total.innerHTML = `of 100`
        const great = document.getElementById('great');
        great.innerHTML = `Great`
        const paragraph = document.getElementById('paragraph');
        paragraph.innerHTML = `You scored higher than 65% of the people who hace taken these tests.`
        const title_summary = document.getElementById('title_summary');
        title_summary.innerHTML = `Summary`
        const button = document.getElementById('button');
        button.innerHTML = `Continue`;
        changeText(id, data)
    }
}
xhttpr.open('GET', './data.json', true)
xhttpr.send()
}
traerData()