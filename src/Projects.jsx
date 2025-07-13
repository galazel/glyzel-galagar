import Project from "./Project";
import projects_file from "./json/projects.json";

function Projects() 
{
  return (
    <section className="projects">
      <div className="projects-container">
            <div className="projects-item-title">
                <h1 className="mt-5 display-4" >Projects</h1>
                <p>These are the projects that I created using the skills I possesed in programming.</p>
            </div>
            <div className="projects-item project-grid">
            {
                projects_file.map((item, index) => 
                (
                    <Project
                       
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        technology={item.technology}
                        video={item.video}
                        id={index}
                    />
                ))}
            </div>
      </div>
    </section>
  );
}
export default Projects;
