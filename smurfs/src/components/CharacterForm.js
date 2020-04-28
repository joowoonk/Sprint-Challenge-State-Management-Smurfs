import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import "./"

import axios from "axios";

import {
  characterAction,
  postSmurfAction,
} from "../store/actions/characterAction";

const CharacterForm = (props) => {
  const [formState, setFormState] = useState([
    {
      name: "",
      age: "",
      height: "",
      // id: ""
    },
  ]);

  const [post, setPost] = useState([]);
  // console.log({ post });
  useEffect(() => {
    props.characterAction();
  }, []);

  const handleChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    setFormState(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.postSmurfAction(formState);
    setFormState({
      name: "",
      age: "",
      height: "",
    });
  };
  console.log("props.characters", props.data);
  return (
    <div>
      <form>
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Your age
          <input
            type="text"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="height">
          Your height
          <input
            type="text"
            name="height"
            value={formState.height}
            onChange={handleChange}
          />
        </label>
        <button onClick={(event) => handleSubmit(event)}>Submit!</button>
      </form>
      <section className="characters">
        {props.data.map((character) => {
          return (
            <div key={character.id}>
              <h2>Name:{character.name}</h2>
              <h3>Age:{character.age}</h3>
              <h3>Height:{character.height}</h3>
              <p>ID:{character.id}</p>
            </div>
          );
        })}
        {/* {console.log("props.characters", props.characters)} */}
        {/* {props.data.map((newCharacter) => {
          return (
            <div key={newCharacter.id}>
              <h2>Name:{newCharacter.name}</h2>
              <h3>Age:{newCharacter.age}</h3>
              <h3>Height:{newCharacter.height}</h3>
              <p>Id:{newCharacter.id}</p>
            </div>
          );
        })} */}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state from mapStateToPros", state);
  return {
    data: state.character.data,
    isFetching: state.character.isFetching,
    // characters: state.character.characters,
  };
};

export default connect(mapStateToProps, { characterAction, postSmurfAction })(
  CharacterForm
);
