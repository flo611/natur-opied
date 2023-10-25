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
          {/* <div className="card rounded-lg  p-8 mx-3 my-10 md:mx-28 lg:m-10 text-white ">
            <h1 className="flex text-xl justify-center my-2 font-bold">{title}</h1>
            <div className="contain flex flex-col items-center rounded-lg p-4 ">
              <p>{description}</p>
              <br />
              <img src={icon} alt="logo" className="hover:scale-150" width={200} height={200} />
              <div className="flex justify-center py-8 text-2xl ">
                <Button
                  value="En savoir +"
                  type="button"
                  onClick={this.handleClick}
                />
              </div>
            </div>
          </div> */}

<div class="w-60 h-80 bg-gray-200 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl">
    <img src={icon} alt="logo" />
  </div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">{title}</span>
        <p class="text-xs text-gray-700">{description}</p>
      </div>
      <span class="font-bold  text-red-600">new</span>
    </div>
    <Button
                  value="En savoir +"
                  type="button"
                  onClick={this.handleClick}
                />
  </div>
</div>
        </>
        <>
          {/* <div className="card rounded-lg  p-8 mx-3 my-10 md:mx-28 lg:m-10 text-white ">
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
              <div className="text-2xl">
              <Button
                value="Retour"
                type="button"
                className="my-4 pt-2 "
                onClick={this.handleClick}
              />
              </div>
            </div>
          </div> */}

        
          <div class="w-60 h-80 bg-gray-200 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl">
    <img src={photo} alt="profil parcours" />
  </div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">{subtitle}</span>
        <p class="text-xs text-gray-700">{alldescription}</p>
      </div>
      <div className="flex flex-row w-full justify-center">
                <a href={lien} className="my-2 text-2xl mx-4 hover:text-purple-900">
                  <SiReactos />{" "}
                </a>

                <a href={gpx} download="" className="my-2 text-2xl mx-4 hover:text-purple-900">
                  {" "}
                  <BsDownload /> {" "}
                </a>
              </div>
    </div>
    <Button
                   value="Retour"
                   type="button"
                   className="my-4 pt-2 "
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
