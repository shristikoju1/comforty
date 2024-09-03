import React from 'react';
import Logo1 from '../../../assets/company_logo/logo1.png';
import Logo2 from '../../../assets/company_logo/logo2.png';
import Logo3 from '../../../assets/company_logo/logo3.png';
import Logo4 from '../../../assets/company_logo/logo4.png';
import Logo5 from '../../../assets/company_logo/logo5.png';
import Logo6 from '../../../assets/company_logo/logo6.png';
import Logo7 from '../../../assets/company_logo/logo7.png';

const companyLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Company = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-width max-h-[130px] mt-[100px] flex-wrap">
      {companyLogos.map((logo, index) => (
        <div key={index}>
          <img src={logo} alt={`Company Logo ${index + 1}`} className="w-auto" />
        </div>
      ))}
    </div>
  );
};

export default Company;
