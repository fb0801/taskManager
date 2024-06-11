'use client'

import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components/dist/constructors/styled'
import Image from 'next/image'


function Sidebar() {
const {theme} = useGlobalState();
  
  return <SidebarStyled theme={theme}>
      <div className='profile'>
        <div className="profile-overlay"></div>
        <div className="image">
      <Image width={70} height={70} src='/images/profile.jpg' alt='profile' />
      </div>
      <h1>
          <span></span>
      </h1>
      </div>
      <ul className='nav-items'>
        
      </ul>
    </SidebarStyled>
  
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2}
  border-radius: 1rem;
  ;
`; 

export default Sidebar;
