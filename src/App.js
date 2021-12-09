import { Route, Routes } from "react-router-dom";
import AddService from "./components/Dashboard/AddService";
import Book from "./components/Dashboard/Book";
import BookingList from "./components/Dashboard/BookingList";
import BookList from "./components/Dashboard/BookList";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import ManageService from "./components/Dashboard/ManageService";
import Review from "./components/Dashboard/Review";
import UpdateService from "./components/Dashboard/UpdateService";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import DataContext from "./context/DataContext";
import TestimonialContext from "./context/TestimonialContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {
  return (
    <>
      <TestimonialContext>
        <DataContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route path="book" element={<Book title="Book" />}>
                <Route path=":name/:id" element={<Book title="Book" />} />
              </Route>
              <Route
                path="booking-list"
                element={<BookingList title="Booking-List" />}
              />
              <Route path="review" element={<Review title="Review" />} />
              <Route path="book-list" element={<BookList />} />
              <Route
                path="add-service"
                element={<AddService title="Add-Service" />}
              />
              <Route
                path="make-admin"
                element={<MakeAdmin title="Make-Admin" />}
              />
              <Route
                path="manage-service"
                element={<ManageService title="Manage-Service" />}
              />
              <Route path="update-service" element={<UpdateService  />}>
                <Route path=":id" element={<UpdateService />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DataContext>
      </TestimonialContext>
    </>
  );
};

export default App;
