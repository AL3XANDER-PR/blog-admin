/* eslint-disable react/prop-types */
function Etiquetas({ name }) {
  return (
    <button className="border border-gray-200 py-1 px-2 rounded-full text-sm shadow-sm">
      {name}
    </button>
  );
}

export default Etiquetas;
