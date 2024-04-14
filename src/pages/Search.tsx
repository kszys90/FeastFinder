import { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

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

    return (
        <div className='search-page__container'>
            <form onSubmit={handleSubmit}>
                <input
                    name="search"
                    defaultValue={searchParams.get('search') || ''}
                    type="text"
                    required
                />
                <select
                    name="by"
                    defaultValue={searchParams.get('by') || ''}
                    required
                >
                    <option value="">Select filtering</option>
                    <option value="name">Name</option>
                    <option value="ingredient">Ingredient</option>
                    <option value="category">Category</option>
                    <option value="area">Area</option>
                    <option value="first-letter">First Letter</option>
                </select>
                <button type="submit">Search</button>
            </form>
            {searchParams.get('search') && (
                <p>Search for: {searchParams.get('search')}</p>
            )}
            {searchParams.get('by') && (
                <p>Search by: {searchParams.get('by')}</p>
            )}
        </div>
    );
}

export default Search;
