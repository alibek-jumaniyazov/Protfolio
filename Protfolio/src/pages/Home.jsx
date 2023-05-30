import React, { useState } from 'react'
import logo from '../images/Logo.svg'
import user from '../images/user.png'
import Arrow from '../images/Arrow.svg'
import facebook from '../images/image 8.svg'
import icon1 from '../images/Group 1.svg'
import Box from '../companents/Box'
import Fuck from '../images/Fuck.svg'
import icons1 from '../images/Rectangle 1.svg'
import icons2 from '../images/Rectangle 2.svg'
import icons3 from '../images/Rectangle 3.svg'
import icons4 from '../images/Rectangle 4.svg'
import icons5 from '../images/Rectangle 5.svg'
import icons6 from '../images/Rectangle 6.svg'
import icons7 from '../images/Rectangle 7.svg'
import icons8 from '../images/Rectangle 8.svg'
import icons9 from '../images/Rectangle 9.svg'
import icons10 from '../images/Rectangle 10.svg'
import icons11 from '../images/Rectangle 11.svg'
import icons12 from '../images/Rectangle 12.svg'
import icons13 from '../images/Rectangle 13.svg'
import data from '../images/datashop.jpg'
import zamon from '../images/zamonshop.png'
import vector1 from '../images/Vector (1).svg'
import vector2 from '../images/Vector (2).svg'
import vector3 from '../images/Vector (3).svg'


export default function Home() {


  const [box, setBox] = useState([
    {
      image: icon1,
      title: "CIB on the Mobile		",
      info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    },
    {
      image: icon1,
      title: "CIB on the Mobile		",
      info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    },
    {
      image: icon1,
      title: "CIB on the Mobile		",
      info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    },
    {
      image: icon1,
      title: "CIB on the Mobile		",
      info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    }
  ])

  const [icon, setIcon] = useState([
    {
      img: icons1,
    },
    {
      img: icons2,
    },
    {
      img: icons3,
    },
    {
      img: icons4,
    },
    {
      img: icons5,
    },
    {
      img: icons6,
    },
    {
      img: icons7,
    },
    {
      img: icons8,
    },
    {
      img: icons9,
    },
    {
      img: icons10,
    },
    {
      img: icons11,
    },
    {
      img: icons12,
    },
    {
      img: icons13,
    },
  ])

  return (
    <>
      <header>
        <div className="imgLogo">
          <img src={logo} alt="" />
        </div>
        <ul className="listes" >
          <li className="items">Home</li>
          <li className="items">About</li>
          <li className="items">Lab</li>
        </ul>
      </header>
      <div className='container'>
        <main>
          <div className="User">
            <div className="imgUser">
              <div className="shadowImg">
                <img src={user} alt="" className="userImg" />
              </div>
            </div>
            <div className="userName">
              <p className='name'> <img src={Arrow} alt="" /> Hello! I Am <span>Alibek</span></p>
              {/* <p className="job">A Designer who</p> */}
              <p className='Namejob'>Judges a book
                by its <span>cover...</span> </p>
              <p className="lorem">Because if the cover does not impress you what else can?</p>
            </div>
          </div>
          <div className="userInfo">
            <div className="qatorN1">
              <span className='infoJob'>I'm a Software Engineer.</span>
              <p>Currently, I'm a Software Engineer at <span><img src={facebook} alt="" />Facebook</span> </p>
            </div>
            <div className="qatorN2">
              <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.</p>
            </div>
          </div>
          <div className="Example">
            <p className='boxP'>Work Experience</p>
            <div className="BoxShadow"></div>
            <div className="Boxes">
              {
                box.map((item) => (
                  <Box item={item} />
                ))
              }
            </div>
          </div>

          <div className="JobInfo">
            <div className="Texts">
              <p className='p1'>I'm currently looking to join a cross-functional team

                <p>that values improving people's lives through accessible design </p>
              </p>


              <div className="icons1">
                {
                  icon.slice(0, 7).map((item) => (
                    <div className="iconBox">
                      <img src={item.img} alt="" />
                    </div>
                  ))
                }

              </div>
              <div className="icons2">
                {
                  icon.slice(7, 13).map((item) => (
                    <div className="iconBox">
                      <img src={item.img} alt="" />
                    </div>
                  ))
                }
              </div>
            </div>

            <img className='galaxysIcons' src={Fuck} alt="" />
          </div>
          <div className="MyProjects">
            <div className="infoProject">
              <div className="infoTexts">
                <p>Featured  Project</p>
                <span className='projectName'>Example Project</span>
                <span className='projectInfo' >A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed audio
                  information about each track. Create and save new playlists of
                  recommended tracks based on your existing playlists and more.</span>
                <a className='wwa' href="https://www.datashop.uz/">Datashop.uz</a>
              </div>

              <div className="imagePage">
                <img src={data} alt="" />
              </div>
              <div className="shadowproject"></div>
            </div>

            <div className="infoProject ww">
              <div className="infoTexts">
                <p>Featured  Project</p>
                <span className='projectName'>Example Project</span>
                <span className='projectInfo' >A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed audio
                  information about each track. Create and save new playlists of
                  recommended tracks based on your existing playlists and more.</span>
                <a className='wwa' href="https://www.zamonshop.uz/">Zamonshop.uz</a>
              </div>

              <div className="imagePage">
                <img src={zamon} alt="" />
              </div>
              <div className="shadowproject">

              </div>
            </div>
          </div>

        </main>


        <footer>
          <p className='contact'>Contact</p>
          <p className='ContactInfo'>I'm currently looking to join a cross-functional team that values improving people's lives
            through accessible design. or have a project in mind? Let's connect.
          <span>ibrhaimmemon930@gmail.com</span>
          </p>

            <div className="footerIcons">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={vector3} alt="" />
            </div>
        </footer>
      </div >
    </>
  )
}
