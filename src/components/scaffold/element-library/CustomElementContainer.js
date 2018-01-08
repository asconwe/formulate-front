import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValueOfElement } from '../../../actions';

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
            return (
                <Element value={this.props.value}
                    setValue={this.handleSetValue} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            id: state.structureContent[id].id,
            value: state.structureContent[id].value
        }
    };

    const mapDispatchToProps = (dispatch) => ({
        setValueOfElement: (value, id) => dispatch(setValueOfElement(value, id))
    })
    return connect(mapStateToProps, mapDispatchToProps)(CustomElementContainer);
}

export default CreateCustomElementContainer