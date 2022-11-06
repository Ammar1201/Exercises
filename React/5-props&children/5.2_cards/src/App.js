import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
      src='https://images.unsplash.com/photo-1667695011090-70f07a2bafee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      title='random title 1'
      desc='random desc 1'
      shareLink='random share link'
      exploreLink='random exploration link'
      />
      <Card
      src='https://images.unsplash.com/photo-1667594049406-25f6a193c50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2178&q=80'
      title='random title 2'
      desc='random desc 2'
      shareLink='random share link'
      exploreLink='random exploration link'
      />
      <Card
      src='https://images.unsplash.com/photo-1667623656635-fdf814e6c70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      title='random title 3'
      desc='random desc 3'
      shareLink='random share link'
      exploreLink='random exploration link'
      />
    </div>
  );
}

export default App;
