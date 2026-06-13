// StudyFlow — vanilla JS interactivity
const features = [
  { icon: "📚", title: "Subject management", desc: "Organise subjects with priority, difficulty and colour coding." },
  { icon: "📅", title: "Exam scheduling",    desc: "Live countdowns so you always know what's next." },
  { icon: "✅", title: "Daily tasks",         desc: "Lightweight task list with priorities and due dates." },
  { icon: "📈", title: "Progress tracking",   desc: "Visualise completion rates per subject with charts." },
  { icon: "⏱️", title: "Pomodoro timer",      desc: "Built-in 25/5 timer to keep focus sessions deep." },
  { icon: "🧠", title: "Smart planner",       desc: "Weekly study slots auto-prioritised by what matters most." },
];

const grid = document.getElementById("featureGrid");
grid.innerHTML = features.map(f => `
  <button class="feature-card" type="button" aria-label="Open ${f.title}">
    <div class="icon">${f.icon}</div>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
  </button>
`).join("");

// Click feedback
grid.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("click", () => {
    card.animate(
      [{ transform: "scale(1)" }, { transform: "scale(0.97)" }, { transform: "scale(1)" }],
      { duration: 250, easing: "ease" }
    );
    const title = card.querySelector("h3").textContent;
    console.log(`Opening: ${title}`);
    // Hook real navigation here, e.g. window.location.href = "/" + title.toLowerCase();
  });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
