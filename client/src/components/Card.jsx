
const Card = () => {
  return (
    <div className="flex flex-col gap-10 c-card   rounded-md p-5">
      <div>
        <h2 className="text-2xl font-semibold text-white ">Top Spending</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 h-[15vh] lg:w-full md:m-auto md:h-[25vh] w-full overflow-y-auto place-content-start">
        <div className="border-2 border-custom-gray rounded-2xl w-full p-5 flex flex-row justify-between items-center">
          <div>
            <div className="bg-[#000000] rounded-full p-3 w-12 inline-block align-middle">
              <img className="w-10" src={cardImage} alt="" />
            </div>
            <div className="inline-block align-middle ms-2">
              <p className="font-extrabold">School</p>
            </div>
          </div>
          <div className="text-end">
            <p className="font-semibold">-1500</p>
            <span className="text-end font-extrabold text-sm text-secondary">
              02-08-2003
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
