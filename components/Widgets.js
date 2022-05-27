import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Sonny Songha",
    src: "https://links.papareact.com/zof",
  },
  {
    name: "Elon Musk", //
    src: "https://links.papareact.com/4zn",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://media.vanityfair.com/photos/5d41c7688df537000832361b/4:3/w_2668,h_2001,c_limit/GettyImages-945005812.jpg",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
  },
  {
    name: "James Bond",
    src: "https://links.papareact.com/r57",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5 mr-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} {...contact} />
      ))}
    </div>
  );
};

export default Widgets;
