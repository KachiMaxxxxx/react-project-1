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
          {...data}
        />
      ))}
    </>
  );
}
