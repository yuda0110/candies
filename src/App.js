import styles from './App.module.scss';
import CandyList from './components/CandyList';

function App() {
  return (
    <div className={styles.app}>
      <CandyList />
    </div>
  );
}

export default App;
