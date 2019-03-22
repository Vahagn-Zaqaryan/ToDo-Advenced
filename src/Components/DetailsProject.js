import React, { Component } from 'react';
import './map.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class DetailsProject extends Component {

    render() {
        console.log(this);
        let id = this.props.params.id;
        let linkE = `/id/${id}/edit`;
        let linkI = `/id/${id}`;
        let basa = this.props.projects;
        let i = basa.findIndex(x => x.id === id);
        return (
          <div>
            <div className="map">
                {
                    this.props.url === 'info' ?
                    <div className='li activeAsidePanel'>
                        <div className='imgBox'>
                            <img src={ require('./img/info.png') } alt='Img'/>
                        </div>
                        <div className='textBox'>
                            <span>Info</span>
                        </div>
                    </div>
                    :
                    <Link to={linkI}>
                        <div className='li'>
                            <div className='imgBox'>
                                <img src={ require('./img/info.png') } alt='Img'/>
                            </div>
                            <div className='textBox'>
                                <span>Info</span>
                            </div>
                        </div>
                    </Link>
                }
                {
                    this.props.url === 'edit' ?
                    <div className='li activeAsidePanel'>
                        <div className='imgBox'>
                            <img src={ require('./img/edit.png') } alt='Img'/>
                        </div>
                        <div className='textBox'>
                            <span>Edit</span>
                        </div>
                    </div>
                    :
                    <Link to={linkE}>
                        <div className='li'>
                            <div className='imgBox'>
                                <img src={ require('./img/edit.png') } alt='Img'/>
                            </div>
                            <div className='textBox'>
                                <span>Edit</span>
                            </div>
                        </div>
                    </Link>
                }
                <Link to='/'>
                <div className='li'>
                    <div className='imgBox'>
                        <img src={ require('./img/home.png') } alt='Img'/>
                    </div>
                    <div className='textBox'>
                        <span>Home</span>
                    </div>
                </div>
                </Link>
            </div>
            <div className='content'>

                <h3>{basa[i].title}: </h3>{basa[i].category}
            </div>
            <div className='clear'></div>
          </div>
        );
    }
}

export default DetailsProject;
