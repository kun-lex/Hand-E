import '../components/App.css'
// import Log from '../components/icons/log.svg';
import $ from 'jquery';
import Navbar from '../components/Navbar'

export default function Login(){
    function Log_ani(){
        $(".info-item .btn").click(function(){
            $(".container").toggleClass("log-in");
          });
          $(".container-form .btn").click(function(){
            $(".container").addClass("active");
          });
    }
    return(
        <div>
            <Navbar />
            <div class="container">
            <div class="box"></div>
            <div class="container-forms">
                <div class="container-info">
                <div class="info-item">
                    <div class="table">
                    <div class="table-cell">
                        <p>
                        Have an account?
                        </p>
                        <div class="btn" onClick={Log_ani}>
                        Log in
                        </div>
                    </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="table">
                    <div class="table-cell">
                        <p>
                        Don't have an account? 
                        </p>
                        <div class="btn" onClick={Log_ani}>
                        Sign up
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="container-form">
                <div class="form-item log-in">
                    <div class="table">
                    <div class="table-cell">
                        <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                        <div class="btn">
                        Log in
                        </div>
                        <div class="or-line"> <div class="hr-line"></div> <p>or</p> <div class="hr-line"></div> </div>
                        <button class="sign-with-google">Sign in with Google</button>
                    </div>
                    </div>
                </div>
                <div class="form-item sign-up">
                    <div class="table">
                    <div class="table-cell">
                        <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
                        <div class="btn">
                        Sign up
                        </div>
                        <div class="or-line"> <div class="hr-line"></div> <p>or</p> <div class="hr-line"></div> </div>
                        <button class="sign-with-google">Sign in with Google</button>
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