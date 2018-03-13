import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_weather } from '../actions/index';

class Search_bar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            term: ''
        }
        this.on_input_change = this.on_input_change.bind(this);
        this.on_form_submit = this.on_form_submit.bind(this);
    }

    on_input_change(event) {
        this.setState({term: event.target.value});
    }

    on_form_submit(event) {
        event.preventDefault();
        this.props.fetch_weather(this.state.term);
        this.setState({ term: '' })
    }

    render(){
        return (
            <form onSubmit={ this.on_form_submit } className='input-group'>
                <input 
                    placeholder='Get a five day forecast in your favorite city'
                    className='form-control'
                    value={ this.state.term }
                    onChange={ this.on_input_change }
                />
                <span className='input-group-button'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetch_weather }, dispatch);
}
// null as first parameter is state is not needed in this container
export default connect(null, mapDispatchToProps)(Search_bar);