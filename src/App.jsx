import { useState } from 'react'
import reactLogo from './assets/react.svg'
import style from "./App.module.css"

function App() {
 

  return (
    <div className={style.app}>
      <span className={style.notFound}>404 NOT FOUND</span>
      <div className={style.content}>
        <img className={style.img} src='img/Scarecrow.png'/>
        <div className={style.info}>
          <h1 className={style.title}>I have bad news for you</h1>
          <div className={style.subTitle}><h2> The page you are looking for migth be removed or is temporarily unavailable</h2> </div>
          <div><button className={style.button}><span>BACK TO HOMEPAGE</span></button></div>
        </div>
      </div>
      <div className={style.created}><span>Created by Erceg Gonzalo - <a href='https://devchallenges.io' target="_blank">devchallenges.io</a></span></div>
    </div>
  )
}

export default App
