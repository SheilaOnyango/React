import CoreConcept from "./CoreConcept";
import Header from "./Header";
import componentsImg from "./assets/components.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="The core UI building block."
            image={componentsImg}
          />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </main>
    </div>
  );
}

export default App;
