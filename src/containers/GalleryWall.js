import React, { Component } from 'react';
import './GalleryWall.css';
import ArtworkContainer from './ArtworkContainer'
import CaptionContainer from './CaptionContainer'
// import {Rnd} from 'react-rnd';
// import Caption from '../components/Caption'
// import Title from '../components/Title'
// import ArtworkImage from '../components/ArtworkImage'


export default class GalleryWall extends Component {

    renderSelectedArtworks = () => {
        return this.props.galleryInfo.user_selections.map(selection => {
            return (
                <ArtworkContainer 
                key={`artwork-container-${selection.artwork.id}`}
                selection={selection} 
                wallId={this.props.wallId} 
                user_id={this.props.currentUserId}
                deleteArtwork={this.props.deleteArtwork}
                setGalleriesState={this.props.setGalleriesState}

                />
                )})
    }

    renderCaptions = () => {
        return this.props.galleryInfo.captions.map(caption => {
            return (
                <CaptionContainer 
                key={`caption-container-${caption.id}`}
                caption={caption} 
                wallId={this.props.wallId} 
                user_id={this.props.currentUserId}
                setGalleriesState={this.props.setGalleriesState}
                editCaption={this.props.editCaption}
                deleteCaption={this.props.deleteCaption}
                />
            )
        })
    }

    render () {
        return (
            <div className="gallery-wall-container">
            {this.props.galleryInfo ? this.renderSelectedArtworks() : null}
            {this.props.galleryInfo ? this.renderCaptions() : null}
            {/* {this.renderTitles()}  */}
          </div>
        )
    }
}
