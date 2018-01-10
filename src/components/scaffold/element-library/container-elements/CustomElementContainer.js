import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValueOfElement } from '../../../../actions';

function CreateCustomElementContainer(Element, id) {

    class CustomElementContainer extends Component {
        constructor(props) {
            super(props);

            this.handleSetValue = this.handleSetValue.bind(this);
        }
        handleSetValue(value) {
            this.props.setValueOfElement(value, id)
        }
        render() {
            console.log(this.props.options)
            return (
                <Element value={this.props.value}
                    setValue={this.handleSetValue} 
                    style={this.props.options && this.props.options.style}>
                    {this.props.children}
                </Element>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { value, options } = state.elements[id]
        return {
            id,
            value,
            options,
        }
    };

    const mapDispatchToProps = (dispatch) => ({
        setValueOfElement: (value, id ) => dispatch(setValueOfElement(value, id))
    })
    return connect(mapStateToProps, mapDispatchToProps)(CustomElementContainer);
}

export default CreateCustomElementContainer