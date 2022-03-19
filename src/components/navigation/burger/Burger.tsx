import { useRef } from 'react';

import BurgerIcon from '../burgerIcon/BurgerIcon';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import useOnClickOutside from '../../../utilities/useOnClickOutside';

interface ComponentProps {
  open: boolean;
  setOpen: any;
  navLinks: Array<string>;
}

function Burger({ open, setOpen, navLinks }: ComponentProps) {
  // const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  // closes menu when clicking anywhere outside of it
  useOnClickOutside(burgerRef, () => setOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} navLinks={navLinks} />
    </div>
  );
}

export default Burger;
