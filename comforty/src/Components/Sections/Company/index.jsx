import Logo1 from '../../../assets/company_logo/logo1.svg';
import Logo2 from '../../../assets/company_logo/logo2.svg';
import Logo3 from '../../../assets/company_logo/logo3.svg';
import Logo4 from '../../../assets/company_logo/logo4.svg';
import Logo5 from '../../../assets/company_logo/logo5.svg';
import Logo6 from '../../../assets/company_logo/logo6.svg';
import Logo7 from '../../../assets/company_logo/logo7.svg';

const companyLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Company = () => {
  return (
    <div className="mx-auto mt-6 grid-layout max-width">
      {companyLogos.map((logo, index) => (
        <div key={index}>
          <img src={logo} alt={`Company Logo ${index + 1}`} className="w-auto" />
        </div>
      ))}
    </div>
  );
};

export default Company;
