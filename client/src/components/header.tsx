import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <span className="fjp-title">
          Fakelandia
          <br />
          Justice
          <br />
          Department
        </span>
        <img
          src="/src/assets/fakelandia.png"
          alt="Here should be a header image"
          height={50}
          width={300}
        />
      </header>
      <Nav />
    </>
  );
};
export default Header;
