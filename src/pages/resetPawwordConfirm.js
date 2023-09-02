import { useState } from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { reset_password_confirm } from "../actions/auth"

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });
    const  { new_password, re_new_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return(
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input 
                        className=''
                        type='password'
                        placeholder=""
                        name=''
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength={6}
                        required
                    />
                </div>
                <div>
                    <input 
                        className=''
                        type='password'
                        placeholder=""
                        name=''
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength={6}
                        required
                    />
                </div>
                <button className='' type="submit" >Reset Password</button>
            </form>
        </div>
    )
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm)