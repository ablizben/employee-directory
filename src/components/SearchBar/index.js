import React, { useContext } from "react";
import "./SearchBar.css";
import EmployeeInfoContext from "../../utils/EmployeeInfoContext";

const SearchBar = () => {
    const context = useContext(EmployeeInfoContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter Name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                
                <button className="btn my-2 my-sm-0" type="submit">
                    Search For Employee
                 </button>
            </form>
        </div>
    );
}
export default SearchBar;