
import Contact from "./components/contact";
import "./App.css"
export default function App() {
  return (
    <>
      <div className="contact__grid">
      <Contact
        img="/src/assets/mr-whiskerson.png"
        name="Mr.Whiskerson"
        phone="(+234) 907 455 3935"
        email="mr.whiskaz@catnip.meowww"
      />
      <Contact
        img="/src/assets/fluffykins.png"
        name="Mr.FluffyKins"
        phone="(+234) 907 455 3935"
        email="fluffy@catnip.meowww"
      />
      <Contact
        img="/src/assets/felix.png"
        name="Mr.Felix"
        phone="(+234) 907 455 3935"
        email="felixxxx@catnip.meowww"
      />
      <Contact
        img="/src/assets/pumpkin.png"
        name="Mr.Pumpkin"
        phone="(+234) 907 455 3935"
        email="pumpkin@catnip.meowww"
      />
      </div>
    </>
  );
}
