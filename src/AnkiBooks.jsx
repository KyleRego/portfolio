import DemoLink from "./components/DemoLink";
import LinksGallery from "./components/LinksDemo";
import ScrollingLinks from "./components/ScrollingLinks";

export default function AnkiBooks() {
    const allAnkiBooksPosts = [
        ["Customizing the Trix editor", "https://kylerego.github.io/customizing-the-trix-editor"],
        ["Method missing in Anki Record", "https://kylerego.github.io/anki_record_method_missing"],
        ["Screenshot of Blazor Anki Books article", "https://kylerego.github.io/what-ankibooks-looks-like-part-two"],
        ["Resource based authorization in ASP.NET Core", "https://kylerego.github.io/asp-net-core-resourced-based-authorization-example"],
        ["Example of dependency injection in Blazor Web App", "https://kylerego.github.io/prerendering-razor-components-that-request-data-in-a-blazor-web-app"],
        ["Serializing child classes in .NET", "https://kylerego.github.io/serializing-derived-class-objects-net"],
        ["First attempt at Clean Architecture", "https://kylerego.github.io/ankibooks-codereview-1"]
    ];

    return <section id="ruby-ankibooks" className="d-flex justify-content-center align-items-center">
        <div className="card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="fs-1">Anki Books</h2>

                <DemoLink href="https://ankibooks.io"
                            text="ankibooks.io"
                            labelText="Deployed app:" />

                <DemoLink href="https://rubygems.org/gems/anki_record/versions/0.4.1"
                            text="Anki Record"
                            labelText="Ruby gem:" />

            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1 min-w-50">
                    <p>
                        Anki Books is a flashcards and note-taking app that creates Anki deck package files (*.apkg files) from the user's data for download that the desktop app Anki (not affiliated) can import.
                    </p>
                    <p>
                        As part of the modular design of this app, I developed a Ruby gem called Anki Record which provides a Ruby API for creating and updating *.apkg files, which are zipped SQLite databases.
                    </p>    
                </div>
            </div>

            <LinksGallery heading={"Blog posts about Anki Books and Blazor spike"}
                links={allAnkiBooksPosts} />

        </div>
    </section>;
}
