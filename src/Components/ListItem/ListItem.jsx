import React from "react";
import "./Listitem.css";
import Button from "../Button/Button";

const ListItem = ({toDoName, remove}) => {
    return(
        <div className="item">
            <div className="text_item">
            {toDoName}
            </div>
            <Button
            name="remove task"
            onClick={() => 
                remove(toDoName)
            }
            />
        </div>
    );
}

export default ListItem