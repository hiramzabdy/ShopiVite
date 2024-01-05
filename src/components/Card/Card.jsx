function Card(){
    return(
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-4 w-full h4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5">Electronics</span>
                <img src="https://media.gq.com.mx/photos/63cea3fc3105d93f46dc3212/16:9/w_2560%2Cc_limit/Samsung%2520Galaxy%2520S23%2520Ultra.jpg" alt="" className="w-full h-full object-cover rounded-lg"/>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">S23 Ultra</span>
                <span className="text-lg font-medium">$999</span>
            </p>
        </div>
    )
}

export default Card