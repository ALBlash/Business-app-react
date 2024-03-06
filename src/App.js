import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { SnackbarProvider } from './providers/SnackbarProvider';
import ThemeProvider from './providers/ThemeProvider';
import { UserProvider } from './users/providers/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='Business-app-react'>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
