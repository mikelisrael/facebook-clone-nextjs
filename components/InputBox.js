import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
  const { data, status } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      db.collection("posts")
        .add({
          message: inputRef.current.value,
          name: data.user.name,
          email: data.user.email,
          image: data.user.image,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((doc) => {
          if (imageToPost) {
            const upLoadTask = storage
              .ref(`posts/${doc.id}`)
              .putString(imageToPost, "data_url");

            removeImage();

            upLoadTask.on(
              "state_change",
              null,
              (error) => console.log(error),
              () => {
                //when the upload complete
                storage
                  .ref("posts")
                  .child(doc.id)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("posts").doc(doc.id).set(
                      {
                        postImage: url,
                      },
                      { merge: true }
                    );
                  });
              }
            );
          }
        });
    } else return;

    inputRef.current.value = "";
  };

  const handleImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (e) => {
      setImageToPost(e.target.result);
    };
  };

  const removeImage = () => setImageToPost(null);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 sm:scale-50 md:scale-100">
      <section className="flex space-x-4 p-4 items-center">
        {status === "authenticated" && (
          <Image
            className="rounded-full"
            src={data.user.image}
            width="40"
            height="40"
            layout="fixed"
          />
        )}

        <form className="flex flex-1" onSubmit={(e) => sendPost(e)}>
          <input
            type="text"
            placeholder={`What's on your mind, ${
              (data && data.user.name.split(" ")[0]) || ""
            }?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5"
            ref={inputRef}
          />
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer w-12"
          >
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-xs text-red-500">Remove</p>
          </div>
        )}
      </section>

      <section className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm capitalize">Live video</p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm capitalize">photo/video</p>
          <input
            type="file"
            hidden
            onChange={(e) => handleImage(e)}
            ref={filePickerRef}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm capitalize">feeling/activity</p>
        </div>
      </section>
    </div>
  );
};

export default InputBox;
