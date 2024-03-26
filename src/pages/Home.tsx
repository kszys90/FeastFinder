import React, { ChangeEvent, FormEventHandler } from "react";
import MainCarousel from "../components/Home/MainCarousel"
import MainTitle from "../components/Home/MainTitle";
import Button from "../components/UI/Button";
import Description from "../components/UI/Description";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import FloatingInput from "../components/UI/FloatingInput";
import { featuredList } from "../assets/featured-categories/featured-list";
import FeaturedCard from "../components/Home/FeaturedCard";
import TestimonialsCarousel from "../components/Home/TestimonialsCarousel";



export default function HomePage() {
  const [searchType, setSearchType] = React.useState<'name' | 'ingredient' | 'category' | 'area' | 'letter'>('name')
  const [searchValue, setSearchValue] = React.useState<string>('')
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchValue)
    console.log(searchType)
  }
  return (
    <>
      <main id="main" className="relative">
        <MainCarousel />
        <MainTitle />
      </main>
      <article id="featured">
        <Title>Featured Categories</Title>
        <div className="featured__cards">
          {featuredList.map((el) =>
            <FeaturedCard key={el.name} img={el.img} name={el.name} />
          )}
        </div>
      </article>
      <article id="search">
        <div className="width-container search-container">
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
          <div className="desktop__width-50 search__second-container">
            <Subtitle>Select Search Type</Subtitle>
            <div className="search-type__items-container">
              <Button className={`search-type-button ${searchType === 'name' && `search-type-button--active`}`}
                onClick={() => setSearchType('name')}
              >Name
              </Button>
              <Button className={`search-type-button ${searchType === 'ingredient' && `search-type-button--active`}`}
                onClick={() => setSearchType('ingredient')}
              >Ingredient</Button>
              <Button className={`search-type-button ${searchType === 'category' && `search-type-button--active`}`}
                onClick={() => setSearchType('category')}
              >Category</Button>
              <Button className={`search-type-button ${searchType === 'area' && `search-type-button--active`}`}
                onClick={() => setSearchType('area')}
              >Area</Button>
              <Button className={`search-type-button ${searchType === 'letter' && `search-type-button--active`}`}
                onClick={() => setSearchType('letter')}
              >First letter</Button>
            </div>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <FloatingInput
                inputValue={searchValue}
                onChange={handleSearchInputChange}
                label={`search by ${searchType}...`}
                id="search-input" />
              <div className="container__items--center">
                <Button className="button center">Search</Button>
              </div>
            </form>
          </div>
        </div>
      </article>
      <article id="testimonials">
        <div className="width-container">
          <Title>Review from our regular users</Title>
          <div className="testimonials__carousel-container">
            <TestimonialsCarousel />
          </div>
        </div>
      </article>
      <article id="FAQ">

      </article>
    </>
  );
}
