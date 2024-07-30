import styles from "../styles/Home.module.css";

import Staking from "./Staking.js";
import StakingData from "./stakingData.js";
import OldStaking from '../components/old_staking';

export default function Main() {
  return (
    <section className={styles.container}>
        <OldStaking />
      <Staking />
      <StakingData />
    </section>
  );
}
