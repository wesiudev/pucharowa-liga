import Head from "next/head";
import { Animation } from "./Animation";

export const ReconstructionPage = () => {
  return (
    <>
      <Head>
        <title>Pucharowa liga szóstek - Strona w budowie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ backdropFilter: "brightness(30px)" }}
        className="absolute flex-col flex justify-center h-screen w-screen left-0 top-0 bg-no-repeat bg-cover bg-center bg-[url('https://i.postimg.cc/L9YsJknM/banner.png')]"
      >
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="absolute left-5 top-5 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#1877f2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </button>
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0, 0.35)",
            borderRadius: "20px",
          }}
          className="h-3/4 w-3/4 mx-auto flex-col flex justify-center"
        >
          <h1
            style={{
              fontSize: "5rem",
              color: "white",
              textShadow: "5px 5px 10px black",
            }}
            className="text-center center"
          >
            Strona w przebudowie
          </h1>
          <h1
            style={{
              fontSize: "4rem",
              color: "white",
              marginTop: "100px",
              textShadow: "5px 5px 10px black",
            }}
            className="text-center center"
          >
            Zapraszamy już niedługo
          </h1>
        </div>
        {/* <Animation /> */}
      </div>
    </>
  );
};