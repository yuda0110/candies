import { useState } from 'react';
import styles from './App.module.scss';
import { candies } from './conf/candies';
import CandyList from './components/CandyList';
import DropBox from './components/DropBox';
import Form from './components/Form';
import Summary from './components/Summary';

function App() {
  const [selectedCandy, setSelectedCandy] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dragStartHandler = event => {
    console.log('dataTransfer:', event.dataTransfer);
    console.log('id:', event.target.id);

    candies.forEach(candy => {
      const selectedId = event.target.id
      if (candy.id === selectedId) {
        setSelectedCandy({ name: candy.name, price: candy.price, element: document.getElementById(selectedId) });
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

    if (selectedCandy.element) {
      selectedCandy.element.style.backgroundColor = null;
    }
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
        <Summary />
      </aside>
    </div>
  );
}

export default App;
