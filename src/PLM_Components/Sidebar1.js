import './Sidebar1.css'
import Sidebar2 from './Sidebar2'
import SearchCriteria from './SearchCriteria'

function Sidebar1() {
    return(
        <div className='sidebars-criteria-container'>
            <div className='sidebar-search-container'>
                <div className='sidebar-container'>
                    <h1 className="quick-link-heading"> Quick Links </h1>
                    
                    <ul className="quick-link-container">
                        <li> <a href="www.google.com" className="quick-link"> Home </a></li>
                        <li> <a href="www.google.com" className="quick-link"> Global PLM Information Center </a></li>
                    </ul>
                </div>
                <Sidebar2/>
            </div>
            <SearchCriteria/>
        </div>
    )
}
export default Sidebar1