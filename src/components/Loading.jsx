const Loading = () => {
  return (
    <div class="max-w-5xl w-full h-screen mx-auto grid place-items-center">
      <div className="flex items-center text-neutral-900 disabled:pointer-events-none disabled:opacity-50 text-2xl font-medium text-center">
        <div class="h-6 w-6 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
        <span class="ml-2">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
