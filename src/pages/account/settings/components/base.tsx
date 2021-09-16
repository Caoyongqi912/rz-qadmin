import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import ProForm, {ProFormText} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { queryCurrent } from '../service';
import styles from './BaseView.less';
import { UpdateInfo } from '../../center/data';
import { updateInfo } from '../../center/service';



const BaseView: React.FC = () => {
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };

  const handleFinish = async (values: UpdateInfo) => {
    const response = await updateInfo(values);
    if (response.code === 0) {
      message.success(response.msg);

    } else { 
      message.error(response.msg);

    }
  };
  return (
    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                resetButtonProps: {
                  style: {
                    display: 'none',
                  },
                },
                submitButtonProps: {
                  children: '更新基本信息',
                },
              }}
              initialValues={{
                ...currentUser,
              }}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                rules={[
                  {
                    pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    message: '输入正确邮箱!',

                  },
                  {
                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="name"
                label="昵称"
                rules={[
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="phone"
                label="联系电话"
                rules={[
                  {
                    pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
                    message: '请输入正确联系电话!',

                  },
                  {
                    required: true,
                    message: '请输入您的联系电话!',
                  },
                ]}
              />
            </ProForm>
          </div>

          <div className={styles.right}>
            <div className={styles.avatar_title}>头像</div>
            <div className={styles.avatar}>
              <img src={getAvatarURL()} alt="avatar" />
            </div>
            <Upload showUploadList={false}>
              <div className={styles.button_view}>
                <Button>
                  <UploadOutlined />
                  更换头像
                </Button>
              </div>
            </Upload>
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
