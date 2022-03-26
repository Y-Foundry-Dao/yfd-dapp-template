import Input from 'components/inputs/Input';
import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import yLogo from 'assets/yfd/logo-orange.svg';
import { useState } from 'react';
import { ConnectSample } from 'components/samples/ConnectSample';
import ConnectButton from 'components/buttons/ConnectButton';

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
      <p>Hello World</p>
      <Input />
      <ConnectSample />
      <ConnectButton />
    </main>
  );
}
