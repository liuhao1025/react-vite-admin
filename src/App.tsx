import { AuthProvider } from "./auth/AuthProvider";
import { RouteView } from './routes/index';

function App() {
  return (
    <AuthProvider>
      <RouteView />
    </AuthProvider>
  );
}

export default App;
