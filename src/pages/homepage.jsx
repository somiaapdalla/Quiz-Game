function Homepage(){
    return <div>
        <div className="flex justify-center mt-32">
            <h1 className="text-6xl">SMART QUIZ</h1>
            <i class=" text-3xl ml-5 fa-solid fa-brain"></i>
        </div>
        <div>
        <button className="px-10 py-5 bg-blue-500 text-white rounded-lg ml-[40%] mt-10 text-3xl">Start Game <i class="fa-solid fa-angle-right text-2xl"></i></button>
    </div>
    <h1 className="ml-[40%] mt-3 text-2xl">Choose your questions:</h1>

    <div className="border-2 border-black h-14 w-52 rounded-lg flex items-center ml-[42%] mt-5 bg-slate-300">
        <h1 className="text-center ml-5 text-2xl font-semibold ">Tecnlogy</h1>
        <i class="fa-solid fa-laptop ml-3 text-2xl"></i>
    </div>

     <div className="border-2 border-black h-14 w-52 rounded-lg flex items-center ml-[42%] mt-5 bg-slate-300">
        <h1 className="text-center ml-5 text-2xl font-semibold ">General</h1>
        <i class="fa-solid fa-globe text-2xl ml-3"></i>
    </div>

     <div className="border-2 border-black h-14 w-52 rounded-lg flex items-center ml-[42%] mt-5 bg-slate-300">
        <h1 className="text-center ml-5 text-2xl font-semibold ">Movies</h1>
        <i class="fa-solid fa-clapperboard text-2xl ml-3"></i>
    </div>
    </div>
}
export default Homepage