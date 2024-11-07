import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import LoginPage from "../pages/LoginPage";
import { Provider } from "react-redux";
import store from "../redux/Store";
import { LoginProvider } from "../context/LoginContext"; 

export default function AppRoutes() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="pokemon" element={<Pokemon />} />
            <Route path="pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </LoginProvider>
    </Provider>
  );
}
