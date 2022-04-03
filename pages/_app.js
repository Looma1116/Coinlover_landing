import "../styles/globals.css";
import "../components/TopNav";
import TopNav from "../components/TopNav";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
