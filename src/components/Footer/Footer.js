import React from 'react';
import PropTypes from 'prop-types';
import FooterWrapper, {
  // MenuWrapper,
  CopyrightArea,
  SecondaryFooter,
} from './Footer.style';
import Text from 'components/UI/Text/Text';

const Footer = ({ logo, menu, bgSrc, copyright, className, path }) => {
  return (
    <>
      <FooterWrapper id="footer" className={className} bg-img={bgSrc}>
        {logo && logo}
        <Text content="ABN" />
        <Text content="Address" />
        <Text content="Email" />
        <Text content="Phone" />
        {/* <p>ABN</p>
        <p style={{ marginTop: '0px' }}>address</p>
        <p>style={{ marginTop: '0px' }} email address</p>
        <p>style={{ marginTop: '0px' }}phone number</p> */}
        {/* {menu && <MenuWrapper>{menu}</MenuWrapper>} */}
        {copyright && <CopyrightArea>{copyright}</CopyrightArea>}
      </FooterWrapper>
      {!!path && <SecondaryFooter />}
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element,
  menu: PropTypes.element,
  bgSrc: PropTypes.string,
  copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Footer;
