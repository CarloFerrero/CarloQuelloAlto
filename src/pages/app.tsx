import { Route, Routes } from "react-router-dom";

import DecodeMorse from "./decodeMorse";
import Flea from "./flea";
import Footer from "../components/footer";
import Homepage from "./home";
import ImageClassifier from "./imageClassifier";
import Navbar from "../components/navbar";
import PoseDetection from "./poseDetection";
import RedirectBanner from "./redirectBanner";
import RomanConverter from "./romanConverter";
import ScrollToTop from "../components/scrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/roman-numerals-decoder" element={<RomanConverter />} />
          <Route path="/decode-morse" element={<DecodeMorse />} />
          <Route path="/redirect-banner" element={<RedirectBanner />} />
          <Route path="/flea" element={<Flea />} />
          <Route path="/image-classifier" element={<ImageClassifier />} />
          <Route path="/pose-detection" element={<PoseDetection width={640} height={480} />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default App;
