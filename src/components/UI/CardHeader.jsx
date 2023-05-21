import React, { useEffect, useState } from "react";
import {
  FullscreenOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const CardHeader = (props) => {
  const [showIcon, setShowIcon] = useState(true);

  /**
   for hide two icons in Health component
   * 
   */
  useEffect(() => {
    let title = props.title;
    if (title === "Health") {
      setShowIcon(false);
    }
  }, []);
  return (
    <div className="d-flex justify-content-between ">
      <h5 className="d-flex justify-content-center align-items-center text-gray mb-0">
        {props.title}
      </h5>
      <div>
        <nav className="d-flex">
          {showIcon && (
            <div className="nav-action">
              <FullscreenOutlined />
            </div>
          )}

          {showIcon && (
            <div className="nav-action">
              <SettingOutlined />
            </div>
          )}
          <div className="nav-action">
            <QuestionCircleOutlined />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CardHeader;
