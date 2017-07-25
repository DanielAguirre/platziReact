import Error404 from '../Error404';

it('Render the Error404 componet', () => {
  const componet = shallow(<Error404/>);
  expect(componet).toMatchSnapshot();
});