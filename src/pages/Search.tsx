import { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import Title from '../components/UI/Title'
import Button from '../components/UI/Button'
import SearchResults from '../components/Search/SearchResults'
import { searchByType } from '../api/mealsDB/getMeals'

function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newSearchParams = new URLSearchParams();
        for (const [name, value] of formData.entries()) {
            if (typeof value !== 'object' || !(value instanceof File)) {
                newSearchParams.append(name, value);
            }
        }
        setSearchParams(newSearchParams);
    };
    function isSearchByType(variable: any): variable is searchByType {
        return true
    }

    function checkSearchByType(searchBy: any) {
        if (searchBy !== null && searchBy !== false && isSearchByType(searchBy)) {
            return searchBy
        }
        return false
    }

    return (
        <div className='search-page__container'>
            <main className="search-page__main-container">
                <Title>Search & Select Your Feast</Title>
                <form onSubmit={handleSubmit} className='search-page__form-container'>
                    <input
                        name="search"
                        defaultValue={searchParams.get('search') || ''}
                        type="text"
                        required
                        placeholder='Search'
                        className='search-page__input'
                    />
                    <select
                        name="by"
                        defaultValue={searchParams.get('by') || ''}
                        required
                        className='search-page__select'

                    >
                        <option value="">Search by...</option>
                        <option value="name">Name</option>
                        <option value="ingredient">Ingredient</option>
                        <option value="category">Category</option>
                        <option value="area">Area</option>
                        <option value="first-letter">First Letter</option>
                    </select>
                    <Button className='button search-page__button'>Search</Button>
                </form>
            </main>
            <div className="search-page__results-container">
                {searchParams.get('search') && (
                    <SearchResults
                        searchedFor={searchParams.get('search')}
                        searchedBy={checkSearchByType(searchParams.get('by'))
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Search;
