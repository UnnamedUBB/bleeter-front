import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.tsx";

function ProfileInfo() {
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedDescription(description);
  };

  const handleSaveClick = () => {
    setDescription(editedDescription);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="relative w-full">
        <img className="h-64 w-full object-cover rounded-t-lg" src="bgimg.jpg" alt="Background" />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Avatar className="shadow-lg border-4 m-2 border-white rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
            <AvatarFallback className="rounded-full">CN</AvatarFallback>
          </Avatar>
          <button>Prześlij zdjęcie</button>
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="font-bold text-3xl">Jacek Jaworek</p>
      </div>

      <div className="mt-5 px-10">
        {isEditing ? (
          <>
            <p className="font-semibold text-xl">O mnie:</p>
            <textarea
              className="mt-3 text-justify text-gray-200 bg-slate-800 leading-relaxed w-1/2"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <div className="mt-3">
              <button className="btn bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl w-20 h-10 mr-2" onClick={handleSaveClick}>Zapisz</button>
              <button className="btn bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl w-20 h-10" onClick={handleCancelClick}>Anuluj</button>
            </div>
          </>
        ) : (
          <>
            <p className="font-semibold text-xl">O mnie:</p>
            <p className="mt-3 text-justify text-gray-200 leading-relaxed">{description}</p>
            <button className="btn bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl w-20 h-10" onClick={handleEditClick}>Edytuj</button>
          
          </>
        )}
      </div>
    </>
  );
}

export default ProfileInfo;
