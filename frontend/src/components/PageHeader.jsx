import Breadcrumbs from "./Breadcrumbs";

const PageHeader = ({ title, bgImage }) => {
  return (
    <header className="relative flex h-[340px] w-full flex-col items-center justify-center overflow-hidden pt-12 text-white md:h-[390px]">
      <img
        src={bgImage}
        loading="eager"
        decoding="async"
        fetchpriority="high"
        alt="Header"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b3b]/95 via-[#071b3b]/75 to-[#071b3b]/35" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-red-600/30 blur-3xl" />
      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-300">
          Karoseri Ambulans
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <Breadcrumbs />
      </div>
    </header>
  );
};
export default PageHeader;
