import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";

// pages
import DetailsNotes from "./pages/DetailsNotes";
import EditNotes from "./pages/EditNotes";
import Notes from "./pages/Notes";

// redux store
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ padding: 20 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/:notes_id/edit" element={<EditNotes />} />
              <Route path="/:notes_title/details" element={<DetailsNotes />} />

              {/* not Found App */}
              <Route path="*" element={<Notes />} />
            </Routes>
          </PersistGate>
        </Provider>
      </div>
    </BrowserRouter>
  );
}
