import React, { Component } from 'react';
import Projectitem from './Projectitem';
import './project.css'
class Project extends Component {
    onDel(id){
        this.props.del(id);
    }
    render() {
        let projectItem;
        if(this.props.projects){
            projectItem = this.props.projects.map(project => {
                // console.log(project);
                return (
                    <Projectitem key={project.id} project={project} onDel={this.onDel.bind(this)} />
                );
            });
        }
        return (
            <div className="ProjectBox">
                <div className="Project">
                    {projectItem}
                </div>
            </div>
        );
    }
}

export default Project;
