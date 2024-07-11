import React from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { initialSpecialty } from "../../../data/Specialties";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function HndSpecialties() {
  return (
    <>
      <div className="hndexams">
        <div className="slogan_box">
          <h2 className="header">Hnd Exams Papers</h2>
          <p className="header_slogan">
            Navigate Through Your Specific Department For Papers
          </p>
        </div>
        <div className="department">
          <span className="department_name">Engineering</span>
          <div className="flex">
            {/* /////////////////POPUP BOX//////////////////// */}
            <Popup
              trigger={<button className="btn"> Add Department </button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <div className="modal_heading">
                    <i className="close" onClick={close}>
                      &times;
                    </i>
                    <div className="modal_header"> Add Depapartment </div>
                  </div>
                  <div className="content">
                    <h3>Select A Category</h3>
                    <select className="category">
                      <option>School Of Engineering</option>
                      <option>School Of Buisness</option>
                      <option>School Of Agriculture</option>
                      <option>School Of Medical Science</option>
                    </select>
                    <h3>Department logo</h3>
                    <input
                      type="file"
                      className="category_logo"
                      placeholder="Max size 500kb"
                    />
                    <h3>Department Name</h3>
                    <input
                      type="text"
                      placeholder="..."
                      className="category_name"
                    />
                    <br />
                    <button className="category_btn">Submit</button>
                  </div>
                </div>
              )}
            </Popup>
            {/* ////////////END OF POPUP///////////////////////// */}
            <span className="btn">
              View all
              <span>
                <IoIosArrowForward />
              </span>
            </span>
          </div>
        </div>
        <div className="specialties">
          {initialSpecialty.map((specialty, index) => (
            <Specialty specialty={specialty} key={index} />
          ))}
        </div>          
      </div>
    </>
  );
}

function Specialty({ specialty }) {
  return (
    <>
      <div className="specialty">
        <div className="specialty_icon">
          <img src={specialty.image} alt={specialty.id} className="iconimage" />
        </div>
        <div>
          <p className="specialty_name">{specialty.name}</p>
          <p className="specialty_papers">{specialty.papers}</p>
          <Link to={specialty.path}>
            <button className="open">Revise</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HndSpecialties;
