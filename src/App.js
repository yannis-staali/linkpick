import { Routes, Route, Link } from "react-router-dom";
import SolutionEcole from "./components/SolutionEcole";
import SolutionEntreprise from "./components/SolutionEntreprise";
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
       <Nav/>
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/solution-ecole" element={<SolutionEcole />} />
        <Route path="/solution-entreprise" element={<SolutionEntreprise />} />
       </Routes>

       <main className='main'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum eum possimus dolorum nihil cumque optio ab inventore accusantium maxime, rem repudiandae, culpa veniam distinctio perferendis veritatis impedit illo. Ex.
          Esse ad dicta laudantium repellat repudiandae distinctio at ipsam, laborum molestiae, aliquam molestias aspernatur veniam pariatur qui fugiat impedit quos ab eius architecto perferendis. Molestiae nisi debitis numquam ea iste?
          </p>
         
       </main>
       <Footer />
    </div>
  );
}

export default App;
