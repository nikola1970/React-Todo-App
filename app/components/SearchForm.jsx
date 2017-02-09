var React = require("react");


var SearchForm = React.createClass({

    filterItems: function(){
        return this.props.filterItems(this.refs.search.value);
    },

    render: function(){
        return (
            <div className="searchForm">
                <input type="text" ref="search" onChange={this.filterItems} className="form-control" placeholder="Search for a task"/>
            </div>
        );
    }

});

module.exports = SearchForm;