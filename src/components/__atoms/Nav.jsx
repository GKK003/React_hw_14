import { Link } from "react-router-dom";

function NavLinkItem({ name, active }) {
  return (
    <Link
      to={`/planet/${name}`}
      className={`uppercase text-[11px] tracking-[2px] transition ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {name}
    </Link>
  );
}

export default NavLinkItem;
