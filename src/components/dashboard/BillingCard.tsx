const BillingCard = () => {
  return (
    <div className="p-5 pb-7 border border-[#E1E3EA]  rounded">
      <img src="/images/icons/Mastercard.png" alt="" />
      <h4 className="mt-3 text-[#3F4254] text-base font-normal">Jane Doe</h4>
      <div
        className="mt-1 text-[#5E6278] flex itece 
      justify-between gap-4 flex-wrap"
      >
        <span className="text-base">**** **** **** 2395</span>
        <span className="text-sm">Card expires on 10/24</span>
      </div>
    </div>
  );
};

export default BillingCard;
