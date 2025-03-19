import Link from "next/link"

const Nav = () => {

    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Contact', path: '/contact'},
        {name: 'Login', path: '/login'}
    ]

  return (
    <header className="bg-sky-500 py-3">

        <div className="xl:max-w-[1200px] mx-auto flex justify-between items-center px-4 text-white">

            <div>
                <Link href="/" className="text-white font-bold text-2xl">Next Auth</Link>
            </div>

            <nav>
                <ul>

                    {navItems.map((item, index) => (

                        <li key={index} className="inline-block mx-2 text-xl">
                            <Link href={item.path} className="hover:text-sky-300">{item.name}</Link>
                        </li>
                    ))}

                </ul>
            </nav>

        </div>

    </header>
  )
}

export default Nav