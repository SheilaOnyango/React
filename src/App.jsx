import CoreConcept from "./CoreConcept";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </main>
    </div>
  );
}

export default App;
