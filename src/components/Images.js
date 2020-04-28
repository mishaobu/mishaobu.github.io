import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import ModalImage from "react-modal-image";

export default class Images extends Component {
    render() {
        return (
            <>
            <div>
            <br/>
            <h1>Gifs</h1>
            <br/>
            <div class="row">
              <div class="column">
                <ModalImage className = "ModalImage" small = "gifs/asleep_at_pc.webp" large = "gifs/asleep_at_pc.webp" />
                <ModalImage className = "ModalImage" small = "gifs/cat_money.webp" large = "gifs/cat_money.webp" />
                <ModalImage className = "ModalImage"  small = "gifs/purple_static.webp" large = "gifs/purple_static.webp" />
              </div>
              <div class="column">
                <ModalImage className = "ModalImage" small = "gifs/pond_water.webp" large = "gifs/pond_water.webp" />
                <ModalImage className = "ModalImage" small = "gifs/purple_cig.webp" large = "gifs/purple_cig.webp" />
                <ModalImage className = "ModalImage" small = "gifs/purple_stars.webp" large = "gifs/purple_stars.webp" />
              </div>
              <div class="column">
                <ModalImage className = "ModalImage" small = "gifs/rearview_mirror.gif" large = "gifs/rearview_mirror.gif" />
                <ModalImage className = "ModalImage" small = "gifs/tv_clouds.gif" large = "tv_clouds.gif" />
              </div>
              <div class="column">
                <ModalImage className = "ModalImage" small = "gifs/plant_rain.webp" large = "gifs/plant_rain.webp" />
                <ModalImage className = "ModalImage" small = "gifs/purple_road.webp" large = "gifs/purple_road.webp" />
                <ModalImage className = "ModalImage" small = "gifs/gun.gif" large = "gifs/gun.gif" />
              </div>
            </div>
          </div>
        

        
          <ScrollToTop showUnder={160}>
                <span>UP</span>
            </ScrollToTop>
        
          </>
        )
    }
}