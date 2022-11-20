import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function LegalNotice() {
  return (
    <div>
      <Head>
        <title>Impressum</title>
      </Head>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="her-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">IMPRESSUM</h1>
            <h2 className="text-4xl text-bold text-left my-5">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p className="text-left">
              Nikita-Nick Funk
              <br />
              nikita.nick.funk@gmail.com
            </p>

            <h2 className="text-4xl text-bold text-left my-5">Kontakt</h2>
            <p className="text-left">E-Mail: nikita.nick.funk@gmail.com</p>

            <p className="text-left my-5">
              Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
