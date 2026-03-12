import Logo from "../__atoms/Logo";
import NavLinkItem from "../__atoms/Nav";

function Header({ planets, currentPlanet }) {
  return (
    <header className="border-b border-white/20 px-6 py-6">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        <Logo />

        <nav className="flex flex-wrap gap-5 xl:gap-8">
          {planets.map((planet) => (
            <NavLinkItem
              key={planet.name}
              name={planet.name}
              active={
                currentPlanet?.toLowerCase() === planet.name?.toLowerCase()
              }
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
