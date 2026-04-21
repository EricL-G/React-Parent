import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';

function Profile() {
  const [name, setName] = useState("Your Name");
  const [title, setTitle] = useState("Your Title");
  const [bio, setBio] = useState("Your bio goes here");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/200");

  return (
    <>
      <h1>Profile Page</h1>
      
      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Edit Your Profile</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="bio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Bio:
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter your bio"
            rows="4"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="imageUrl" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Image URL:
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      <ProfileCard 
        name={name}
        title={title}
        bio={bio}
        imageUrl={imageUrl}
      />
    </>
  );
}

export default Profile;