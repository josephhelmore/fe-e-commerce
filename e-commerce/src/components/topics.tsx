import CrimpDropdown from "./Topic-Dropdowns/crimps-dropdown-button";
import JugsDropdown from "./Topic-Dropdowns/jugs-dropdown";


export default function Topics() {
  return (
    <section className="flex font-['Tangerine'] text-2xl  px-5 rounded-xl font">
      <div className="flex-1 text-center">
        <CrimpDropdown />
      </div>

      <div className="flex-1 text-center">
        <JugsDropdown />
      </div>
      <button className="flex-1 text-center hover:bg-gray-200">Slopers</button>
      <button className="flex-1 text-center hover:bg-gray-200">Pinches</button>
      <button className="flex-1 text-center hover:bg-gray-200">Pockets</button>
    </section>
  );
}
