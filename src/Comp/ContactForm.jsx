
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';

function Contact() {
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setSubmitStatus('error');
      alert('Please login to send a message');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      alert('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call - Replace with your actual backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
          timestamp: new Date().toISOString(),
          status: 'unread'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: user?.name || '',
          email: user?.email || '',
          message: ''
        });
        
        // Store in local storage as fallback (remove if using real backend)
        const userMessages = JSON.parse(localStorage.getItem('userMessages') || '[]');
        const newMessage = {
          id: Date.now(),
          ...formData,
          userId: user.id,
          timestamp: new Date().toISOString(),
          status: 'unread'
        };
        userMessages.push(newMessage);
        localStorage.setItem('userMessages', JSON.stringify(userMessages));
        
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Fallback to localStorage if API fails
      const userMessages = JSON.parse(localStorage.getItem('userMessages') || '[]');
      const newMessage = {
        id: Date.now(),
        ...formData,
        userId: user.id,
        timestamp: new Date().toISOString(),
        status: 'unread'
      };
      userMessages.push(newMessage);
      localStorage.setItem('userMessages', JSON.stringify(userMessages));
      setSubmitStatus('success');
      setFormData({
        name: user?.name || '',
        email: user?.email || '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>hello@shoplite.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>123 Commerce St, City, State</span>
                  </p>
                </div>
              </div>
              
              {/* Login Status */}
              {!isAuthenticated && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    🔐 Please login to send us a message. Your messages will be saved to your account.
                  </p>
                </div>
              )}
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ❌ Failed to send message. Please try again.
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  required
                  disabled={isSubmitting}
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" 
                  required
                  disabled={isSubmitting}
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting || !isAuthenticated}
                  className={`w-full p-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting || !isAuthenticated
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {!isAuthenticated && (
                  <p className="text-red-500 text-sm text-center">
                    Please login to send a message
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;