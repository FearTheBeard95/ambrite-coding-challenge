import { Space, Typography } from 'antd';
import MainLayout from '../MainLayout';
import dataJSON from '../../utils/data.json';
import geoJSON from '../../utils/geo.json';
import { useEffect, useState } from 'react';
import geo_validator from '../../utils/json-validators/geo-validator';
import data_validator from '../../utils/json-validators/data-validator';
import { RootState } from '../../redux-store/reducers';
import * as validatorActionCreators from '../../redux-store/action-creators/validator-action-creator';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Title, Text } = Typography;

const Challenge1 = () => {
  const [geoData, setResults1] = useState<Array<any>>([]);

  const [dataFile, setResults2] = useState<Array<any>>([]);

  const state = useSelector((store: RootState) => store.validatorReducer);
  const dispatch = useDispatch();
  const { setValidatedData, setValidatedGeoData } = bindActionCreators(
    validatorActionCreators,
    dispatch
  );

  const onExecute = () => {
    geo_validator(geoJSON).then((results: any) => {
      setValidatedGeoData(results);
      setResults1(results);
    });
    data_validator(dataJSON).then((results: any) => {
      setValidatedData(results);
      setResults2(results);
    });
  };

  useEffect(() => {
    setResults1(state.validatedGeoData);
    setResults2(state.validatedData);
  }, [state]);
  return (
    <MainLayout
      selected={['Challenge1']}
      title={'Challenge 1'}
      onExecute={onExecute}
    >
      <Space direction='vertical'>
        {dataFile.length > 0 && (
          <Typography>
            <Title level={2}>data.json</Title>
            <p>
              valid objects: <Text type='success'>{dataFile.length}</Text>
            </p>
          </Typography>
        )}

        {geoData.length > 0 && (
          <Typography>
            <Title level={2}>geo.json</Title>
            <p>
              valid objects: <Text type='success'>{geoData.length}</Text>
            </p>
          </Typography>
        )}
      </Space>
    </MainLayout>
  );
};

export default Challenge1;
