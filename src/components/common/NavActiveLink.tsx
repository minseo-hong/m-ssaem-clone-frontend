import { NavLink } from 'react-router-dom';

interface NavActiveLinkProps {
  to: string,
  children: React.ReactNode
}

const linkActiveStyle = {
  color: "#AC71EA",
  borderBottom: "4px solid #AC71EA"
};

const NavActiveLink = ({ to, children }: NavActiveLinkProps) => {
  return (
    <NavLink 
      to={ to } 
      style={({ isActive }) => isActive ? linkActiveStyle : undefined}>
      { children }
    </NavLink>
  );
}

export default NavActiveLink;
