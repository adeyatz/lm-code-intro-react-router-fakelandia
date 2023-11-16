import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <>
      Fakelandia
      <br />
      Justice
      <br />
      Department
      <img
        src="/src/assets/fakelandia.png"
        alt="Here should be a header image"
        height={50}
        width={300}
      />
      <Nav />
    </>
  );
};
export default Header;
