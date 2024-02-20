import "./App.css";
import CTAForm from "./components/CTAForm";
import StaticSection from "./components/StaticSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        <Header />
        <StaticSection />
        <CTAForm />
      </div>
    </>
  );
}

export default App;
