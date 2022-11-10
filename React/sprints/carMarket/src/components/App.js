import Nav from "./nav/Nav";
import { carMarket } from "../carAgObj";

const App = () => {
  return <Nav departments={Object.keys(carMarket)} />
}

export default App;