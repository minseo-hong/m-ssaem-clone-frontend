import styled from 'styled-components';

import { AiOutlineHome } from 'react-icons/ai';
import { FaPeopleArrows } from 'react-icons/fa';
import { SlSpeech } from 'react-icons/sl';
import { BsChat, BsSearch, BsStar, BsClipboard } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';

import NavActiveLink from '../common/NavActiveLink';

const MobileHeaderNavbarBlock = styled.nav`
  display: none;

  @media (max-width: 676px) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 2.25rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      a {
        display: block;
        font-size: 1.5rem;
        color: #000000;
        text-decoration: none;
        padding-bottom: 0;

        &:hover {
          color: #AC71EA;
          border-bottom: 4px solid #AC71EA;
        }

        &:active {
          color: #AC71EA;
          border-bottom: 4px solid #AC71EA;
        }
      }
    }
  }

  
`;

const MobileHeaderNavbar = () => {
  return (
    <MobileHeaderNavbarBlock className="mobile-navbar">
      <ul className="left">
        <li><NavActiveLink to="/"><AiOutlineHome /></NavActiveLink></li>
        <li><NavActiveLink to="/board"><BsClipboard /></NavActiveLink></li>
        <li><NavActiveLink to="/matching"><FaPeopleArrows /></NavActiveLink></li>
        <li><NavActiveLink to="/debate"><SlSpeech/></NavActiveLink></li>
      </ul>
      <ul className="right">
        <li><NavActiveLink to="/chat"><BsChat /></NavActiveLink></li>
        <li><NavActiveLink to="/notification"><GrNotification /></NavActiveLink></li>
        <li><NavActiveLink to="/favorite"><BsStar /></NavActiveLink></li>
        <li><NavActiveLink to="/search"><BsSearch /></NavActiveLink></li>
      </ul>
    </MobileHeaderNavbarBlock>
  );
}

export default MobileHeaderNavbar;
