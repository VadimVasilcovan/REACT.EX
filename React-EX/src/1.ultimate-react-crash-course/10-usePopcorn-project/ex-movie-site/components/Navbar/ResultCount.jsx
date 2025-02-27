
export function ResultCount({moviesdata}) {
    return <h2>Found {moviesdata.length} {moviesdata.length === 1 ? 'result' : 'results'}</h2>;
}
