const content = {};
content.navbars = `
<header class="navbars_container">
<nav class="navbars_wrapper">
    <img class="img_logo" src="./img/Logo-min.png" alt="logo">
    <ul>
        <li> Frontend Mentor </li>
        <li> Projects        </li>
        <li> Community       </li>
        <li> Challenges      </li>
        <li> Sign In         </li>
    </ul>
</nav>
</header>
`;

// Emulate a mini template engine:
document.addEventListener('DOMContentLoaded', () => {
  let html = document.body.innerHTML;
  Object.entries(content).forEach(([tag, data]) => {
    html = html.replaceAll(`{${tag}}`, data);
  });
  document.body.innerHTML = html;
});