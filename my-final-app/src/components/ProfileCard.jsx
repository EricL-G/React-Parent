
const ProfileCard = ({ name, title, bio, imageUrl }) => {
  return (
    <div style={{
      backgroundColor: '#3a6154',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      border: '2px solid #e9d8c7'
    }}>
      <img 
        src={imageUrl} 
        alt={`Profile of ${name}`} 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '3px solid #e9bd7e'
        }}
      />
      <div>
        <h1 style={{
          fontFamily: "'Nanum Gothic', sans-serif",
          fontWeight: 'bold',
          color: '#e9bd7e',
          fontSize: '1.75rem',
          margin: '0.5rem 0'
        }}>
          {name}
        </h1>
        <h2 style={{
          fontFamily: "'Nanum Gothic', sans-serif",
          fontWeight: 'bold',
          color: '#e9bd7e',
          fontSize: '1.25rem',
          margin: '0.5rem 0 1rem 0'
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          color: '#e9d8c7',
          fontSize: '1rem',
          lineHeight: '1.5',
          margin: 0
        }}>
          {bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
