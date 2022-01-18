import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
   },
  {
    title: 'RTable',
    path: '/table',
    icon: <AiIcons.AiOutlineTable />,
    cName: 'nav-text'
  },
  {
    title: 'RTableData',
    path: '/data',
    icon: <AiIcons.AiFillDatabase />,
    cName: 'nav-text'
  }
];