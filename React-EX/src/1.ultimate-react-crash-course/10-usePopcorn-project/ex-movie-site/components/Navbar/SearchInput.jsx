export function SearchInput({setQuery, query}) {
    return (
        <>
            <input 
            value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </>
    );
}
