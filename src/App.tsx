import { useState } from 'react';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import FooterBar from 'components/footer/footerBar/FooterBar';
import socialInfo from 'utilities/socialInfo';

export default function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main>
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
        open={open}
        setOpen={setOpen}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
