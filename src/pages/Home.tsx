import MainCarousel from "../components/Home/MainCarousel"
import MainTitle from "../components/Home/MainTitle";

export default function HomePage() {
  return (
    <>
      <main className="main-container relative">
        <MainCarousel />
        <MainTitle />
      </main>
    </>
  );
}
