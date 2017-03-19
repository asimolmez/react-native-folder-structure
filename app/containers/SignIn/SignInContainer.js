import React, { Component, PropTypes } from 'react'
import SignIn from "./SignIn";
import { actions } from "../../redux/modules/Auth";

class SignInContainer extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    forgetPassword(email) {
        this.props.actions.forgetPassword(email, password);
    }

    signIn(email, password) {
        this.props.actions.signIn(email, password);
    }

    render() {
        return (
            <SignIn signIn={this.signIn.bind(this)} forgetPassword={this.forgetPassword.bind(this)} />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch)
})

export default SignInContainer