import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)} 
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    // and will be available via 'this.props'
    return {
        books: state.books
    };
}

// anything returned by this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, result should be passed to
    // all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
