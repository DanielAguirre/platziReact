import Pages from '../Pages';

it('Render the add componet', () => {
  const componet = shallow(<Pages/>);
  expect(componet).toMatchSnapshot();
});