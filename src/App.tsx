import { useState } from "react";
import { Form, Header, Footer } from "./components";
import { Info } from "./components/Info";
import { Results } from "./components/Results";
import { ResultState } from "./types";

function App() {
  const [results, setResults] = useState<ResultState | null>(null);

  const reset = () => {
    setResults(null);
  };

  return (
    <div className="App">
      <Header />
      {!results ? (
        <Form setResults={setResults} />
      ) : (
        <Results
          reset={reset}
          quant_blocos={results.quant_blocos}
          quant_pisos={results.quant_pisos}
          unidade_bloco={results.unidade_bloco}
          unidade_piso={results.unidade_piso}
          total={results.total}
        />
      )}
      <Info />
      <Footer />
    </div>
  );
}

export default App;
