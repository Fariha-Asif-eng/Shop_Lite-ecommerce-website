export default function CartButton({ onToggle, btnText, currentItems, darkMode }) {
  
  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-[#0B1059] to-[#3c3f88cb]' : 'bg-gradient-to-r from-[#2f338d] to-[#0b1290]'} w-[50px] h-[38px] p-2 rounded-lg bg-gray-700 hover:bg-gray-600  text-gray-300 hover:text-white border border-gray-600 transition-colors duration-300 flex flex-col items-center justify-center`}>
     <span
      className="rounded-full w-[18px] text-sm px-[4px] mr-[-12px] bg-[#fd366e]  font-semibold text-center text-black"
      >{currentItems}</span>

    <button
      onClick={onToggle}
      className="inline-flex items-center mt-[-11px] cursor-pointer rounded-full px-3 py-1.5 text-2xl text-white transition"
    >
      {btnText}
      
    </button>
   
    </div>
  );
}
