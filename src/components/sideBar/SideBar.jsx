import "./SideBar.css";
import AddFriendBtn from "../AddFriendBtn";
import Person from "../Person";
export default function SideBar() {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <Person />
        <AddFriendBtn/>
      </div>
    </>
  );
}
