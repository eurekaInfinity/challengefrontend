import data from "../data.json" assert { type: 'json' };

console.log("data",data);

const content = {};
content.yourresult = `Your Result`;
content.result = `76`;
content.total = `of 100`
content.great = `Great`
content.paragraph = `You scored higher than 65% of the people who hace taken these tests.`
content.title_summary = `Summary`;
content.button = `Continue`

content.reaction       = `${data[0].category}`;
content.score_reaction = `${data[0].score}`;
content.icon_reaction  = `${data[0].icon}`;

content.memory       = `${data[1].category}`;
content.score_memory = `${data[1].score}`;
content.icon_memory  = `${data[1].icon}`;

content.verbal       = `${data[2].category}`;
content.score_verbal = `${data[2].score}`;
content.icon_verbal  = `${data[2].icon}`;

content.visual       = `${data[3].category}`;
content.score_visual = `${data[3].score}`;
content.icon_visual  = `${data[3].icon}`;

document.addEventListener('DOMContentLoaded', () => {
  let html = document.body.innerHTML;
  Object.entries(content).forEach(([tag, data]) => {
    html = html.replaceAll(`{${tag}}`, data);
  });
  document.body.innerHTML = html;
});