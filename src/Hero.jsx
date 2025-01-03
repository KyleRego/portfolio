import List from "./components/List";
import DemoLink from "./components/DemoLink";

import "./css/hero.css";

export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                        <div className="d-flex flex-column align-items-center column-gap-1">
                            <div className="d-flex flex-wrap justify-content-center row-gap-1 column-gap-3 align-items-center">

                                <div>
                                    <h1 className="mb-2 hero-card-heading">
                                        Kyle Rego
                                    </h1>
                                    <div className="mb-2 hero-card-text">
                                        Software Developer
                                    </div>
                                </div>

                                <div className="hero-card-image">
                                    <img src="me_at_ups_cornerstone.jpg" alt="Me" />
                                </div>

                                <div className="d-flex flex-column justify-content-around column-gap-1 row-gap-1">
                                    <DemoLink href="mailto:regoky@outlook.com"
                                                text="Email" />
                                </div>
                                <div>
                                    <DemoLink href="https://www.github.com/kylerego"
                                                text="GitHub" />
                                </div>
                            </div>

                            <div className="text-center font-20px" style={{maxWidth: "720px"}}>  
                                <p>
                                    <span style={{fontSize: "28px"}}>Hi there! I'm </span>Kyle Rego, a self-taught software developer on a quest to create great software.
                                </p>
                                <p>
                                    I moved to Washington in November, 2024 to pursue new opportunities in tech and a fresh start. I'm moving packages at a UPS warehouse (a good part-time job) and developing the projects in this portfolio.
                                </p>
                                <p>
                                    I bring persistence, adaptability, and a hunger to learn to every challenge I take on. Whether it's designing complex systems, solving real-world problems, or creating interactive applications, I'm ready to bring my experience, drive, and creativity to your team.
                                </p>
                     
                            </div>

                            <div className="d-flex flex-wrap align-items-center justify-content-around column-gap-1 row-gap-3 mb-4">
                                <List heading={"Languages"} items={["C#", "JavaScript", "Ruby"]} />

                                <List heading={"Frameworks"} items={["ASP.NET Core", "Ruby on Rails"]} />

                                <List heading={"Libraries"} items={["React", "Entity Framework Core", "ASP.NET Core Identity"]} />

                                <List heading={"Tools"} items={["Git", "Visual Studio Code", "Selenium WebDriver"]} />

                                <List heading={"Databases"} items={["SQLite", "PostgreSQL"]} />

                                <List heading={"Operating Systems"} items={["Windows", "Linux"]} />
                            </div>
                        </div>
                </div>
        </section>;
}
