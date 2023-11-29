import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ErrorFallBack from "./functions/error-fallback";
import Router from "./routes/router";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
