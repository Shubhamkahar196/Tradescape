

const Navbar = () => {
  return (
    // <div>Tradescape</div>
    // <div>
    //     Trader Risk Dashboard
    // </div>

   

        <nav className="w-full border-b bg-background px-4 py-3 sm:px-6 sm:py-4"> 
        <div className=" flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
               <div className="flex items-center">
                <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">Tradescape</h2>
            </div>

            <div className="flex items-center">
                <h2 className="text-xs font-medium text-muted-foreground sm:text-sm">Trader Risk Dashboard</h2>
            </div>
        </div>
          
        </nav>
   
  )
}

export default Navbar