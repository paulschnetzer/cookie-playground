import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DONT FORGET TO DOWNLOAD THESE LIBARIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default function Home(props) {
  function createCookie() {
    cookie.set('beginnerCookie', 'HELLO I AM COOKIE');
  }
  //hier wird der Cookie erstellt
  return (
    <>
      <div>
        <button onClick={createCookie}>Press me to create cookie</button>
        <p>
          Pls refresh after Pressing the button to see the cookie render:
          {props.beginnerCookie}
        </p>
      </div>
    </>
  );
}
//hier wird der Cookie mit {props.beginnerCookie} gecallt

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  console.log(context);
  const beginnerCookie = allCookies.beginnerCookie || [];
  return {
    props: {
      beginnerCookie: beginnerCookie,
    },
  };
}
//hier wird der Cookie umgewandelt, so das auch er von next.js verwendet werden kannn
