// ===== EVENT CONFIG (EDIT HERE ONLY) =====
const eventData = {
  name: "Azure + Python Workshop",
  tagline: "Deploy real apps on Azure",
  date: "15 March 2026",
  time: "10:00 AM – 4:00 PM",
  venue: "Online (Microsoft Teams)",
  registerUrl: "https://forms.gle/example",

  agenda: [
    "Introduction to Cloud & Azure",
    "Python & Flask Basics",
    "Deploying Flask on Azure",
    "Live Demo",
    "Q&A Session"
  ],

  speakers: [
    { name: "Atul Kumar", role: "Cloud Engineer" },
    { name: "Guest Speaker", role: "Azure Expert" }
  ]
};
// ========================================

// Populate content
document.getElementById("page-title").innerText = eventData.name;
document.getElementById("event-name").innerText = eventData.name;
document.getElementById("event-tagline").innerText = eventData.tagline;
document.getElementById("event-date").innerText = eventData.date;
document.getElementById("event-time").innerText = eventData.time;
document.getElementById("event-venue").innerText = eventData.venue;
document.getElementById("register-link").href = eventData.registerUrl;

// Agenda
const agendaList = document.getElementById("agenda-list");
eventData.agenda.forEach(item => {
  const li = document.createElement("li");
  li.innerText = item;
  agendaList.appendChild(li);
});

// Speakers
const speakerList = document.getElementById("speaker-list");
eventData.speakers.forEach(speaker => {
  const div = document.createElement("div");
  div.className = "speaker";
  div.innerHTML = `<strong>${speaker.name}</strong><br>${speaker.role}`;
  speakerList.appendChild(div);
});

// Footer year
document.getElementById("year").innerText = new Date().getFullYear();
