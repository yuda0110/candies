import styles from './App.module.scss';
import CandyList from './components/CandyList';
import DropBox from './components/DropBox';

function App() {
  return (
    <div className={styles.app}>
      <main>
        <CandyList />
      </main>
      <aside>
        <DropBox />
      </aside>
    </div>
  );
}

export default App;
