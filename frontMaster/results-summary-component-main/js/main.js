


const traerData = async ()  => {
const xhttpr = new XMLHttpRequest()
xhttpr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
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

        const icon_reaction = document.getElementById('icon_reaction');
        icon_reaction.src = `${data[0].icon}`
        const reaction_category = document.getElementById('reaction_category')
        reaction_category.innerHTML = `${data[0].category}`;
        const score_reaction = document.getElementById('score_reaction');
        score_reaction.innerHTML = `${data[0].score}`;
        
        
        const icon_memory = document.getElementById('icon_memory');
        icon_memory.src = `${data[1].icon}`
        const memory = document.getElementById('memory')
        memory.innerHTML = `${data[1].category}`;
        const score_memory = document.getElementById('score_memory')
        score_memory.innerHTML = `${data[1].score}`

        const icon_verbal = document.getElementById('icon_verbal');
        icon_verbal.src = `${data[2].icon}`
        const verbal = document.getElementById('verbal')
        verbal.innerHTML = `${data[2].category}`;
        const score_verbal = document.getElementById('score_verbal')
        score_verbal.innerHTML = `${data[2].score}`

        const icon_visual = document.getElementById('icon_visual');
        icon_visual.src = `${data[3].icon}`
        const visual = document.getElementById('visual')
        visual.innerHTML = `${data[3].category}`;
        const score_visual = document.getElementById('score_visual')
        score_visual.innerHTML = `${data[3].score}`;
        
    }
}
xhttpr.open('GET', './data.json', true)
xhttpr.send()
}
traerData()