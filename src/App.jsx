import { LuminaireControl } from "./components/LuminaireControl/LuminaireControl";

const App = () => {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <main className="app__wrapper" style={appStyle}>
      <LuminaireControl />
    </main>
  );
};

export default App;
