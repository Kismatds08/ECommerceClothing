import React from 'react' 
 
class SignIn extends React.Component {
constructor (){
    super()
    this.state = {
        email: '',
        password: ''
    }
}

// handleEmail = event =>{
//     this.setState({email: event.target.value})
// }

// handlePassword = event =>{
//     this.setState({password: event.target.value})
// }

handleChange = event =>{
    const {name,value} = event.target
    this.setState({[name]:value})
}

handleSubmit = event =>{

    event.preventDefault() //prevents any default action to take place
    this.setState({email:'', password:''})
}

render(){
    console.log(this.state.email)
    return(
        <div className='sign-in'>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}name='email' type='email' value={this.state.email} required/>
                <label> Email</label>

                <input onChange={this.handleChange}name='password' type='password' value={this.state.password} required/>
                <label>Password</label>

                <input type='submit' value='Submit Form'/>
            </form>
        </div>
        )
    }
}

export default SignIn; 