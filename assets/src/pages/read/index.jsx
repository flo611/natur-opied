import React from "react";
import ImageSlider from "./slide";
import ChapterList from "./chapter-list";
import BreadCrumb from "./breadcrump";

const Read = () => {
  return (
    <>
      <section className="">
        <div className="grid justify-items-center">
          <div>
            <BreadCrumb />
          </div>
          <div>
            <ChapterList />
          </div>
          <ImageSlider />
        </div>
      </section>
    </>
  );
};
export default Read;
