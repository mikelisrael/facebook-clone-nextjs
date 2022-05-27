import { ShareIcon, ThumbUpIcon, ChatAltIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Post = ({ name, message, email, postImage, image, timestamp }) => {
  return (
    <article className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={image}
              width="40"
              height="40"
              className="rounded-full"
              alt={name}
            />
            <div>
              <p className="font-medium">{name}</p>

              {timestamp ? (
                <p className="text-xs text-gray-400">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </p>
              ) : (
                <p className="text-xs text-gray-400">loading...</p>
              )}
            </div>
          </div>

          <DotsVerticalIcon className="h-9 w-9 text-gray-600 rounded-full hover:bg-gray-100 p-2 cursor-pointer  duration-200" />
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <footer className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none p-3">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none p-3">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none p-3">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </footer>
    </article>
  );
};

export default Post;
