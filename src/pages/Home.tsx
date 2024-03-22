import React, { ChangeEvent } from "react";
import MainCarousel from "../components/Home/MainCarousel"
import MainTitle from "../components/Home/MainTitle";
import Button from "../components/UI/Button";
import Description from "../components/UI/Description";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import FloatingInput from "../components/UI/FloatingInput";

export default function HomePage() {
  const [searchType, setSearchType] = React.useState<'name' | 'ingredient' | 'category' | 'area'>('name')
  const [searchValue, setSearchValue] = React.useState<string>('')
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  return (
    <>
      <main className="main-container relative">
        <MainCarousel />
        <MainTitle />
      </main>
      <article className="search-article__container">
        <div className="desktop__width-50">
          <Title>Find Your Perfect Meal!</Title>
          <Description>
            {`Are you craving something specific? Or maybe you’re looking for inspiration for tonight’s dinner?
             Our search function is here to help! You can search by name, main ingredient, category, or area.
              Simply choose your preferred search type, type in your query, and we’ll provide a selection of
              delicious recipes tailored to your taste. From quick and easy meals to gourmet feasts, we have
                something for everyone. Start your culinary adventure with us today and find your perfect meal!`}
          </Description>
        </div>
        <div className="desktop__width-50">
          <Subtitle>Select Search Type</Subtitle>
          <form className="search-form" >
            <FloatingInput
              inputValue={searchValue}
              onChange={handleSearchInputChange}
              label={`search by ${searchType}...`}
              id="search" />
            <Button>Search</Button>
          </form>
        </div>
      </article>
    </>
  );
}
