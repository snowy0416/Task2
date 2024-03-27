import {Link,Outlet} from "react-router-dom"
export default function Layout() {
    return (
        <div>
<header className="p-4 bg-black text-white">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 text-lg font-bold">
				Soniya Munda
			</a>
			<ul className="items-stretch hidden space-x-3 lg:flex">
			   <Link to ="/">
				<li className="flex mt-4 ml-3">
					<a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-dark:text-violet-600 dark:border-violet-600">Home</a>
				</li></Link>
				<Link to ="/about">
				<li className="flex mt-4">
					<a rel="noopener noreferrer"className="flex items-center px-4 -mb-1 border-b-2 dark:border- ">About</a>
				</li></Link>
				<Link to ="/skills">
				<li className="flex mt-4">
					<a rel="noopener noreferrer"className="flex items-center px-4 -mb-1 border-b-2 dark:border- ">Skills</a>
				</li></Link>
				<Link to ="/projects">
				<li className="flex mt-4">
					<a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Projects</a>
				</li></Link>
				<Link to ="/contact">
				<li className="flex mt-4">
					<a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</a>
				</li></Link>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Contact Me</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
<Outlet/>
        </div>

  )
}