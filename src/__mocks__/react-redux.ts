const mockDispatch = jest.fn();

module.exports = {
  ...jest.requireActual("react-redux"),
  __esModule: true,
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
  mockDispatch,
};

export {};
