import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Monali",
                location:"karnal",
            }
        }
        //console.log(this.props.name +"Child Constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name +"Child Component Did Mount")
        const data = await fetch("https://api.github.com/users/monali-0830");
        const json = await data.json();

        this.setState({
            userInfo:json
        })

    }

    render(){
        const {userInfo} = this.state;
        
        return(
            <div className="user-card">
                    <img src={userInfo.avatar_url}></img>
                    <h1>Name - {userInfo.name}</h1>
                    <h3>Location - {userInfo.location}</h3>
                    <h4>Money is Honey</h4>
            </div>
        )
        }
}

export default UserClass;