const GlobalLoading = () => {
  return (
    <section className="relative">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="w-16 h-16 border-4 border-[#A4A20C] border-t-transparent rounded-full animate-spin" />
      </div>
    </section>
  );
};

export default GlobalLoading;
