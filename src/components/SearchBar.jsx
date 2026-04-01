

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {

    return (
        <form onSubmit={onSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
            />
            <button type="submit">Search</button>
        </form>
    );
}