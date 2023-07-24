
import './App.css';
import { Layout, MuxProvider } from '@manulife/mux';
import {
  User
} from './page';
const App = () => {
  return (
    <MuxProvider>
      <Layout>
        <div className='App'>
          <header className='App-header'>
            <User />
          </header>
        </div>
      </Layout>
    </MuxProvider>
  );
};

export default App;
