interface IProps {
  activeTab: number;
  step: number;
  name: string;
}

const Tab = ({ activeTab, name, step }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-6 h-6 rounded-full ${
          activeTab >= step ? "bg-primary" : "bg-[#D8D8E5] "
        } flex items-center justify-center text-white text-sm font-bold`}
      >
        {step}
      </div>
      <h3
        className={`text-sm ${
          activeTab >= step ? "text-dark" : "text-[#A1A5B7]"
        }`}
      >
        {name}
      </h3>
      {step !== 6 && (
        <img src="/images/icons/right-dark.png" className="ml-2" alt="" />
      )}
    </div>
  );
};

export default Tab;
