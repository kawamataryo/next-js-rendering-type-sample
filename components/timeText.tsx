import React from "react";

type PropsType = {
  time: string
}

const TimeText: React.FC<PropsType> = ({time}) => {
  return <div className="is-size-6">Build at: <span className="has-text-weight-bold">{time}</span></div>
}

export default TimeText
