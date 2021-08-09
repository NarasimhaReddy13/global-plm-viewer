import React from 'react'

// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';



import './SearchCriteria.css'


function SearchCriteria() {
    return(
        <div className="search-container">
            <div className="search-criteria-container">
                <h1 className="search-title"> Search Criteria </h1>
                <ul className="search-links">
                    <li> <a href="www.google.com" className='search-text'> Search </a></li> | 
                    <li> <a href="www.google.com" className='search-text'> Reset </a></li>
                </ul>
            </div>
            <div className='form-containers'>
                <div className="form-container">
                    <form>

                        <div className='aligining-items'>
                            <label htmlFor='docNum' className='label-text'> Doc Number/ID: </label>
                            <input type='text'id='docNum' className='input-text'/>
                        </div>

                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='typeOption'> Type: </label>
                            <select className='input-text' id='typeOption'>
                                <option value="all"> ALL </option>
                            </select>

                            {/* <FormControl>
                                <InputLabel htmlFor="grouped-native-select" className='label-text'>Grouping</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" className='input-text'>
                                <option aria-label="None" value="" />
                                <optgroup>
                                    <option value={1}> Hello </option>
                                    <option value={2}> All </option>
                                </optgroup>
                                </Select>
                            </FormControl> */}

                        </div>

                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='subType'> Sub-type: </label>
                            <select className='input-text' id='subType'>
                                <option value='subTypeAll'> ALL </option>
                            </select>
                        </div>

                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='owner'> Owner: </label>
                            <input type='text' className='input-text' id='owner'/>
                        </div>

                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='secured'> Include Secured: </label>
                            <input type='checkbox' className='input-text-checkbox' id='secured'/>
                        </div>

                    </form>
                </div>

                <div className="form-container">
                    <form>

                        <div className='aligining-items'>
                            <label htmlFor='description' className='label-text'> Description: </label>
                            <input type='text'id='description' className='input-text'/>
                        </div>
                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='divisions'> Divisions: </label>
                            <select className='input-text' id='divisions'>
                                <option value='divisionSelected'> All Divisions Selected </option>
                            </select>
                        </div>
                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='keywordField'> Keyword Field: </label>
                            <input type='text' className='input-text' id='keywordField'/>
                        </div>
                        <div className='aligining-items'>
                            <label className='label-text' htmlFor='results'> Results Limited to: </label>
                            <input type='text' className='input-text' placeholder='100' id='results'/>
                        </div>
                        <div className='aligining-items'>
                            <label className='label-text' htmlFor=''> Location: </label>
                            <input type='text' className='input-text'id='location'/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="search-criteria-container">
                <h1 className="search-title"> Search Results </h1>
                <ul className="search-links">
                    <li> <a href="www.google.com" className='search-text-x'> X </a></li> | 
                </ul>
            </div>
            <div className='tables-container'>
                <p> Doc Number/ID </p> | <p> Description </p> | <p> Sub Type </p> | <p> Rev. </p> | <p> Owner </p> | <p> Division </p>
            </div>
            <p> No Documents found for each criteria entered </p>
        </div>
    )
}
export default SearchCriteria