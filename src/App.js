import { useState } from 'react';
import styles from './App.module.scss';
import CandyList from './components/CandyList';
import DropBox from './components/DropBox';
import { candies } from './conf/candies';
import Form from "./components/Form";

function App() {
  const [selectedCandy, setSelectedCandy] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dragStartHandler = event => {
    console.log('dataTransfer:', event.dataTransfer);
    console.log('id:', event.target.id);

    candies.forEach(candy => {
      if (candy.id === event.target.id) {
        setSelectedCandy({ name: candy.name, price: candy.price });
      }
    })

    event.currentTarget.style.backgroundColor = '#FFF4E6FF';
  }

  const dropHandler = event => {
    const dropbox = event.target;
    console.log('dropbox', dropbox);
    setShowForm(true);
  }

  const onSubmit = () => {
    setShowForm(false);
  }

  return (
    <div className={styles.app}>
      <main>
        <CandyList dragStart={dragStartHandler} />
        {showForm && (
          <Form
            selectedCandy={selectedCandy}
            onSubmit={onSubmit}
          />
        )}
      </main>
      <aside>
        <DropBox drop={dropHandler} />
      </aside>
    </div>
  );
}

export default App;
