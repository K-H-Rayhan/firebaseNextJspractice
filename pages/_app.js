import UserProvider from "../contexts/userContext";
import ThemeProvider from "../theme";
import "../styles/styles.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <ThemeProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
