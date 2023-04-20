import "./App.css";

import { Provider } from "react-redux";

import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
