import { useState } from "react";
import axios from "axios";

export default function UpdateUser() {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });

  // State for form inputs
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Handle form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Function to update user data
  const updateUser = async () => {
    try {
      const updatedUser = { name, email }; // Get updated data from input fields

      // Make the PUT request to update the user
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        updatedUser
      );

      // Update the local state with the updated user details
      setUser(response.data);
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      
      {/* Display current user info */}
      <p>ID: {user.id}</p>

      {/* Form to update user data */}
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>

      {/* Button to trigger update */}
      <button onClick={updateUser}>Update User</button>

      {/* Display updated user info */}
      <div>
        <h3>Updated User Info:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
