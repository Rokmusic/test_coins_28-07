'use client';

import Image from 'next/image';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';

import styles from './home-components.module.css';

import arrowUp from '@/public/arrow-up.svg';
import arrowDown from '@/public/arrow-down.svg';

import { fakeData } from '@/components/page-modules/home/data/home.repository';
import Cown from '@/components/common/icons/cown';
import Messages from '@/components/common/icons/messages';
import TelegramColor from '@/components/common/icons/telegram-color';
import StarGrey from '@/components/common/icons/star-grey';

const Promoted = () => {
  // const isMobile = useMedia({ maxWidth: 992 });

  const getBeautyCount = (count: number) => {
    return count > 1000 ? (count / 1000).toFixed(3) : count;
  };

  const starBody = () => {
    return (
      <div className={styles.starIcon}>
        <StarGrey />
      </div>
    );
  };

  const nameBody = (data: FakeData) => {
    const {
      name: { icon, shared, title },
    } = data;
    return (
      <div className={styles.nameColumnContainer}>
        <Link href="#">
          <div className={styles.nameColumnContent}>
            <Image className={styles.currencyIcon} src={icon} alt={title} />
            <div className={styles.currencyContainer}>
              <div className={styles.currency}>
                <span className={styles.title}>
                  {title}
                  {data.name.titleIcons ? (
                    <div className={styles.titleIconContainer}>
                      {data.name.titleIcons.map((t, i) => (
                        <Image key={i} src={t} alt={title} className={styles.titleIcon} />
                      ))}
                    </div>
                  ) : null}
                </span>
              </div>
              <div className={styles.sharedContent}>
                <TelegramColor />
                <span className={styles.sharedCount}> {getBeautyCount(shared.count)}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const chainBody = (data: FakeData) => {
    const {
      chain: { icon, title },
    } = data;

    return (
      <div className={styles.chainContainer}>
        <Image width={10} src={icon} alt={title} />
        {title}
      </div>
    );
  };

  const hourBody = (data: FakeData) => {
    const {
      hour: { pain, percent },
    } = data;

    return (
      <div className={`${styles.hourContainer} ${pain ? styles.hourPain : ''}`}>
        {percent}%
        <Image width={18} src={pain ? arrowDown : arrowUp} alt={String(percent)} />
      </div>
    );
  };

  const dayBody = (data: FakeData) => {
    const {
      day: { pain, percent },
    } = data;

    return (
      <div className={`${styles.dayContainer} ${pain ? styles.hourPain : ''}`}>
        {percent}%
        <Image width={18} src={pain ? arrowDown : arrowUp} alt={String(percent)} />
      </div>
    );
  };

  const marketBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>$ {data.market}</div>;
  };

  const volumeBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>$ {getBeautyCount(data.volume)}</div>;
  };

  const ageBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>{data.age} month</div>;
  };
  const votesBody = (data: FakeData) => {
    const {
      votes: { count },
    } = data;

    return (
      <div className={styles.votesContainer}>
        <button className={styles.votesBtn}>
          <span className={styles.votesBtnText}>Vote</span>
          <span className={styles.votesCount}>{getBeautyCount(count)}</span>
        </button>
      </div>
    );
  };
  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleContainer}>
          <Cown />
          <h3 className={styles.sectionTitle}>Promoted Spot</h3>
        </div>

        <div>
          <button className={styles.promotedBtn}>
            <Messages /> Promote your coin
          </button>
        </div>
      </div>

      <div className={styles.tableParentContainer}>
        <div className={`promoted ${styles.tableContainer}`}>
          <DataTable
            dataKey="id"
            value={fakeData}
            className={styles.tableContainer}
            lazy
            sortMode="multiple"
            resizableColumns
            scrollable
          >
            <Column body={starBody} header="" sortable></Column>
            <Column body={nameBody} header="Name" className="with-shadow" sortable></Column>
            <Column body={votesBody} header="Votes" className="votes" sortable></Column>
            <Column body={chainBody} header="Chain" sortable></Column>
            <Column body={hourBody} header="1h %" sortable></Column>
            <Column body={dayBody} header="24h %" sortable></Column>
            <Column body={marketBody} header="Market Cap %" sortable></Column>
            <Column body={volumeBody} header="Volume" sortable></Column>
            <Column body={ageBody} header="Age" sortable></Column>
            <Column body={votesBody} header="Votes" className="votes-second" sortable></Column>
          </DataTable>
        </div>
      </div>
      <div className={styles.showMoreContainer}>
        <button className={styles.showMoreBtn}>Show more</button>
        <span className={styles.countToShow}>Shown 10 out of 100</span>
      </div>
    </div>
  );
};

export default Promoted;
