export function ProfileCard({ name, title, bio, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={`Profile of ${name}`} style={{ width: '100%' }} />
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
      <button>Contact</button>
    </div>
  );
}
export default ProfileCard;