//
//
//
const projects = [
  {
    id: 1,
    isReal: true,
    imgSrc: "images/phoenix.png",
    description: "Design & Build The Website",
    title: "Phoenix House",
    websiteLink: "https://phoenix-house.shop/index.html",
  },
  {
    id: 2,
    isReal: false,
    imgSrc: "images/Social_App_2.png",
    description: "Design & Build The Website",
    title: "Social_App",
    websiteLink: "https://abdallah-dragon.github.io/Socail_App",
  },
  {
    id: 3,
    isReal: false,
    imgSrc: "images/leon.png",
    description: "Design & Build The Website",
    title: "Leon",
    websiteLink: "https://abdallah-dragon.github.io/Leon",
  },
  {
    id: 4,
    isReal: false,
    imgSrc: "images/kasper.png",
    description: "Design & Build The Website",
    title: "Kasper",
    websiteLink: "https://abdallah-dragon.github.io/Kasper",
  },
  {
    id: 5,
    isReal: false,
    imgSrc: "images/Azkar.jpg",
    description: "Azkar Image Slider",
    title: "Azkar Website",
    websiteLink: "https://abdallah-dragon.github.io/ImageSlider",
  },
];
//
//
//

addContent(projects);
//
//
//

function addContent(projects) {
  projects.forEach((project) => {
    viewProjects(
      project.id,
      project.imgSrc,
      project.description,
      project.title,
      project.websiteLink
    );
    // for Real
    project.isReal === true &&
      document.getElementById(`project-${project.id}`).classList.add("real");
  });
}

function viewProjects(id, imgSrc, description, title, websiteLink) {
  let cardContent = `
    <div class="card" id="project-${id}">
      <img src="${imgSrc}" alt="" />
      <div class="title">
        <p>${description}</p>
        <h2>${title}</h2>
        <a
          href="${websiteLink}"
          target="_blank"
          >View</a
        >
      </div>
    </div>`;
  document.getElementById("projectsContainer").innerHTML += cardContent;
}
