"use client";
import { useSession } from "next-auth/react";
import Script from "next/script";
import "/home/doduy/nextauthtest/src/app/dashboard/page.css";
import { useEffect } from "react";
export default function DashBoard() {
  // const { data: session } = useSession();
  // console.log(123);
  // console.log(session);
  const { data: session } = useSession();

  // function w3_open() {
  //   document.getElementById("main").style.marginLeft = "15%";
  //   document.getElementById("mySidebar").style.height = "100%";
  //   document.getElementById("mySidebar").style.top = "0";

  //   // document.getElementById("main").style.top = "5%";
  //   // document.getElementById("mySidebar").style.width = "10%";
  //   document.getElementById("mySidebar").style.display = "block";
  //   document.getElementById("openNav").style.display = "none";
  // }
  // function openhalf() {
  //   // document.getElementById("main").style.marginLeft = "15%";
  //   document.getElementById("mySidebar").style.height = "90%";
  //   document.getElementById("mySidebar").style.top = "5%";
  //   document.getElementById("mySidebar").style.display = "block";
  //   // document.getElementById("openNav").style.display = "none";
  // }
  useEffect(function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  });

  return (
    <div className="sidebar animate-left" id="mySidebar">
      <div className="bar-item" id="app-name">
        Magic Post
      </div>
      <hr />
      <button className="bar-item button large">Close &times;</button>
      <a href="#" className="bar-item button">
        Link 1
      </a>
      <a href="#" className="bar-item button">
        Link 2
      </a>
      <a href="#" className="bar-item button">
        Link 3
      </a>
      <script>
        {function w3_close() {
          document.getElementById("main").style.marginLeft = "0%";
          document.getElementById("mySidebar").style.display = "none";
          document.getElementById("openNav").style.display = "inline-block";
        }}
      </script>
    </div>
  );
}
