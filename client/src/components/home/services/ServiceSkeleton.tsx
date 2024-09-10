const ServiceSkeleton = () => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded">
        <div className="w-full h-48 bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
        </div>
        <div className="mt-[10px]">
          <div className="inline-block px-2 py-[1px] rounded-full bg-gray-200 animate-pulse w-1/3"></div>

          <div className="mt-3 h-6 bg-gray-200 animate-pulse rounded w-full"></div>

          <div className="mt-3 h-6 bg-gray-200 animate-pulse rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSkeleton;
