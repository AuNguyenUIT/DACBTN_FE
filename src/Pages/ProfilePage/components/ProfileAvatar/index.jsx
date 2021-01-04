import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.scss";

function ProfileAvatar(props) {
  const { name, avatar, surname, handleUpdateProfile } = props;
  const [urlAvatar, setUrlAvatar] = useState(avatar);

  return (
    <>
      <div className=" avatar text-center img-lg rounded-circle">
        <img
          src={`${urlAvatar}`}
          alt={`${name + " " + surname}`}
          className="img-lg rounded-circle"
        ></img>
        <label htmlFor="avatar" className="avatar-change">
          <i className="fa fa-camera" aria-hidden="true"></i>
        </label>

        <input
          id="avatar"
          name="avatar"
          className="form-control d-none"
          type="file"
          onChange={(event) => {
            if (event.target.files[0]) {
              const imageFile = event.target.files[0];
              if (imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                let document = "";
                let reader = new FileReader();
                reader.readAsDataURL(imageFile);
                reader.onload = function () {
                  document = reader.result;
                  setUrlAvatar(document);
                  handleUpdateProfile(document, "AVATAR");
                };
                reader.onerror = function (error) {
                  console.log("Error: ", error);
                };
              }
            }
          }}
        />
      </div>
    </>
  );
}

ProfileAvatar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  surname: PropTypes.string,
  handleUpdateProfile: PropTypes.func,
};
ProfileAvatar.defaultProps = {
  name: "",
  avatar: "",
  surname: "",
  handleUpdateProfile: () => {},
};

export default ProfileAvatar;
