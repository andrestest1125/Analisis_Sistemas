
import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 1; i < 4; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Promotion# ${i}`,
    avatar: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
    description:
      'Et non mollit nisi cillum elit eiusmod magna dolore labore reprehenderit.',
    content:
      'Proident aute aliqua sunt eu mollit ad ipsum do.Officia culpa laboris ad tempor elit et ex aliqua.Dolore quis cupidatat nostrud officia Lorem et sint quis.Velit velit eiusmod eu proident officia qui labore eiusmod ad excepteur non qui.Irure velit id consequat irure cupidatat est ea adipisicing amet quis ad veniam nisi.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


export default class VerticalList extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 2,
          }}
          dataSource={listData}
          footer={
            <div>
              <b>Mas actividades</b> Esperalas !
      </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" />,
                <IconText type="like-o" text="156" />,
                <IconText type="message" text="2" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/03/home-dumbbell-workout-plan.jpg?itok=2rSFbB9H&timestamp=1520599000"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}


