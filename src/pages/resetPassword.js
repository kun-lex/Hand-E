import { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";

const ResetPassword = ( reset_password ) => {
    const [requestSent, setRequestSent] = useState(false);
    const [ formData, setFormData ] = useState({
        email: ''
    });

    const {email} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }
    <div>

    </div>
}

export default connect(null, {reset_password})(ResetPassword);