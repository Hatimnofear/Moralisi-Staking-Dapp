import "@/styles/globals.css";
import { Providers } from "../utils/providers";


export default function App({ Component, pageProps }) {

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
