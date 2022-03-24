import { Typography } from 'antd';
import MainLayout from '../MainLayout';
import { ChallengeDocumentation } from '../ChallengeDocumentation';

const { Title, Paragraph, Text, Link } = Typography;
const challenge1Files = [
  {
    name: 'ajv-instance.js',
    path: '/src/utils/json-validators/ajv-instance.js',
  },
  {
    name: 'data-validator.js',
    path: '/src/utils/json-validators/data-validator.js',
  },
  {
    name: 'geo-validator.js',
    path: '/src/utils/json-validators/geo-validator.js',
  },
];

const challenge2Files = [
  {
    name: 'locations-sort.js',
    path: '/src/utils/locations-sort.js',
  },
];

const challenge3Files = [
  {
    name: 'data-merge.js',
    path: '/src/utils/data-merge.js',
  },
];

const Docs = () => (
  <MainLayout selected={['Home']} title={'Documentation'}>
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        This is my submission for the coding challenge written in TypeScript and
        JSX for the components. I used the UI framework{' '}
        <Link href='https://ant.design' target={'_blank'}>
          Ant Design
        </Link>{' '}
        to build the frontend to display the solutions of the 3 challenges given
        and used redux to manage the state of challenge 2.
      </Paragraph>
      <Paragraph>
        Below are docs showing the files with the code used to solve the
        challenges challenges as well as a brief description on how the
        challenge was solved.
      </Paragraph>
      <ChallengeDocumentation challenge={'Challenge 1'} files={challenge1Files}>
        <Paragraph>
          I used an NPM package called{' '}
          <Link href='https://ajv.js.org' target={'_blank'}>
            Ajv
          </Link>{' '}
          to solve this challenge, the package has funcitons used to validate
          contents of JSON file using a specified schema.
        </Paragraph>
      </ChallengeDocumentation>
      <ChallengeDocumentation challenge={'Challenge 2'} files={challenge2Files}>
        <Paragraph>
          <Text>
            I used the haversine formula to calculate the distance between two
            given points, you can read about the formular{' '}
            <Link
              href='https://en.wikipedia.org/wiki/Haversine_formula'
              target={'_blank'}
            >
              here.
            </Link>{' '}
            The ref coordinates or the coordinates we wish to use to sort the
            file will be entered on a form and clicking the sort button will
            then sort the table to show the closet distance to the entered
            coordinates.
          </Text>
        </Paragraph>
      </ChallengeDocumentation>
      <ChallengeDocumentation challenge={'Challenge 3'} files={challenge3Files}>
        <Paragraph>
          <Text>
            I used a Map to store the values of the two arrays, with the name
            propert in the objects being the key and the object itself being the
            value. this allowed for spreading of the values when setting values
            on the second array, which merge data by adding the value if doesn't
            exit and replacing it if does for individual (key). I then used a
            map function to place the data in such a way that it can be used by
            the table component used I got from{' '}
            <Link href='https://ant.design' target={'_blank'}>
              Ant Design
            </Link>{' '}
            .
          </Text>
        </Paragraph>
      </ChallengeDocumentation>
    </Typography>
  </MainLayout>
);

export default Docs;
