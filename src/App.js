import AppRouter from "./AppRouter";
import DarkModeContextProvider from "./contexts/DarkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <DarkModeContextProvider>
          <AppRouter />
        </DarkModeContextProvider>
      </Provider>
    </div>
  );
}

export default App;