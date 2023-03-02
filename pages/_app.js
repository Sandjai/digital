import { Provider } from "react-redux";
import "../styles/global.sass";
import { IsSsrMobileContext } from "../utils/ifMobileIsChecking";
import { store } from "../store";

const myApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
        <Component {...pageProps}></Component>;
      </IsSsrMobileContext.Provider>
    </Provider>
  );
};

export default myApp;
