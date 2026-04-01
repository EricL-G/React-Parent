function List({ fact1 }) {
  return (
    <div className="text-lg text-blue-700 hover:text-blue-500 border-blue-200 m-2">
      <ul>
        <li className= "flex items-center justify-center py-8 m-6 p-6 border-2 border-gray-300 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transition-transform duration-300">{fact1}</li>
      </ul>
    </div>
  );
}
export default List;
