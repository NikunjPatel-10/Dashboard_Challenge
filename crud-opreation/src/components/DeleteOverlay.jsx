import React from "react";
import "./DeleteOverlay.css";

function DeleteOverlay(props) {
  function handleConfirm() {
    props.onConfirm();
  }

  //   const [className, setClassName] = useState();
  function handleCancel() {
    // const model = document.querySelector(".modal");
    // model.classList.add("close_animation");
    props.onCancel();
  }

  return (
    <div className="overlay" onClick={handleCancel}>
      <div className="modal">
        <div className="actions-wrapper">
          <div>
            <p>Are you sure you want to delete?</p>

            <div className="actions">
              <button onClick={handleConfirm} className="confirm-btn">
                Confirm
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteOverlay;
