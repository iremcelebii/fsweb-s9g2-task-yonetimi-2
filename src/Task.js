import React from "react";
import "./app.css";
import {
  formatDistanceToNow,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import tr from "date-fns/locale/tr";

const Task = ({ taskObj, onComplete }) => {
  // const result = formatDistanceToNow(new Date(2023, 0, 20), {
  //   locale: tr,
  // });
  // console.log("result " + result);

  // const bugun = new Date();
  // const dogumGunum = new Date("2023-04-24 17:00:00");
  // const dogumGununeKalanGun = differenceInDays(dogumGunum, bugun);

  // console.log("bugun " + bugun);
  // console.log("dogumGunum " + dogumGunum);
  // console.log("dogumGununeKalanGun " + dogumGununeKalanGun);

  let today = new Date();
  let teslimGunu = new Date(taskObj.deadline);
  let kalanSure = Math.floor(differenceInMinutes(teslimGunu, today));

  // console.log("today " + today);
  // console.log("teslimGunu " + teslimGunu);
  // console.log("kalanSure " + kalanSure);

  let fark = "";

  if (kalanSure > 0) {
    fark = "sonra";
  } else if (kalanSure < 0) {
    fark = "önce";
  } else {
    fark = "";
  }

  let todayGun = new Date();
  let teslimGunuGun = new Date(taskObj.deadline);
  let kalanSureGun = Math.floor(differenceInDays(teslimGunuGun, todayGun));

  console.log("kalanSureGun " + kalanSureGun);

  let renk = "";
  if (kalanSureGun <= 3) {
    renk = "bg-patates";
    console.log("if");
  }

  return (
    <div className=" p-6 bg-white rounded leading-normal mt-4 shadow-md">
      <h3 className="text-lg  text-baslik3">{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={renk}>
          {`${formatDistanceToNow(new Date(taskObj.deadline), {
            locale: tr,
          })} ${fark}`}
        </span>
      </div>
      <p className="py-0 pr-2 pl-3 text-sm text-p">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button className="block	" onClick={() => onComplete(taskObj.id)}>
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
