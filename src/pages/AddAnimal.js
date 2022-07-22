import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnimal = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");
  const [pictures, setPictures] = useState([]);
  const [description, setDescription] = useState("");
  const [admitionDate, setAdmitionDate] = useState(0);
  const [views, setViews] = useState(0);
  const [type, setType] = useState("");

  const handleSelect = e => {
    setType(e.target.value);
    console.log("selected", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const body = {
      type: type,
      name: name,
      breed: breed,
      age: age,
      weight: weight,
      profilePicture: profilePicture,
      pictures: pictures,
      description: description,
      admitionDate: admitionDate,
      views: views,
    };
    axios.post("http://localhost:3000/add", body).then((response) => {
      setType("")
      setName("");
      setBreed("");
      setAge("");
      setWeight("");
      setProfilePicture("");
      setPictures(0);
      setDescription("");
      setAdmitionDate("");
      setViews("");
    });
  };
  return (
    <div>
      <div className="beerForm">
        <form className="beerFormDataForm" onSubmit={handleSubmit}>

          <div className="selectAnimal">
            <label>Select add new Cat or Dog:</label>
            <select value={type} onChange={handleSelect}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Name: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Breed: </label>
            <input
              className="form-control"
              type="text"
              name="breed"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Age: </label>
            <textarea
              className="form-controlTA"
              type="text"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Weight </label>
            <input
              className="form-control"
              type="text"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Profile Picture: </label>
            <input
              className="form-control"
              type="file"
              name="profilePicture"
              accept="image/png, image/jpeg"
              onChange={(e) => setProfilePicture(e.target.value)}
              value={profilePicture}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Pictures: </label>
            <input
              className="form-control"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => setPictures(e.target.value)}
              value={pictures}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Description: </label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Admition Date: </label>
            <input
              className="form-control"
              type="text"
              name="admitionDate"
              onChange={(e) => setAdmitionDate(e.target.value)}
              value={admitionDate}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Views: </label>
            <input
              className="form-control"
              type="number"
              name="views"
              onChange={(e) => setViews(e.target.value)}
              value={views}
            />
          </div>
          <button type="submit" className="btn-danger">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnimal;
