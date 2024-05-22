import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center py-5'>
        Copyright &copy; URLShortner: Aman 
    </div>
  );
};

export default Footer;
