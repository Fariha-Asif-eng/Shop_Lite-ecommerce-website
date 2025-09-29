import { account, login, signup, logout, getCurrentUser } from './Config';

export const authService = {
  // Login function with Appwrite
  async login(email, password) {
    try {
      console.log('Appwrite login attempt for:', email);
      
      // Appwrite login
      const session = await login(email, password);
      
      // Get user details
      const user = await getCurrentUser();
      
      console.log('Appwrite login successful:', user);
      
      return { 
        success: true, 
        user: {
          id: user.$id,
          name: user.name,
          email: user.email,
          role: 'customer'
        }, 
        token: session.secret // Appwrite session secret as token
      };
    } catch (error) {
      console.error('Appwrite login error:', error);
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      };
    }
  },

  // Register function with Appwrite
  async register(userData) {
    try {
      console.log('Appwrite registration attempt for:', userData);
      
      // Appwrite signup
      const newUser = await signup(
        userData.email, 
        userData.password, 
        userData.name
      );
      
      console.log('Appwrite registration successful:', newUser);
      
      // Auto login after registration
      const session = await login(userData.email, userData.password);
      const user = await getCurrentUser();
      
      return { 
        success: true, 
        user: {
          id: user.$id,
          name: user.name,
          email: user.email,
          role: 'customer'
        },
        token: session.secret
      };
    } catch (error) {
      console.error('Appwrite registration error:', error);
      return { 
        success: false, 
        message: error.message || 'Registration failed' 
      };
    }
  },

  // Logout function with Appwrite
  async logout() {
    try {
      await logout();
      console.log('Appwrite logout successful');
    } catch (error) {
      console.error('Appwrite logout error:', error);
    }
  },

  // Check current user
  async getCurrentUser() {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }
};