export function useClickEnter(handleAddToDo) {
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                handleAddToDo();
            }
        };
        document.addEventListener('keydown', handleEnter);
        return () => {
            document.removeEventListener('keydown', handleEnter);
        };
    }, [handleAddToDo]);
}
