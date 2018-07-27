// import React from 'react';
// import axios from 'axios';

// class UserSignupForm extends React.Component { 
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       name: '',
//       email: '',
//       password: '',
//       password2: '',
//       errors: {}

//     }

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({[e.target.username]: e.target.value});
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newUser2 = {
//       username: this.state.username,
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2
//     };

//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//         <form>
//           <h1>Create Your Account Here</h1>
//           <div className="form-group">
//             <label className="control-group">User Name</label>
//             <input
//             type='text'
//             name='username'
//             className='form-control' />

//             <label className="control-group"> Name</label>
//             <input
//             type='text'
//             name='name'
//             className='form-control' />
//             <label className="control-group">Email</label>
//             <input
//             type='text'
//             name='email'
//             className='form-control' />
//             <label className="control-group">Password</label>
//             <input
//             type='text'
//             name='password'
//             className='form-control' />
//           <label className="control-group">Password2</label>
//           <input
//             type='text'
//             name='password2'
//             className='form-control' />
//           </div>
//           </form>

//           <div className="form-group">
//           <button className="btn btn-primary btn-lg">Sign up</button>
//           </div>
//       </div>
//       </div>
//     )
//   };

//   signup() {
//     axios.post('/api/users/signup', this.state).then(() => {
//       alert('success')
//     }).catch((err) => {
//       console.log('error')
//     });  
//   };
// }

// export default UserSignupForm;