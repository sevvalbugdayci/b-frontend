import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout> 
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;

