import styles from "../styles/Home.module.css";

import StakingData from "./stakingData.js";
import Staking from '../components/staking';

export default function Main() {
  return (
    <section className={styles.container}>
    <Staking />
    <StakingData />
    </section>
  );
}
