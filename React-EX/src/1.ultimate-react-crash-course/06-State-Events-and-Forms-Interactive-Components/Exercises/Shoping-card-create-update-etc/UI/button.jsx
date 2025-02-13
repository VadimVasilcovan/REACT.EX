export default function Button({ children, onClick, backgroundColor }) {
    return (
        <button 
            style={{ marginRight: 10, backgroundColor }} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}
