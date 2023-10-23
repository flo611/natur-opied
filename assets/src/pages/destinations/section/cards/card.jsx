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
    } = this.props;
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <>
          <div className="card rounded-lg  p-8 mx-3 my-10 md:mx-28 lg:m-10 text-white ">
            <h1 className="flex text-xl justify-center my-2 font-bold">{title}</h1>
            <div className="contain flex flex-col items-center rounded-lg p-4 ">
              <p>{description}</p>
              <br />
              <img src={icon} alt="logo" className="hover:scale-150" width={200} height={200} />
              <div className="flex justify-center py-8  ">
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
          <div className="card rounded-lg  p-8 mx-3 my-10 md:mx-28 lg:m-10 text-white ">
            <h1 className="flex text-xl justify-center my-2 font-bold">{subtitle}</h1>
            <div className="contain flex flex-col items-center rounded-lg p-4 ">
              <p className="mx-4 font-bold underline">Descriptif:</p>
              {alldescription}
              <p className="font-bold pt-2 underline">Circuit:</p>
              <img
                className="my-6 hover:scale-150"
                src={photo}
                alt="profil parcours"
                width={300}
                height={300}
              />
              <div className="flex flex-row w-full justify-center">
                <a href={lien} className="my-2 text-2xl mx-4 hover:text-purple-900">
                  <SiReactos />{" "}
                </a>

                <a href={gpx} download="" className="my-2 text-2xl mx-4 hover:text-purple-900">
                  {" "}
                  <BsDownload /> {" "}
                </a>
              </div>
              <Button
                value="Retour"
                type="button"
                className="my-4 pt-2"
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
