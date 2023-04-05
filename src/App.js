import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header/Header";
import SearchBar from "./components/Header/SearchBar/Searchbar";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import ColorItem from "./components/Header/ColorItem/ColorItem";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Search from "./pages/Search";
import ProfileDetails from "./pages/Profile/ProfileDetails/ProfileDetails";
import MyHotels from "./pages/Profile/MyHotels/MyHotels";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Auth/Login/Login";
import ErrorBoundary from "./hoc/ErrorBoundary";
import AddHotel from "./pages/Profile/MyHotels/AddHotel/AddHotel";
import Register from "./pages/Auth/Login/Register/Register";


const Profile = lazy(() => import("./pages/Profile/Profile"));

const colors = [
  {
    id: "1",
    color: "primary",
  },
  {
    id: "2",
    color: "danger",
  },
  {
    id: "3",
    color: "success",
  },
];

const basicHotels = [
  {
    id: "1",
    name: "Pod akacjami",
    city: "Warszawa",
    rating: "8.3.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    id: "2",
    name: "Amazonka",
    city: "Grudziądz",
    rating: "8.7.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    id: "3",
    name: "Pod palmami",
    city: "Łeba",
    rating: "9.3.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
];

function App() {
  const [theme, setTheme] = useState("primary");
  const [hotels, setHotels] = useState(basicHotels);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeTheme = (color) => {
    setTheme(color);
  };

  const content = (
    <>
      <Suspense fallback={<p>Ładowanie profilu...</p>}>
        <Routes>
          <Route path="/hotele/:name" element={<HotelPage />} />

          <Route
            path="/profil"
            element={isAuthenticated ? <Profile /> : <Navigate to="/zaloguj" />}
          >
            <Route path="hotele/dodaj" element={<AddHotel />} />
            <Route path="hotele" element={<MyHotels />} />
            <Route path="" element={<ProfileDetails />} />
          </Route>
          <Route path="/zaloguj" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wyszukaj/:input" element={<Search />} />
          <Route path="/hotels" element={<Navigate to='/'/>} />
          <Route end path="/" element={<Home hotels={hotels} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );

  const header = (
    <Header>
      <InspiringQuote />
      <SearchBar />
      <ColorItem colors={colors} changeTheme={changeTheme} />
    </Header>
  );

  const menu = <Menu theme={theme} />;

  const footer = <Footer theme={theme} />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          login: () => setIsAuthenticated(true),
          logout: () => setIsAuthenticated(false),
        }}
      >
        <ErrorBoundary>
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </ErrorBoundary>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
