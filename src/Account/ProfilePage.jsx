
import { useAuth } from '../Auth/AuthContext';
import H2Styles from '../MiniParts/H2Styles';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    // Fetch user messages from localStorage
    const messages = JSON.parse(localStorage.getItem('userMessages') || '[]');
    const userMessages = messages.filter(msg => msg.userId === user.id);
    setUserMessages(userMessages);
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <H2Styles h2Texts="User Profile" />
          <p className="text-gray-600 mt-4">Manage your account and view your activity</p>
        </div>

        {/* User Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Name:</span>
                  <span className="text-gray-900 font-medium">{user.name}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <span className="text-gray-900 font-medium">{user.email}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Role:</span>
                  <span className="text-gray-900 font-medium capitalize">{user.role}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">User ID:</span>
                  <span className="text-gray-900 font-medium text-sm">{user.id}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <NavLink 
                  to="/userdetail" 
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  ✏️ Edit Profile
                </NavLink>
                
                <NavLink 
                  to="/propicture" 
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  🖼️ Update Picture
                </NavLink>
                
                <NavLink 
                  to="/contactform" 
                  className="block w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  💌 Contact Support
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Messages
            </h3>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {userMessages.length} messages
            </span>
          </div>

          {userMessages.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">💌</div>
              <p className="text-gray-500 text-lg mb-4">No messages sent yet.</p>
              <NavLink 
                to="/contactform" 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Your First Message
              </NavLink>
            </div>
          ) : (
            <div className="space-y-4">
              {userMessages.map(message => (
                <div key={message.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">{message.name}</p>
                      <p className="text-gray-500 text-sm">{message.email}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {new Date(message.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{message.message}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      message.status === 'unread' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {message.status === 'unread' ? '⏳ Unread' : '✅ Read'}
                    </span>
                    <span className="text-xs text-gray-500">Message ID: {message.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order History Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Order History
          </h3>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-500 text-lg">Your order history will appear here...</p>
            <NavLink 
              to="/shop" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 mt-4"
            >
              Start Shopping
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;