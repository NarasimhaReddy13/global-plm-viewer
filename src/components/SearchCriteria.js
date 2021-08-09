import { Component } from 'react'
import {Button, Container, List} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import SearchResultsTable from './Table(Results)Container'
import Data from './Results.json'
import axios from 'axios';


// Where do we place the code to make GET Request --- In the componentDidMount() lifecycle method -- only once executed

const StyledButton = withStyles({
    root: { background: 'transparent', border: 'none', color: 'white',
      padding: '0 18px', fontSize: 14, fontWeight: 'bold'
    },
    label: { textTransform: 'capitalize',},
  })(Button);

const title = { flexGrow: 1,fontWeight: 'bold', color: 'white',fontSize: 14, paddingLeft: 10 };


class SearchCriteriaComponent extends Component {

    state = {results: false, docNumber: '', owner: '', description: '', limitedResults: '100', rows: '', type: "Procedure", division: 'Transportation Safety Division'}

    componentDidMount() {
        axios.get('http://localhost:9097/pdmvwr/documents')
        .then(response => {
            console.log(response)
            this.setState({rows: response.Data})
        })
        .catch(error => {
            console.log(error)
            this.setState({rows: Data})
        })

    }

    onChangeDocNumber = (event) => {
        this.setState({docNumber: event.target.value})
    }

    onChangeDescription = (event) => {
        this.setState({description: event.target.value})
    }

    resetData = () => {
        this.setState({docNumber: '', description: '', keyword: '', owner: '', location: '', 
        type: 'Procedure', division: 'Transportation Safety Division', subType: 'ALL', })
    }

    searchResults = (e) => {
        const { docNumber, type} = this.state

        e.preventDefault()

        this.setState({
            rows: Data.filter(each => (each.objectID === docNumber) || (each.objectType === type), (this.setState({results: true})))
        })
        
    }

    closeAndOpenSearchResults = () => {
        this.setState({results: false})
    }

    selectedType = (e) => {
        this.setState({type: e.target.value})
    }
    selectedDivision = (e) => {
        this.setState({division: e.target.value}, () => {console.log(this.state.division)})
    }

    submitForm = (e) => {
        e.preventDefault() // to avoid filled in data to lost ( or page not to refresh )
    }

    render() {
        const {docNumber, description, keyword, limitedResults, location, type, division} = this.state
        return(
        <Container maxWidth='xl'>
            <div position="relative" className='search-containers'>
                <p style={title}> Search Criteria </p>
                <List className='search-criteria-list'>
                    <StyledButton onClick={this.searchResults}> Search </StyledButton>
                    <li style={{color: 'white', fontWeight: 'bold', fontSize: '14px'}}> | </li>
                    <StyledButton onClick={this.resetData}> Reset </StyledButton>
                </List>
            </div>
            <form className='input-field' onSubmit={this.submitForm}>
                <div className='input-field-size'>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic1' className='label-color'> Doc Number/Id: </label>
                        <input id="outlined-basic1" className='input-text' value={docNumber} onChange={this.onChangeDocNumber}/>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic2' className='label-color'> Type:  </label>
                        <select value={type} id="outlined-basic2" variant="outlined" className='input-text' onChange={this.selectedType}>
                            <option value='Software'> Software </option>
                            <option value='Procedure'> Procedure </option>
                            <option value='Regulatory'> Regulatory </option>
                            <option value='Generic Specification'> Generic Specification </option>
                            <option value='Form'> Form </option>
                        </select>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic3' className='label-color'> Sub-Type: </label>
                        <select id="outlined-basic3" variant="outlined" className='input-text'>
                            <option value='All'> ALL </option>
                        </select>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic4' className='label-color'> Owner: </label>
                        <input id="outlined-basic4" className='input-text'/>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic5' className='label-color'> Include Secured: </label>
                        <input type='checkbox' className='input-text1' id='outlined-basic5'/>
                    </div>
                </div>
                <div className='input-field-size'>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic6' className='label-color'> Description: </label>
                        <input id="outlined-basic6" variant="outlined" value={description} className='input-text' onChange={this.onChangeDescription}/>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic7' className='label-color'> Division: </label>
                        <select value={division} id="outlined-basic7" variant="outlined" className='input-text' onChange={this.selectedDivision}>
                            <option value='Transportation Safety Division'> Transportation Safety Division </option>
                            <option value='Health Care Business Sponsor'> Health Care Business Sponsor </option>
                            <option value='Abrasive Systems Division'> Abrasive Systems Division </option>
                        </select>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic8' className='label-color'> Keyword Field: </label>
                        <input id="outlined-basic8" className='input-text' value={keyword} onChange={this.onChangeKeyword}/>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic9' className='label-color'> Results Limited to: </label>
                        <input id="outlined-basic9" value={limitedResults} className='input-text' readOnly='readonly'/>
                    </div>
                    <div className='aligining-items'>
                        <label htmlFor = 'outlined-basic10' className='label-color'> Location: </label>
                        <input id="outlined-basic10" className='input-text' value={location} onChange={this.location}/>            
                    </div>
                </div>
            </form>

            <div className="search-containers">
                <p style={title}> Search Results </p>
                <List className='search-criteria-list'>
                    <StyledButton style={{fontSize: '12px'}} onClick={this.closeAndOpenSearchResults}> x </StyledButton>
                </List>
            </div>

            {<SearchResultsTable rows={this.state.rows} results={this.state.results} documentNum = {this.state.docNumber} />}
        </Container>
        )
    }             
}

export default SearchCriteriaComponent