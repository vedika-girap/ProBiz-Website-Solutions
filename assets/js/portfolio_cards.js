const portfolioItems = [
  {
    title: "Modern Website",
    category: "web",
    image: "assets/img/project1.jpg",
    description: "Responsive landing page for a tech startup.",
  },
  {
    title: "SEO Boost Project",
    category: "seo",
    image: "assets/img/project2.jpg",
    description: "Increased organic traffic by 250%.",
  },
  {
    title: "Brand Redesign",
    category: "branding",
    image: "assets/img/project3.jpg",
    description: "Rebranded a fashion label’s entire look.",
  },
];

const grid = document.getElementById("portfolioGrid");

function renderCards(filter = "all") {
  grid.innerHTML = "";
  const filtered = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  
  filtered.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "bg-white portfolio-card shadow rounded overflow-hidden transition";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", `${i * 100}`);
    card.innerHTML = `
      <img src="${item.image}" class="w-full h-48 object-cover" alt="${item.title}">
      <div class="p-4">
        <h3 class="font-bold text-lg mb-2">${item.title}</h3>
        <p class="text-sm text-gray-600">${item.description}</p>
      </div>`;
    grid.appendChild(card);
  });
}

// Initial load
renderCards();

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("bg-blue-600", "text-white"));
    btn.classList.add("bg-blue-600", "text-white");
    renderCards(btn.getAttribute("data-filter"));
  });
});








// const portfolioItems = [
//   {
//     image: "https://source.unsplash.com/featured/?website",
//     alt: "Project 1",
//     title: "Business Site Demo",
//     description: "Responsive and elegant layout built for small businesses.",
//     link: "#",
//     delay: "0"
//   },
//   {
//     image: "https://source.unsplash.com/featured/?app,ui",
//     alt: "Project 2",
//     title: "SaaS Landing Page",
//     description: "Modern landing page design with clear call-to-action.",
//     link: "#",
//     delay: "100"
//   },
//   {
//     image: "https://source.unsplash.com/featured/?store,web",
//     alt: "Project 3",
//     title: "E-commerce Layout",
//     description: "Product-focused layout optimized for conversion.",
//     link: "#",
//     delay: "200"
//   }
// ];

// const grid = document.getElementById("portfolioGrid");

// portfolioItems.forEach(item => {
//   const card = document.createElement("div");
//   card.className = "bg-white rounded-lg overflow-hidden shadow-md portfolio-card";
//   card.setAttribute("data-aos", "fade-up");
//   card.setAttribute("data-aos-delay", item.delay);

//   card.innerHTML = `
//     <img src="${item.image}" alt="${item.alt}" class="w-full h-48 object-cover">
//     <div class="p-6">
//       <h3 class="text-xl font-bold mb-2">${item.title}</h3>
//       <p class="text-gray-600 text-sm mb-4">${item.description}</p>
//       <a href="${item.link}" class="text-blue-600 font-semibold hover:underline">View Demo</a>
//     </div>
//   `;

//   grid.appendChild(card);
// });
