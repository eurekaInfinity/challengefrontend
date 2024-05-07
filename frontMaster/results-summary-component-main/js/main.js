function changeText (listID, data) {
    for (let i = 0; i <= listID.length; i++){
            let id_0 = listID[i][0];
            let id_1 = listID[i][1];
            let id_2 = listID[i][2];
            document.getElementById(id_0).src = `${data[i].icon}`;
            document.getElementById(id_1).innerHTML = `${data[i].category}`;
            document.getElementById(id_2).innerHTML = `${data[i].score}`;
    }
}

const traerData = async ()  => {
const xhttpr = new XMLHttpRequest()
xhttpr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        const id = [
            ['icon_reaction', 'reaction_category', 'score_reaction'], 
            ['icon_memory', 'memory', 'score_memory' ], 
            ['icon_verbal', 'verbal', 'score_verbal'],
            ['icon_visual', 'visual', 'score_visual']
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