import React from "react";
import ReacatRouteNavigation from "../../ReacatRouteNavigation";
import { NavLink } from "react-router-dom";
import { usePostData } from "../../Context/contextData";
import DetailedInfo from "../../DetailedInfo";

export default function MainsecondPage() {
  const { fetchedData } = usePostData();
  console.log(fetchedData);
  return (
    <div>
      <ReacatRouteNavigation />
      🏙️MainsecondPage🏙️
      {fetchedData.map((datas) => (
        <div key={datas.id}>
          <NavLink to={`/second-main-page/${datas.id}`}>
            {datas.question}
          </NavLink>
        </div>
      ))}
      <DetailedInfo/>
    </div>
  );
}
