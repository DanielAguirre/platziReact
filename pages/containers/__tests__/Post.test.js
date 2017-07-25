import Post from '../Post';

it('Render the Post componet', () => {
  const componet = shallow(<Post/>);
  expect(componet).toMatchSnapshot();
});