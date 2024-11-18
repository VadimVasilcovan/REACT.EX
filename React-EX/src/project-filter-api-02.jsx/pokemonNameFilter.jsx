

import './parent-project-filter-api.02'

const PokemonNameFilter = ({nameFilter, setNameFilter, submitNameFilter, setSubmitNameFilter}) => {

    const WritePokemonName = (event) => {
        setNameFilter(event.target.value)
    }

    const SubmitPokemonNameFun = () => {
        setSubmitNameFilter([...submitNameFilter, nameFilter])
    }

    return(<>
    <p>Find your pokemon</p>
    <input
    onChange={WritePokemonName}
    type='text'
    value={nameFilter}
    />
    <button onClick={SubmitPokemonNameFun}>Submit</button>
    </>)
}

export default PokemonNameFilter 