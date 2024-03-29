
import React from 'react';
import 'antd/dist/antd.css';
import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'Zumba' },
        { type: 'success', content: 'Yoga' },
      ];
      break;
    case 5:
      listData = [
        { type: 'warning', content: 'Zumba' },
        { type: 'success', content: 'Yoga' },
        { type: 'error', content: 'Reservado' },
      ];
      break;
    case 16:
      listData = [
        { type: 'warning', content: 'Zumba' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default function  BigCalendar  () {
  return (
    <div>
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  </div>
  )
}

