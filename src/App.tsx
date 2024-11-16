import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useMatch
} from "react-router-dom";

// Главный компонент
export default function App() {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
  );
}

// Компонент Home
function Home(): JSX.Element {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

// Компонент Topics
function Topics(): JSX.Element {
  // Типизация для useMatch
  const match = useMatch("/topics/*");
  const url = match?.pathnameBase || "/topics";

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<h3>Please select a topic.</h3>} />
        <Route path=":topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}

// Компонент Topic
function Topic(): JSX.Element {
  // Типизация параметров маршрута
  const { topicId } = useParams<{ topicId: string }>();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
