export function Continers({ children, onCloseMovieList }) {
    return (
        <div className="Continers-div-trash-movies">
            <button onClick={onCloseMovieList}>x</button>
            {children}
        </div>
    );
}
