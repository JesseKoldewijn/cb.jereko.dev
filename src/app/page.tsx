import ExtOverview from "~/components/tables/extOverview";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Welcome to CB Jereko!</h1>
      <div className="flex h-[70svh] w-full max-w-4xl flex-col overflow-auto">
        <ExtOverview />
      </div>
    </main>
  );
};
export default HomePage;
