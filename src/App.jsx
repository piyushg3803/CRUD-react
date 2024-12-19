import { useState } from "react";
import Form from "./Components/Form";
import FormList from "./Components/FormList";
import FormContext from "./Components/Context/context";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (formData) => {
    const isEditing = formData.id !== undefined;
    if (isEditing) {
      setUserDetails((prev) =>
        prev.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      setUserDetails((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
  };

  const removeUser = (indexToRemove) => {
    setUserDetails((prevDetails) =>
      prevDetails.filter((_, index) => index !== indexToRemove)
    );
  };

  const updateUser = (index, updatedUser) => {
    setUserDetails((prevDetails) =>
      prevDetails.map((user, i) =>
        i === index ? { ...user, ...updatedUser } : user
      )
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Form onAddUser={addUser} />} />
        <Route
          path="/details"
          element={
            <FormList
              users={userDetails}
              onRemoveUser={removeUser}
              onUserUpdate={updateUser}
            />
          }
        />
      </>
    )
  );

  return (
    <>
      <FormContext.Provider value={{ userDetails, addUser }}>
        <RouterProvider router={router} />
      </FormContext.Provider>
    </>
  );
}

export default App;
