const countryData = {
  Japan: {
    info: "Japan is a leader in robotics, gaming, and electronics industries.",
    chart: [60, 25, 15]
  },
  USA: {
    info: "USA hosts Silicon Valley, home to companies like Google and Apple.",
    chart: [50, 30, 20]
  },
  Germany: {
    info: "Germany focuses on industrial engineering and automotive tech.",
    chart: [40, 35, 25]
  },
  SouthKorea: {
    info: "South Korea excels in semiconductor and mobile technology.",
    chart: [45, 40, 15]
  },
  China: {
    info: "China is rapidly growing in AI and telecommunications.",
    chart: [55, 30, 15]
  },
  India: {
    info: "India is a major player in software development and IT services.",
    chart: [60, 25, 15]
  }
};


function showCountry(name) {
  document.getElementById('country-detail').classList.remove('hidden');
  document.getElementById('country-name').textContent = name;
  document.getElementById('country-info').textContent = countryData[name].info;

  const ctx = document.getElementById('techChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Robotics/Engineering', 'AI', 'Other'],
      datasets: [{
        data: countryData[name].chart,
        backgroundColor: ['#1e3a8a', '#3b82f6', '#93c5fd']
      }]
    },
    options: { responsive: true }
  });
}

const techNews = [
  { title: "AI beats humans in complex problem solving.", date: "2025-08-01" },
  { title: "Quantum computers reach 1000 qubits milestone.", date: "2025-07-28" },
  { title: "Japan develops humanoid robots for healthcare.", date: "2025-07-20" },
  { title: "Global 6G trials begin across multiple countries.", date: "2025-07-10" },
  { title: "NASA tests autonomous spacecraft navigation system.", date: "2025-07-02" },
  { title: "South Korea unveils flexible holographic displays.", date: "2025-06-25" },
  { title: "China launches AI-powered weather prediction model.", date: "2025-06-15" },
  { title: "India’s IT sector creates 1M new jobs in 2025.", date: "2025-06-01" },
  { title: "Europe develops new green supercomputers.", date: "2025-05-28" },
  { title: "AI-generated movies are screened in global theaters.", date: "2025-05-15" }
];


function renderNews() {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = techNews.map(n => `
    <li>
      <span class="news-date">${n.date}</span> 
      <span class="news-title">${n.title}</span>
    </li>
  `).join('');
}

window.onload = () => {
  if (typeof renderComments === "function") {
    renderComments();
  }
  renderNews();
};

let newsPerPage = 3; // İlk başta gösterilecek haber sayısı
let currentNewsCount = newsPerPage;

function renderNews() {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = techNews.slice(0, currentNewsCount).map(n => `
    <li>
      <span class="news-date">${n.date}</span>
      <span class="news-title">${n.title}</span>
    </li>
  `).join('');

  // Haber sayısına göre buton görünürlüğü
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (currentNewsCount >= techNews.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  currentNewsCount += 3; // Her tıklamada +3 haber daha göster
  renderNews();
});
