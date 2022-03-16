import { useState, useRef } from 'react';

import BurgerIcon from './BurgerIcon';
import BurgerMenu from './BurgerMenu';
import useOnClickOutside from '../../../utilities/useOnClickOutside';

function Burger() {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  // closes menu when clicking anywhere outside of it
  useOnClickOutside(burgerRef, () => setOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Burger;
