import React from "react";
import "./styles.scss";
import Banner from "components/banner";
import PhotoForm from "features/photo/component/photoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  console.log("vo day222");
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
