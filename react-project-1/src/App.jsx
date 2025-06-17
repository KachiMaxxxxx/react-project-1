import Header from "./components/Header";
import Entry from "./components/entry";
import JournalData from "./components/data";

export default function App() {
  return (
    <>
      <Header />

      {JournalData.map((data) => (
        <Entry
          key={data.id}
          img={data.img}
          title={data.title}
          country={data.country}
          link={data.googleMapsLink}
          date={data.dates}
          text={data.text}
        />
      ))}
    </>
  );
}
