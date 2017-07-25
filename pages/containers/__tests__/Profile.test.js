import Profile from '../Profile';

it('Render the Profile componet', () => {
  const componet = shallow(<Profile/>);
  expect(componet).toMatchSnapshot();
});