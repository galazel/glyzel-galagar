function Skills() {
  return (
      <section className="skills py-5">
      <div className="container text-center">
        <h1 className="mt-5 display-4">My Skills</h1>
        <div className="row justify-content-center">

          {/* Languages */}
          <div className="col-md-10 mb-5">
            <h2>Languages</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/src/assets/images/html-5.png" alt="HTML" title="HTML" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/css-3.png" alt="CSS" title="CSS" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/js.png" alt="JavaScript" title="JavaScript" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/java.png" alt="Java" title="Java" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/c-sharp.png" alt="C#" title="C#" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/sql.png" alt="SQL" title="SQL" data-bs-toggle="tooltip" />
            </div>
          </div>

          {/* Frameworks */}
          <div className="col-md-10 mb-5">
            <h2>Frameworks</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/src/assets/images/bootstrap.png" alt="Bootstrap" title="Bootstrap" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/react.png" alt="React" title="React.js" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/springboot.png" alt="Spring Boot" title="Spring Boot" data-bs-toggle="tooltip" />
            </div>
          </div>

          {/* Tools */}
          <div className="col-md-10 mb-5">
            <h2>Tools</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/src/assets/images/intellj.png" alt="IntelliJ" title="IntelliJ IDEA" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/visual-studio.png" alt="Visual Studio" title="Visual Studio" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/visual-studio-code.png" alt="VS Code" title="Visual Studio Code" data-bs-toggle="tooltip" />
              <img src="/src/assets/images/postman.png" alt="Postman" title="Postman" data-bs-toggle="tooltip" />
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-md-10 mt-5">
            <h2>Soft Skills</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              <div className="soft-skill-card" title="I can clearly express ideas" data-bs-toggle="tooltip">
                <i className="fa-solid fa-comments fa-2x"></i>
                <p className="mt-2 mb-0">Communication</p>
              </div>
              <div className="soft-skill-card" title="I work well in teams" data-bs-toggle="tooltip">
                <i className="fa-solid fa-people-group fa-2x"></i>
                <p className="mt-2 mb-0">Teamwork</p>
              </div>
              <div className="soft-skill-card" title="I adapt quickly to change" data-bs-toggle="tooltip">
                <i className="fa-solid fa-arrows-rotate fa-2x"></i>
                <p className="mt-2 mb-0">Adaptability</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
