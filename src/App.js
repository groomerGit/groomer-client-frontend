import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Home from "./components/Homepage";
import MainLayout from "./components/MainLayout";
import LoginForm from "./components/login";
import ProfilePage from "./components/Profile";
import RevenueDashboard from "./components/RevenueModule";
import BookingsModule from "./components/BookingsModule";
import ProtectedRoute from "./Context/ProtectedRoute";


export const Store = createContext();



function App() {
  const [isAuth, setisAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("salon_user_token");
    if (token) {
      setisAuth(token); // Restore authentication state
    }
  }, []);

  return (
    <BrowserRouter>
      <Store.Provider value={{ isAuth, setisAuth }}>
        <Routes>
          <Route to="/" element={<MainLayout />}>
             <Route path="/"  element={<Home />} />
             <Route path="/login"  element={<LoginForm  />} />
             <Route path="/profile"  element={<ProfilePage />} />
             <Route 
               path="/revenue"  
               element={
                <ProtectedRoute >
                   <RevenueDashboard />
                </ProtectedRoute>
               } />
             <Route 
               path="/bookings"  
               element={
                <ProtectedRoute >
                  <BookingsModule />
                </ProtectedRoute>


               } />
          
         
          </Route>
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
