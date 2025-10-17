import { account } from '../appwrite';

export const authService = {

  async login(email, password) {
    try {
      console.log('Appwrite login attempt for:', email);
      
      const session = await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      return {
        user:{
          id: user.$id,
          name: user.name,
          email: user.email,
          role: 'Customer'
        },
        token: session.secret,
      }
     } catch (error) {
      console.error('Appwrite login error:', error);
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      };
    }
  },


  async register(email, password, name){
    try {
      await account.create('unique()', email, password, name);
      return {success: true}
    } catch (error) {
      console.log('Failed to create account!', error);
      return {success: false}
    }
  },
  
  async logout() {
    try {
      await account.deleteSession('current')
      console.log('Appwrite logout successful');
    } catch (error) {
      console.error('Appwrite logout error:', error);
    }
  },

  async getCurrentUser() {
    try {
      const user = await account.get();
      return {
        id: user.$id,
        name: user.name,
        email: user.email,
      }
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }
};