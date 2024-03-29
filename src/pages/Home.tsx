import Banner from "../features/home/Banner";
import ConnectFellows from "../features/home/ConnectFellows";
import FeaturedEvents from "../features/home/FeaturedEvents";
import LatestPosts from "../features/home/LatestPosts";

function Home() {
  return (
    <>
      <Banner />
      <FeaturedEvents />
      <ConnectFellows />
      <LatestPosts />
    </>
  );
}

export default Home;

