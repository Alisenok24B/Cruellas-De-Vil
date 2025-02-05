import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Radio, Space } from 'antd';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <Space>
        <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button value="start" onClick={() => handleChangeLanguage('en')}>en</Radio.Button>
          <Radio.Button value="end" onClick={() => handleChangeLanguage('ru')}>ru</Radio.Button>
        </Radio.Group>
    </Space>
  );
};