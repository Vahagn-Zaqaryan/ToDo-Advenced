import React, { Component } from 'react';
import  { Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router' ;
import uuid from 'uuid';
import './nav.css';
class AddProject extends Component {
    state = {
        redirect: false
    };
    static defaultProps = {
        category: ['Web Dev', 'Mobile Dev', 'Web Design']
    };
    constructor(props){
        super(props);
        this.state = {newProject: {}}
    }
    handleSubmit(evn){
        if(this.refs.title.value === "")
            alert("Fuck you lil bitch title is fucking required NIGGAAAA!");
        else{
            this.setState({ newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function() {
                this.props.addProject(this.state.newProject);
            });
            this.setState({ redirect: true });
            this.refs.title.value = "";
        }
        evn.preventDefault();
    }
    componentDidMount(){
        this.nameInput.focus();
    }
    render() {
         const { redirect } = this.state;
        let categoryOption = this.props.category.map(option => {
            return <option key={option} value={option}>{option}</option>;
        });
        if (redirect && window.location.pathname !== '/') {
            return (
                <Switch>
                    <Redirect to='/'/>
                </Switch>
            );
        }
        return (
            <div className="nav">
                <div className='navIn'>
                <h3 className="text">Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <input type="text" ref="title" placeholder='Title'/>
                    </div>
                    <div>
                        <select ref="category">
                            {categoryOption}
                        </select>
                    </div>
                    <div>
                        <input type='submit' value='Add' id='input'  ref={(input) => { this.nameInput = input; }} />
                    </div>
                </form>
                <div className='clear'></div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddProject);
