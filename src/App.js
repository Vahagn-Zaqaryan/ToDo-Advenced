import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Project from './Components/Project';
import AddProject from './Components/AddProject';
import DetailsProject from './Components/DetailsProject';
import{
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class App extends Component {
    constructor(){
        super();
        this.state = {project: []}
    }
    componentWillMount(){
        this.setState({ project: [
            {
                id: uuid.v4(),
                title: "Business Page",
                category: "Web Design"
            },
            {
                id: uuid.v4(),
                title: "Social App",
                category: "Mobile Dev"
            },
            {
                id: uuid.v4(),
                title: "Shopping Cart",
                category: "Web Dev"
            }
        ] });
    }
    handleAddProject(p){
        let projects = this.state.project;
        projects.push(p);
        this.setState({projects: projects});
    }
    handleDelProject(id){
        let project = this.state.project;
        let i = project.findIndex(x => x.id === id);
        project.splice(i, 1);
        this.setState({projects: project});
    }
    render() {
        return (
            <Router>
            <div className="App">
                <Route exact path='/' render={()=><AddProject addProject={this.handleAddProject.bind(this)}/>}/>
                <Route exact path='/' render={()=><Project projects={this.state.project} del={this.handleDelProject.bind(this)}/>}/>
                <Route path='/id/:id' render={()=><AddProject addProject={this.handleAddProject.bind(this)}/>}/>
                <Route path='/id/:id' render={({props, match}) => (<DetailsProject projects={this.state.project} params={match.params} url='info'/>)}/>
            </div>
            </Router>
        );
    }
}

export default App;
