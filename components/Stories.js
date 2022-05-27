import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Songha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk", //
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://media.vanityfair.com/photos/5d41c7688df537000832361b/4:3/w_2668,h_2001,c_limit/GettyImages-945005812.jpg",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3">
      {stories.map((story) => (
        <StoryCard key={story.src} {...story} />
      ))}
    </div>
  );
};

export default Stories;
