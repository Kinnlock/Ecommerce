// index.js

import App  from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {createRoot} from "react-dom/client";

createRoot(document.querySelector("#root")).render(<App />);
