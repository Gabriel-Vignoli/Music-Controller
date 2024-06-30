import ControlMuisc from "./ControlMusic";
import PlayListIcon from "./Icons/PlayListIcon";

export default function BottomBar() {

function handeleModalPlayList() {
  document.getElementById("modal-play-list").classList.toggle("hidden")
}

    return (
      <>
        <nav className="fixed bottom-0 pt-4 w-full h-20 bg-[#1f1f22] flex justify-center">
          <ControlMuisc></ControlMuisc>
        </nav>
        <div className="absolute flex justify-end items-center bottom-0 0 right-0 p-7">
           <PlayListIcon onClick={handeleModalPlayList}></PlayListIcon>
        </div>
      </>
    )
}