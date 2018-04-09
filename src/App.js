import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={name:'',age:'',city:'',stud:[]};
  }
  click=()=>{ 
    this.setState({
      name:this.refs.name.value, 
      age:this.refs.age.value,
      city:this.refs.city.value,
    });
  }
   searching=()=>{
     axios.get('http://localhost:3000/api/personaldata')
     .then((ambildata)=>{
       console.log(ambildata.data);
        this.setState({
          stud:ambildata.data,
        })
     })
   };

   muat=()=>{
    axios.post('http://localhost:3000/api/personaldata',
    {
      name: this.state.name,
      age: this.state.age,
      city: this.state.city,
    })
  }
  render() {
     const data=this.state.stud.map((item, index)=>{
       var nm =[item.name]
       var reg=[item.age] 
       var area=[item.city]
       return <tr key={index}><td>{nm}</td><td>{reg}</td><td>{area}</td></tr>
     });
    return (
      <div>
        <div className="container">
           <center>
              <h1>REACT TO LOOPBACK TO MLab</h1>
                  <div className="row">
                      <div className="col-lg-4">
                        <form>
                          <input className="form-control" ref="name" type="text" placeholder="name" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <input className="form-control" ref="age" type="number" placeholder="age" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <input className="form-control" ref="city" type="text" placeholder="city" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.muat();}}>post</button>
                        </form>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.searching();}}>get</button>
                      </div><br></br>
                  </div>
            </center>
              <br/>
              <center>
                  <table>
                    <tr>
                      <td>Name</td>
                      <td>Age</td>
                      <td>city</td>
                    </tr>
                      {data}
                  </table>
              </center> 
        </div>
      </div>
    );
  }
}

export default App;
