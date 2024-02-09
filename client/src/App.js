import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donor from "./pages/Dashboard/Donor";
import Hospital from "./pages/Dashboard/Hospital";
import Organisation from "./pages/Dashboard/Organisation";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Dashboard/Donation";
import Analytics from "./pages/Dashboard/Analytics";


function App() {
  // const {user} = useSelector((state)=>state.auth);
  return (
    <div>
      <ToastContainer/>
      <Routes>
        
        <Route path="/" element={
          <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>
        }/>
        <Route path="/analytics" element={
          <ProtectedRoute>
        <Analytics/>
        </ProtectedRoute>
        }/>
        <Route path="/donor" element={
          <ProtectedRoute>
        <Donor/>
        </ProtectedRoute>
        }/>yyyy
        <Route path="/hospital" element={
          <ProtectedRoute>
        <Hospital/>
        </ProtectedRoute>
        }/>
        <Route path="/consumer" element={
          <ProtectedRoute>
        <Consumer/>
        </ProtectedRoute>
        }/>
        <Route path="/donation" element={
          <ProtectedRoute>
        <Donation/>
        </ProtectedRoute>
        }/>
        <Route path="/organisation" element={
          <ProtectedRoute>
        <Organisation/>
        </ProtectedRoute>
        }/>
       
        <Route path="/login" element={
          <PublicRoute>

            <Login/>
          </PublicRoute>
        }/>
        <Route path="/register" element={
          <PublicRoute>

            <Register/>
          </PublicRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
