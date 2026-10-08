
const BrinquedoCard = ({ titulo, preco, imagem}) => {
  return (
    <div className="bg-black rounded-[20px] overflow-hidden trasition-all duration-300 hover:-translate-y-2 hover:bordeer-4 hover: border-[#6495ed]">
      <img src={imagem} alt={titulo} className="w-full h-[250pc] object-cover"/>
      <article className="text-center p-4">
        <h2 className="text-xl text-[#6495ed] uppercase mb-3 font-bold">{titulo}</h2>
        <p className="text-white text-2xl font-bold mb-4">{preco}</p>
        <button className="bg-grandient-to-r from-cyan-400 to-gray-600 w-[50%] py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold transition-transform hover: bg-green-400 hover:text-white hover:scale-105">Comprar</button>
      </article>
      
    </div>
  )
}

export default BrinquedoCard
