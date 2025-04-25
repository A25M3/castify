
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Auth types
interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  isStreamer: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock user
const MOCK_USER: User = {
  id: "user-1",
  username: "nexususer",
  displayName: "Nexus User",
  email: "user@example.com",
  avatarUrl: "https://api.dicebear.com/6.x/avataaars/svg?seed=nexus",
  isStreamer: true
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing login on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("castify-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation
    if (!email || !password) {
      setIsLoading(false);
      throw new Error("Please enter both email and password");
    }
    
    // For demo purposes, we'll accept any login
    localStorage.setItem("castify-user", JSON.stringify(MOCK_USER));
    setUser(MOCK_USER);
    setIsLoading(false);
    
    toast({
      title: "Welcome back!",
      description: `Logged in as ${MOCK_USER.displayName}`,
    });
  };

  // Mock signup function
  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple validation
    if (!email || !username || !password) {
      setIsLoading(false);
      throw new Error("Please fill out all fields");
    }
    
    if (password.length < 6) {
      setIsLoading(false);
      throw new Error("Password must be at least 6 characters");
    }
    
    // Create a custom user based on the provided info
    const newUser: User = {
      ...MOCK_USER,
      username,
      displayName: username,
      email
    };
    
    localStorage.setItem("castify-user", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoading(false);
    
    toast({
      title: "Account created!",
      description: `Welcome to Castify, ${username}!`,
    });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("castify-user");
    setUser(null);
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
