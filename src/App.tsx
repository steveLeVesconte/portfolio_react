import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import PublicAccess from "./components/projects/public-access/public-access";
import PublicPayment from './components/projects/public-payment/public-payment';
import AngularGo from './components/projects/angular-go/angular-go';
import DockerWordpress from './components/projects/docker-wordpress/docker-wordpress';
function App() {
  return (<>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/public-access" element={<PublicAccess />} />
      <Route path="/projects/public-payment" element={<PublicPayment />} />
      <Route path="/projects/angular-go" element={<AngularGo />} />
      <Route path="/projects/docker-wordpress" element={<DockerWordpress />} />
      </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
