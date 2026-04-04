
function Pictures({ pics }) {
  return (
    <div className="w-full mx-auto my-5 px-6 rounded-lg hover:scale-120 transition-transform duration-300 overflow-hidden" style={{ maxWidth: '300px', height: '250px' }}>
        <img src={pics} alt="..." />
    </div>
  );
}
export default Pictures;

