// Components
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
