import "./App.css";
import Header from "./components/Header";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import Footer from "./components/Footer";
import PageBreaker from "./components/PageBreaker";
function App() {
  return (
    <>
      <Header />
      <PageBreaker />
      <PageOne />
      <PageBreaker />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <Footer />
    </>
  );
}

export default App;
