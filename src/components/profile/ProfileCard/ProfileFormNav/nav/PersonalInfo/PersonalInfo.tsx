import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Form as AntForm } from 'antd';
import { ProfileForm } from '../../ProfileForm/ProfileForm';
import { Card } from 'components/common/Card/Card';
import { FirstNameItem } from './FirstNameItem/FirstNameItem';
import { LastNameItem } from './LastNameItem/LastNameItem';
import { NicknameItem } from './NicknameItem/NicknameItem';
import { SexItem } from './SexItem/SexItem';
import { BirthdayItem } from './BirthdayItem/BirthdayItem';
import { LanguageItem } from './LanguageItem/LanguageItem';
import { PhoneItem } from './PhoneItem/PhoneItem';
import { EmailItem } from './EmailItem/EmailItem';
import { CountriesItem } from './CountriesItem/CountriesItem';
import { CitiesItem } from './CitiesItem/CitiesItem';
import { ZipcodeItem } from './ZipcodeItem/ZipcodeItem';
import { AddressItem } from './AddressItem/AddressItem';
import { WebsiteItem } from './WebsiteItem/WebsiteItem';
import { SocialLinksItem } from './SocialLinksItem/SocialLinksItem';
import { getUser, updateUser, User } from 'api/users.api';
import * as S from '../../../../../common/Form/Form.styles';
import { Dates } from '@app/constants/Dates';

const initialPersonalInfoValues = {
  firstName: '',
  lastName: '',
  nickName: '',
  sex: undefined,
  birthday: undefined,
  language: undefined,
  phone: '',
  email: '',
  country: undefined,
  city: undefined,
  address1: '',
  address2: '',
  zipcode: '',
  website: '',
  twitter: '',
  linkedin: '',
  facebook: '',
};

export const PersonalInfo: React.FC = () => {
  const [formValues, setFormValues] = useState(initialPersonalInfoValues);
  const [user, setUser] = useState<User>();

  const [form] = AntForm.useForm();

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  useEffect(() => {
    user &&
      form.setFieldsValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email.name,
        phone: user.phone.number,
        nickname: user.userName,
        sex: user.sex,
        birthday: Dates.getDate(user.birthday),
        language: user.lang,
        country: user.country,
        city: user.city,
        address1: user.address1,
        address2: user?.address2,
        zipcode: user.zipcode,
        website: user?.website,
        twitter: user?.socials?.twitter,
        linkedin: user?.socials?.linkedin,
        facebook: user?.socials?.facebook,
      });
  }, [user, form]);

  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => updateUser(values), []);

  const onCancel = useCallback(() => {
    setFormValues(initialPersonalInfoValues);
  }, [setFormValues]);

  return (
    <Card>
      <ProfileForm
        form={form}
        name="info"
        initialValues={initialPersonalInfoValues}
        onValuesChange={(field) => {
          const values = Object.entries(field)[0];

          setFormValues({ ...formValues, [values[0]]: values[1] });
        }}
        onCancel={onCancel}
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.title')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <FirstNameItem />
          </Col>

          <Col xs={24} md={12}>
            <LastNameItem />
          </Col>

          <Col xs={24} md={12}>
            <NicknameItem />
          </Col>

          <Col xs={24} md={12}>
            <SexItem />
          </Col>

          <Col xs={24} md={12}>
            <BirthdayItem />
          </Col>

          <Col xs={24} md={12}>
            <LanguageItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.contactInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <PhoneItem verified={user?.phone.verified} />
          </Col>

          <Col xs={24} md={12}>
            <EmailItem verified={user?.email.verified} />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.address')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <CountriesItem />
          </Col>

          <Col xs={24} md={12}>
            <CitiesItem country={formValues.country} />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={1} />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={2} />
          </Col>

          <Col xs={24} md={12}>
            <ZipcodeItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.otherInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <WebsiteItem website={formValues.website} />
          </Col>

          <Col span={24}>
            <SocialLinksItem
              socialLinks={{
                twitter: formValues.twitter,
                linkedin: formValues.linkedin,
                facebook: formValues.facebook,
              }}
            />
          </Col>
        </Row>
      </ProfileForm>
    </Card>
  );
};
