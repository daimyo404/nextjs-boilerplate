import { Suspense } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AlwaysSuspend: React.FC = () => {
  throw sleep(1000);
};

const Home = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <AlwaysSuspend />
    </Suspense>
  );
};

export default Home;
