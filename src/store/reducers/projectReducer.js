const initState = {
  projects: [
    { id: '1', title: 'Help me find peach', content: 'haha hahah hahah' },
    { id: '2', title: 'Collect all stars', content: 'haha hahah hahah' },
    { id: '3', title: 'Hunt eggs with ninja', content: 'haha hahah hahah' },
    { id: '4', title: 'Hello world', content: 'haha hahah hahah' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
  return state;
};

export default projectReducer;
