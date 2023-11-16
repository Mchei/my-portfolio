import { NavLinkProps } from '@/types';
import { NavLink } from '.'

interface MenuOverlayProps {
    links: NavLinkProps[];
  }

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link) => (
        <li key={link.title}>
            <NavLink href={link.href} title={link.title}></NavLink>
        </li>
        ))}
    </ul>
  )
}

export default MenuOverlay