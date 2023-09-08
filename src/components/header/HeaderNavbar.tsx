import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci'

import NavActiveLink from '../common/NavActiveLink';

const HeaderNavbarBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 2.25rem;

  @media (max-width: 676px) {
    display: none;
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
        color: #000000;
        text-decoration: none;
        padding-bottom: 0.5rem;

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

    .search-icon {
      a {
        font-size: 1.5rem;
        padding-bottom: 0;
      }
    }
  }
`;

const HeaderNavbar = ({ ...rest }) => {
  return (
    <HeaderNavbarBlock { ...rest }>
      <ul className="left">
        <li><NavActiveLink to="/">Home</NavActiveLink></li>
        <li><NavActiveLink to="/board">게시판</NavActiveLink></li>
        <li><NavActiveLink to="/matching">M쌤 매칭</NavActiveLink></li>
        <li><NavActiveLink to="/debate">MBTI 과몰입 토론</NavActiveLink></li>
      </ul>
      <ul className="right">
        <li><NavActiveLink to="/chat">채팅</NavActiveLink></li>
        <li><NavActiveLink to="/notification">알림</NavActiveLink></li>
        <li><NavActiveLink to="/favorite">즐겨찾기</NavActiveLink></li>
        <li className="search-icon"><NavActiveLink to="/search"><CiSearch /></NavActiveLink></li>
      </ul>
    </HeaderNavbarBlock>
  );
}

export default HeaderNavbar;
