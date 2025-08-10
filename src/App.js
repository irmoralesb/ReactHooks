import Layout from "./components/layout/Layout";
import { ThemeProvider } from './components/context/ThemeContext';

const App = ({ url }) => {

  return (
    <ThemeProvider>
      <Layout url={url} />
    </ThemeProvider>
  )

};

export default App;
