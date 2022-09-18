import Nav from "../comps/nav/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app_wrapper">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
