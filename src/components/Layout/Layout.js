import React from 'react';

const Layout = (props) => {
  return (
    <>
        <>{props.header}</>
        <div className='container'>{props.menu}</div>
        <div className='container'>{props.content}</div>
        <>{props.footer}</>
    </>

  )
}

export default Layout;
