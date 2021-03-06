import "../styles/global.css";

import { ChallengesContext, ChallangesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
  );
}

export default MyApp;
