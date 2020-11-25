import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { updateProfile } from "../../actions/user";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileInfo from "./components/ProfileInfo";

function Profile(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleUpdateProfile = (data, type) => {
    if (type === "INFO") {
      dispatch(updateProfile(data));
    }
    if (type === "AVATAR") {
      dispatch(updateProfile({ ...currentUser, avatar: data }));
    }
  };

  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Trang Cá Nhân</BreadcrumbItem>
        </div>
      </Breadcrumb>

      <section className="container section-name padding-y-sm">
        <div className=" card">
          <div className="card-body row">
            <div className="col-md-4">
              <ProfileAvatar
                avatar={currentUser.avatar}
                name={currentUser.name}
                surname={currentUser.surname}
                handleUpdateProfile={handleUpdateProfile}
              />
            </div>
            <div className="col-md-8">
              <ProfileInfo
                currentUser={currentUser}
                handleUpdateProfile={handleUpdateProfile}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Profile.propTypes = {};

export default Profile;
