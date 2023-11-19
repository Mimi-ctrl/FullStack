const FilterForm = ({ show, handleShowChange}) => (
    <div>
        filter shown with<input value={show} onChange={handleShowChange}/>
    </div>
)

export default FilterForm
