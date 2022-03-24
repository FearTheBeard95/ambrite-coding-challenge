import { Typography, Space } from 'antd';

const { Title, Paragraph, Text } = Typography;

export const ChallengeDocumentation = (props: any) => {
  const { challenge, files, children } = props;
  return (
    <>
      <Title level={2}>{challenge}</Title>
      {children}
      <Title level={3}>Javascript files</Title>
      <Paragraph>
        <Paragraph>
          <Space direction='vertical'>
            {files.map((file: any, index: number) => (
              <Text key={index}>
                <strong>
                  {index + 1}.{file.name}
                </strong>{' '}
                <br />
                <strong>Path:</strong> {file.path}
              </Text>
            ))}
          </Space>
        </Paragraph>
      </Paragraph>
    </>
  );
};
