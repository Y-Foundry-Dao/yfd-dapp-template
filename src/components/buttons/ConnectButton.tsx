import { useWallet } from '@terra-money/wallet-provider';

const ConnectButton = () => {
  const { availableInstallations, availableConnections, connect } = useWallet();

  return (
    <div>
      <h1>Available Installations</h1>

      <div>
        {availableConnections.map(({ type, identifier, name, icon }) => (
          <button key={identifier} onClick={() => connect(type, identifier)}>
            <img
              src={icon}
              alt={name}
              style={{ width: '1em', height: '1em' }}
            />
            Connect {name} [{identifier}]
          </button>
        ))}
        {availableInstallations.map(({ type, identifier, name, icon, url }) => (
          <button key={identifier} onClick={() => (window.location.href = url)}>
            <img
              src={icon}
              alt={name}
              style={{ width: '1em', height: '1em' }}
            />
            Install {name} [{identifier}]
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectButton;
