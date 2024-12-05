import Error from '@/assets/gif/error.webp';

const InternetError = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10 max-width">
    <img src={Error} alt="error" width={150} height={150} className="rounded-full"/>
    <h4 className="text-xl font-bold text-center text-red-500">Failed to load products, Please check your internet connection.
    </h4>
  </div>
)
}

export default InternetError