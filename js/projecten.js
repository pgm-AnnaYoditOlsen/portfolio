(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.buildGui();
        },

        buildGui() {
            this.$projects.innerHTML = this.getProjects();
        },

        cacheElements() {
            this.$projects = document.querySelector(".projects");
        },

        getProjects() {
            return PROJECTS.map((project) => {
                return `
                <a href="${project.url}" class="project-card" target="_blank">
                    <img class="project_img" src="${project.image}" alt="${project.title}">
                    <div class="card_detail">
                        <h3 class="detail_title">${project.title}</h3>
                        <span class="detail_info">${project.description}</span>
                    </div>
                </a>` 
            }).join("");
        },
    }
    app.initialize();
})();