import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <style jsx>{`
        .layout {
          
        }
      `}
      </style>
    </div>
  );
};

export default Layout;