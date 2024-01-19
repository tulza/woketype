import TypeSettingsBar from "@components/TypeSettingsBar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">woketype</div>
      <TypeSettingsBar />
    </div>
  );
};

export default HomePage;
