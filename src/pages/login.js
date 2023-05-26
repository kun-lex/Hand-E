import '../components/App.css'
// import Log from '../components/icons/log.svg';
import $ from 'jquery';
import Navbar from '../components/Navbar'

export default function Login(){
    function Slidefunction(){
        $(".info-item .btn").on("click", (function(){
            $(".container").toggleClass("log-in");
          }));
          $(".container-form .btn").on("click", (function(){
            $(".container").addClass("active");
          }));
          
    }
    return(
        <div>
            <Navbar />
            <div className="container">
            <div className="box"></div>
            <div className="container-forms">
                <div className="container-info">
                <div className="info-item">
                    <div className="table">
                    <div className="table-cell">
                        <p>
                        Have an account?
                        </p>
                        <div onClick={Slidefunction} className="btn">
                        Log in
                        </div>
                    </div>
                    </div>
                </div>
                <div className="info-item">
                    <div className="table">
                    <div className="table-cell">
                        <p>
                        Don't have an account? 
                        </p>
                        <div onClick={Slidefunction} className="btn">
                        Sign up
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container-form">
                <div className="form-item log-in">
                    <div className="table">
                    <div className="table-cell">
                        <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                        <div className="btn">
                        Log in
                        </div>
                        <div className="or-line"> <div class="hr-line"></div> <p>or</p> <div class="hr-line"></div> </div>
                        <button className="sign-with-google">Sign in with Google</button>
                    </div>
                    </div>
                </div>
                <div className="form-item sign-up">
                    <div className="table">
                    <div className="table-cell">
                        <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                        <div className="btn">
                        Sign up
                        </div>
                        <div className="or-line"> <div class="hr-line"></div> <p>or</p> <div class="hr-line"></div> </div>
                        <button className="sign-with-google">Sign in with Google</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
        </div>
    )
}