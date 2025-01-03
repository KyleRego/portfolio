import List from "./components/List"
import Screenie from "./components/Screenie";
import DemoLink from "./components/DemoLink";

export default function AnkiBooks() {
    return <section id="ruby-ankibooks" className="d-flex justify-content-center align-items-center">
        <div className="card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Anki Books</h2>

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
                        Anki Books is a Ruby on Rails web application for taking notes and creating flashcards.
                        The most impressive technical feature is being able to export Anki deck package files (*.apkg files) created by a Ruby job that the desktop app Anki (not affiliated) can import.
                        To accomplish that technical feat, and as part of the modular design of this app, I developed a Ruby gem called Anki Record which provides a Ruby API for creating and updating *.apkg files, which are zipped SQLite databases.
                    </p>    
                </div>

                <List heading={"Gained experience with"} items={["Ruby on Rails 7", "Hotwire", "Import maps", "RSpec", "Cucumber", "Selenium WebDriver", "Bootstrap", "PostgreSQL", "SQLite", "Ruby gems"]} />
            </div>

            <div className="d-flex column-gap-3 align-items-center justify-content-start overflow-x-scroll">
                <Screenie src={"ankibooks-screenshot-1.png"} alt={"Example of an Anki Books article, one with some of my notes on the Ruby book 'Service-Oriented Design.' Articles have one long text and many notes on the right side which can be basic notes or cloze notes. The notes can be inserted at any ordinal position and reordered with the HTML drag and drop API."} />

                <Screenie src={"ankibooks-screenshot-2.png"} alt={"Using the Anki Books article editor. This was developed using the Trix editor/Action Text in Rails; I added the H2-H6 heading buttons to the toolbar by configuring Trix and making changes to the DOM in a Stimulus controller."} />

                <Screenie src={"ankibooks-screenshot-3.png"} alt={"The Anki Books books tree; I think this UI design is one of the weak points of the application."} />
            </div>
            
        </div>
    </section>;
}
