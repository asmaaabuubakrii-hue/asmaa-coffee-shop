import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error loading user:", error);
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Signup / Account creation function
  const signup = (email, password, fullName) => {
    try {
      setLoading(true);
      setError(null);

      const newUser = {
        email: email.trim().toLowerCase(),
        password: password,
        fullName: fullName || "",
      };

      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      setLoading(false);
      return { success: true };
    } catch (err) {
      setError("Failed to create account.");
      setLoading(false);
      return { success: false, error: "Failed to create account." };
    }
  };

  // Signin / Login function
  const signin = (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const savedUser = localStorage.getItem("registeredUser");

      if (!savedUser) {
        setError("User not found. Please sign up first.");
        setLoading(false);
        return { success: false, error: "User not found. Please sign up first." };
      }

      const parsed = JSON.parse(savedUser);

      if (
        parsed.email === email.trim().toLowerCase() &&
        parsed.password === password
      ) {
        setUser(parsed);
        localStorage.setItem("user", JSON.stringify(parsed));
        setLoading(false);
        return { success: true };
      }

      setError("Invalid Email or Password");
      setLoading(false);
      return { success: false, error: "Invalid Email or Password" };
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Sign in failed.";
      setError(errorMsg);
      setLoading(false);
      return { success: false, error: errorMsg };
    }
  };

  // Signout / Logout function
  function signout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  // Update profile function
  function updateProfile(update) {
    if (!user) {
      return { success: false, error: "Not Signed In" };
    }

    const updateUser = { ...user, ...update };

    localStorage.setItem("user", JSON.stringify(updateUser));
    localStorage.setItem("registeredUser", JSON.stringify(updateUser));

    setUser(updateUser);

    return { success: true, user: updateUser };
  }

  const value = {
    user,
    loading,
    error,
    signup,
    signin,
    login: signin,
    logout: signout,
    signout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};