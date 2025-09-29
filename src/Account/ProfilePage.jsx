import { useAuth } from '../Auth/AuthContext';
import H2Styles from '../MiniParts/H2Styles';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <H2Styles>User Profile</H2Styles>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <strong>Name:</strong> {user.name}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Role:</strong> {user.role}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>User ID:</strong> {user.id}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Order History</h3>
        <p>Your order history will appear here...</p>
      </div>
    </div>
  );
};

export default ProfilePage;