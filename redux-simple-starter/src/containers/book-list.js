import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }

}

function mapStateToProps(state) {
    // Whatever is returned will shou up as props
    // inside of Book List
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever select book is called the result should be passed
    // to all of our reducers
    return bindActionCreators( {
        selectBook: selectBook
    }, dispatch);
}

// Promote BookList from a component to a container - it need to know
// about this new disptch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);