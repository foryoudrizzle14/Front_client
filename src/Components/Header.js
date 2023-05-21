import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Section>
        <HeaderItems>
        <Link to = "/">왕초닷컴</Link>
        </HeaderItems>
      <HeaderItems>
          <Link to = "/login">로그인</Link>
        </HeaderItems>
      <HeaderItems>
      <Link to = "/signup">회원가입</Link>
        </HeaderItems>
      <HeaderName>3조</HeaderName>
    </Section>
  )
}

export default Header

const Section = styled.section`
  margin: 15px 20px;
`;

const HeaderName = styled.span`
  float: right;
`
const HeaderItems = styled.span`
  align-item: center;
  padding: 20px;`