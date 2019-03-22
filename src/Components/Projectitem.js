import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';
class Projectitem extends Component {
    del(id){
        this.props.onDel(id);
    }
    render() {
        let link = `/id/${this.props.project.id}`;
        return (
            <li className="Projects">
                <Link to={link}>
                    <strong>{this.props.project.title}</strong>: {this.props.project.category}
                </Link>
                <span href="#" onClick={this.del.bind(this, this.props.project.id)}>×</span>
            </li>
        );
    }
}

export default Projectitem;
