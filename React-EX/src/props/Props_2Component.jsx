const ShowResult = ({ submitPerson }) => {
    return (
        <>
            <div>
                {submitPerson.map((name, index) => (
                    <div key={index}>{name}</div>
                ))}
            </div>
        </>
    );
};

export default ShowResult;
