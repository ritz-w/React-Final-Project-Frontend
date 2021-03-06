import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'
import './ArtworkImage.css'

export default class ArtworkImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deleteButtonShown: false
        }
    }

    renderDeleteButton = () => {
        return this.state.deleteButtonShown ? <Icon className="close-button" name='x' size='big' onClick={() => this.props.deleteArtwork(this.props.selection.id)}/> : null
        }

    showDeleteButton = () => {
        this.setState({deleteButtonShown: true})
    }

    hideDeleteButton = () => {
        this.setState({deleteButtonShown: false})
    }


    render() {
        return (
            <div 
            onMouseEnter={this.showDeleteButton} 
            onMouseLeave={this.hideDeleteButton} 
            className="artwork-image"
            style={{
                background: `url(${this.props.selection.artwork.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                position: 'absolute'
              }}
            >
                <span>{this.renderDeleteButton()}</span>
                {this.props.children}
            </div>
        )
    }
}

