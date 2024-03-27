import React from 'react'

export default function About() {
  return (
    <div>
      <div className="ttx">
        About me <span className='arrow'>&#8594;</span>
      </div>
      <div className="cont1">
        <div className="left"> 
        <img className="img5" src="\src\assets\Ellipse 13.png" alt="logo" />
        <img className="img6" src="\src\assets\MINI BALL.png" alt="logo" />
     
     </div>
        <div className="right">
        <div className="intros">
          <p>A talented web developer with a passion for crafting 
elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, and more, Their keen eye for detail,coupled with theircommitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but
 also optimizedfor peak performance </p>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex mt-8">
			<button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Contact Me</button>
		</div>

        </div>
      </div>
    </div>
   
  )
}
