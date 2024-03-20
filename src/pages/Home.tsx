import MainCarousel from "../components/Home/MainCarousel"
import MainTitle from "../components/Home/MainTitle";
import Description from "../components/UI/Description";
import Title from "../components/UI/Title";

export default function HomePage() {
  return (
    <>
      <main className="main-container relative">
        <MainCarousel />
        <MainTitle />
      </main>
      <article className="search-article__container">
        <div className="desktop__width-50">
          <Title title="Find Your Perfect Meal!" />
          <Description>
            {`Are you craving something specific? Or maybe you’re looking for inspiration for tonight’s dinner?
             Our search function is here to help! You can search by name, main ingredient, category, or area.
              Simply choose your preferred search type, type in your query, and we’ll provide a selection of
              delicious recipes tailored to your taste. From quick and easy meals to gourmet feasts, we have
                something for everyone. Start your culinary adventure with us today and find your perfect meal!`}
          </Description>
        </div>
        <div className="desktop__width-50">

        </div>
      </article>
    </>
  );
}
