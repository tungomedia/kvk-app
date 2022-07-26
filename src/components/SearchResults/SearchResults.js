import React from 'react';
import { Link } from "react-router-dom";

class SearchResults extends React.Component {

    handleBackButton(e) {
        e.preventDefault();
        this.props.handleBackButton();
    }


    render() {
        let backButton = '';
        if (this.props.showBackButton) {
          backButton = <Link to="/" onClick={this.handleBackButton.bind(this)} className="font-sans text-lg font-bold mb-3">&larr; Ga terug naar het overzicht</Link>
        }

        return (
            <div className="container mx-auto my-5">
                <div className="grid">
                    {backButton}
                </div>
                <div className="grid grid-cols-3 gap-2">

                {this.props.companies.map((company) => (
                    <div className="search-result mb-8" key={company.id}>
                        <img src={company.logo} alt={company.name} className="w-24 float-left mr-4"/>
                        <h2 className="font-sans text-xl font-bold">{company.name}</h2>
                        <address className="mb-4">
                        {company.zipCode} {company.streetName} - {company.city}
                        </address>
                        <Link to={`/companies/${company.id}/details`} className="underline">See details</Link>
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default SearchResults;