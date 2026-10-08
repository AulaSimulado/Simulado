import React from 'react'

const Header = () => {
  return (
    <>
    <header className="flex jusify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo p-2 text-[2rem] text-white font-bold cursor-pointer transition-all">LOJA<span className="text-[#6106b6] p-5">DE BRINQUEDOS</span></h1>
      <nav>
          <ul className='flex list-none items-center gap-8'>
            <li>
              <Link to="/home" className='text-white text-lg no-underline hover:text-[#6106b6] hover:underline transition-all'>Home</Link>
            </li>
            <li>
              <Link to="/brinquedos" className='text-white text-lg no-underline hover:text-[#6106b6] hover:underline transition-all'>Brinquedos</Link>
            </li>
            <li>
              <Link to="/contato" className='text-white text-lg no-underline hover:text-[#6106b6] hover:underline transition-all'>Contato</Link>
            </li>
            <li>
              <Link to="/login" className='text-white text-lg no-underline hover:text-[#6106b6] hover:underline transition-all'>Login</Link>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}

export default Header

