function Header({ title, subtitle }) {
  return (
    <div>
      <h1 className=" text-4x1 border-2 border-blue-200 p-2"> {title}</h1>
      <h3 className=" text-xl"> {subtitle}</h3>
    </div>
  );
}
export default Header;
