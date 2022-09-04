import './App.css';
import React from "react";
import Header from "./component/header";
import User from "./component/user";

const name = "Hüseyin";
const surname = "Ar";
const isLoggedIn = true;
const friends = [
    {
        id: 1,
        name: "Fatoş"
    },
    {
        id: 2,
        name: "Tayfun"
    },
    {
        id: 3,
        name: "Ahmet"
    }
]

function App() {
  return (

      // 1.yol
      // <div>
      //   <h1>Hüseyin</h1>
      //   <Header/>
      // </div>


      //react fragment 2. yol
      // <>
      //     <Header />
      // </>


      // 3. yol React fragment javaScriptin özel keyleri var className,htmlFor
      //  interpolation angular gibi {{}} çift değil --- {} tek
      // <React.Fragment>
      //     <Header></Header>
      //     <h1>{name} {isLoggedIn ? surname : ''}</h1>
      //     <p className="text">Lorem ipsum dolor sit.</p>
      //     <label htmlFor="myInput">name
      //       <input id="myInput"/>
      //     </label>
      // </React.Fragment>

      <>
          <Header/>
      <User
          name="Huseyin"
          surname={"ar"}
          isLogin={true}
          age={26}
          friends={friends}
          address={{
              title: "iznik-Bursa",
              zip: 16343
          }}
      />
      </>
  );
}

export default App;
