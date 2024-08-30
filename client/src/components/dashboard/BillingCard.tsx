const BillingCard = ({ billing }: { billing: Billing }) => {
  const { cardName, cardNumber, expiryDates } = billing || {};

  // convert last 4 digits card number
  // Convert the number to a string
  const numberString = cardNumber.toString();

  // Get the last four digits
  const lastFourDigits = numberString.slice(-4);

  return (
    <div className="p-5 pb-7 border border-[#E1E3EA]  rounded">
      <img src="/images/icons/Mastercard.png" alt="" />
      <h4 className="mt-3 text-[#3F4254] text-base font-normal">{cardName}</h4>
      <div
        className="mt-1 text-[#5E6278] flex itece 
      justify-between gap-4 flex-wrap"
      >
        <span className="text-base">**** **** **** {lastFourDigits}</span>
        <span className="text-sm">Card expires on {expiryDates}</span>
      </div>
    </div>
  );
};

export default BillingCard;
