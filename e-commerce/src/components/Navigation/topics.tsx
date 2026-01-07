import NavigationItem from "./NavigationItem";
import Dropdown from "./Dropdown";

const topics = [
  {
    name: "Crimps",
    items: ["Micro Crimps", "Small Crimps", "Medium Crimps", "Rails"],
  },
  {
    name: "Jugs",
    items: ["Mini Jugs", "Medium Jugs", "Large Jugs", "Mega Jugs"],
  },
  {
    name: "Slopers",
    items: ["Small Slopers", "Medium Slopers", "Large Slopers"],
  },
  {
    name: "Pinches",
    items: ["Small Pinches", "Medium Pinches", "Large Pinches", "Mega Pinches"],
  },
  {
    name: "Pockets",
    items: ["Mono Pockets", "Two Finger Pockets", "Large Pockets", "Volcanoes"],
  },
  { name: "Foot Holds", items: ["Smearing", "Edges", "Resin", "Wood"] },
];

export default function Topics() {
  return (
    <section className="flex font-['Lugrasimo'] text-l px-5 pb-10 rounded-xl font">
      <NavigationItem href="/">Home</NavigationItem>
      {topics.map((topic) => (
        <Dropdown key={topic.name} title={topic.name} items={topic.items} />
      ))}
    </section>
  );
}
