import Contact from "components/Contact";
import HomePage from "components/HomePage";
import Me from "components/Me";
import Skills from "components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <HomePage />
        <Skills />
        <Me />
        <Contact />
      </div>
    </>
  );
}
