import AppRouter from "./AppRouter";
import DarkModeContextProvider from "./contexts/DarkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <DarkModeContextProvider>
          <AppRouter />
        </DarkModeContextProvider>
      </div>
    </Provider>
  );
}

export default App;