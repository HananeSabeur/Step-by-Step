function login(){
return(
    <div>
        <h1> Login </h1>
        <div>
         <p>Email or Username</p>
         <input name="email" placeholder="email/username"></input>
        </div>
        <div>
         <p>password</p>
         <input name="password" placeholder="password" type="password"/>
        </div>
        <div>
        <button name="Log in ">Log in</button>
        </div>
    </div>
);

}
export default login