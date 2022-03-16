import styled, { keyframes } from 'styled-components';

import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Discord } from '../assets/discord.svg';
import { ReactComponent as Telegram } from '../assets/Telegram.svg';

const colorChangeBlue = keyframes`
  100%{
    fill: #1F43BF; 
  }
`;

const StyledDiscordFooter = styled(Discord)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path {
    animation: ${colorChangeBlue} 0.15s linear forwards;
  }
`;

const StyledTwitterFooter = styled(Twitter)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path {
    animation: ${colorChangeBlue} 0.15s linear forwards;
  }
`;

const StyledTelegramFooter = styled(Telegram)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path {
    animation: ${colorChangeBlue} 0.15s linear forwards;
  }
`;

const socialInfo = {
  discord: {
    link: 'https://discord.gg/yfd',
    iconFooter: <StyledDiscordFooter />,
    text: 'discord'
  },
  telegram: {
    link: 'https://t.me/yfoundrydao',
    iconFooter: <StyledTelegramFooter />,
    text: 'telegram'
  },
  twitter: {
    link: 'https://twitter.com/yieldfoundrydao',
    iconFooter: <StyledTwitterFooter />,
    text: 'twitter'
  }
};

export const medium = 'https://medium.com/@yfoundry/';

export default socialInfo;