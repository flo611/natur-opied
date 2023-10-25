import Button from "../../../../components/tools/button";
import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { SiReactos } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    const {
      title,
      description,
      icon,
      subtitle,
      alldescription,
      lien,
      gpx,
      photo,
      best,
    } = this.props;
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <>
          <div className="w-96 h-auto bg-gray-900 p-3 flex flex-col gap-1 rounded-2xl">
            <div className="flex justify-center">
              <img src={icon} alt="logo" className="h-48 rounded-xl" />
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                  <span class="text-xl text-gray-200 font-bold">{title}</span>
                  <p class="text-xs text-gray-400 mt-2">{description}</p>
                </div>
                <span class="font-bold text-gray-200">{best}</span>
              </div>
              <div className="my-10 flex justify-center">
                <Button
                  value="En savoir +"
                  type="button"
                  onClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </>
        <>
          <div class="w-96 h-auto bg-gray-900 p-3 flex flex-col gap-1 rounded-2xl ">
            <div>
              <img
                src={photo}
                alt="profil parcours"
                className="hover:scale-150 rounded-xl h-48"
              />
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                  <span class="text-xl text-gray-200 font-bold ">{subtitle}</span>
                  <p class="text-xs text-gray-400">{alldescription}</p>
                
                <div className="flex flex-row w-full justify-center text-gray-200 my-4">
                  <a
                    href={lien}
                    className="my-2 text-2xl mx-4 hover:text-gray-600"
                  >
                    <SiReactos />{" "}
                  </a>

                  <a
                    href={gpx}
                    download=""
                    className="my-2 text-2xl mx-4 hover:text-gray-600"
                  >
                    {" "}
                    <BsDownload />{" "}
                  </a>
                </div>
                </div>
         
              </div>
              <Button
                value="Retour"
                type="button"
                className="my-4 mx-20 "
                onClick={this.handleClick}
              />
            </div>
          </div>
        </>
      </ReactCardFlip>
    );
  }
}
export default Card;
