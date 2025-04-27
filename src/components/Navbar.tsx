import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}
const NavLink = ({
  to,
  children,
  className
}: NavLinkProps) => <Link to={to} className={cn("text-gray-700 hover:text-brand-blue transition-colors px-4 py-2 rounded-md font-medium", className)}>
    {children}
  </Link>;
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-blue">DPMS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/booking">LT/CR</NavLink>
            <NavLink to="/booking">Hall Booking</NavLink>
            <NavLink to="/process">Event Booking</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <Button asChild className="ml-4 bg-brand-blue hover:bg-brand-lightBlue">
              <Link to="/login" className="px-[36px]">Login </Link>
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-4 space-y-1 px-4 border-t">
          <NavLink to="/booking" className="block">LT/CR</NavLink>
          <NavLink to="/booking" className="block">Hall Booking</NavLink>
          <NavLink to="/process" className="block">Event Booking</NavLink>
          <NavLink to="/contact" className="block">Contact Us</NavLink>
          <Button asChild className="mt-3 w-full bg-brand-blue hover:bg-brand-lightBlue">
            <Link to="/login">Login / Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;