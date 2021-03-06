import React from 'react';
import { List } from 'antd';

type Unpacked<T> = T extends (infer U)[] ? U : T;


const SecurityView: React.FC = () => {
  const getData = () => [
    {
      title: '账户密码',
      actions: [<a key="Modify">修改</a>],
    },
  ];

  const data = getData();
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title}/>
          </List.Item>
        )}
      />
    </>
  );
};

export default SecurityView;
