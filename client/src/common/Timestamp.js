import React from "react";
import moment from "moment";

const Timestamp = ({ timestamp, includePosted }) => {
  const getTimeAgo = (timestamp) => {
    const now = moment();
    const createdDate = moment(timestamp);
    const duration = moment.duration(now.diff(createdDate));

    const years = Math.floor(duration.asYears());
    const months = Math.floor(duration.asMonths());
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes());

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }
  };

  if (includePosted) {
    return (
      <div>
        <p className="small-text bold">{`Posted ` + getTimeAgo(timestamp)}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="small-text bold">{getTimeAgo(timestamp)}</p>
      </div>
    );
  }
};

export default Timestamp;
