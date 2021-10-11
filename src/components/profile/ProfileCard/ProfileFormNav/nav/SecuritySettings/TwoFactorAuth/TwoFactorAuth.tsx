import React, { useCallback, useState } from 'react';
import { Col, Row, Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../../../ProfileForm/ProfileForm';
import { LinkBtn } from 'components/common/buttons/LinkBtn/LinkBtn';
import { TwoFactorOptions } from './TwoFactorOptions/TwoFactorOptions';
import { TwoFactorSwitch } from './TwoFactorSwitch/TwoFactorSwitch';

export const TwoFactorAuth: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);

  const [form] = Form.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(() => {
    notification.open({ message: t('profile.nav.securitySettings.twoFactorAuthSuccess') });
  }, []);

  return (
    <ProfileForm
      form={form}
      name="twoFactorAuth"
      onFinish={onFinish}
      footer={
        (isEnabled && <LinkBtn htmlType="submit">{t('profile.nav.securitySettings.verify')}</LinkBtn>) || <span />
      }
    >
      <Row>
        <Col xs={24} md={12} xl={24}>
          <TwoFactorSwitch setEnabled={setEnabled} />
        </Col>

        {isEnabled && (
          <Col span={24}>
            <TwoFactorOptions form={form} />
          </Col>
        )}
      </Row>
    </ProfileForm>
  );
};
