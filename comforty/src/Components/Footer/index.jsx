import LogoStyle from '../LogoStyle';
import Facebook from '../../assets/svg/facebook.svg?react';
import Twitter from '../../assets/svg/twitter.svg?react';
import Instagram from '../../assets/svg/instagram.svg?react';
import Pinterest from '../../assets/svg/pinterest.svg?react';
import Youtube from '../../assets/svg/youtube.svg?react';
import PaymentPartner from '../../assets/svg/payment_partner.svg?react';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-8 border-t border-b border-gray-300">
        <div className="flex flex-wrap justify-between gap-2 px-4 mx-auto max-width">
          
          <div className="flex flex-col w-full sm:w-auto gap-[24px]">
            <LogoStyle/>
            <p className='max-w-[240px]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus </p>
            <div className="flex gap-[18px]">
                <Facebook className='social-media social-media:hover'/>
                <Twitter className='social-media social-media:hover'/>
                <Instagram className='social-media social-media:hover'/>
                <Pinterest className='social-media social-media:hover'/>
                <Youtube className='social-media social-media:hover'/>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <ul className="space-y-2">
              <h4 className="mb-2 text-lg font-semibold text-gray-700">CATEGORY</h4>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sofa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Armchair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Wing Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Desk Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Wooden Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Park Bench</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <ul className="space-y-2">
              <h4 className="mb-2 text-lg font-semibold text-gray-700">SUPPORT</h4>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help & Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="mb-2 text-lg font-semibold text-gray-700">NEWSLETTER</h4>
            <form className="flex gap-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="button">Subscribe</button>
            </form>
            <p className="mt-4 max-w-[250px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>

        </div>
      </div>
        <div className="flex items-center justify-between p-4 max-width">
          <span>
          @ 2021 - Blogy - Designed & Develop by Zakirsoft
          </span>
          <PaymentPartner className=''/>            
      
        </div>
      </div>
  )
}

export default Footer
