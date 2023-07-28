'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import { DataTable } from 'primereact/datatable';

import { Column } from 'primereact/column';

import { TieredMenu } from 'primereact/tieredmenu';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

// import { PaginatorPageChangeEvent } from 'primereact/paginator';

import Link from 'next/link';

import { useMedia } from 'use-media';

import { FakeData } from '../data/home.type';

import styles from './home-components.module.css';

import medal2 from '@/public/medal-star-2.svg';
import arrowUp from '@/public/arrow-up.svg';
import arrowUpSecond from '@/public/arrow-up-2.svg';
import arrowDown from '@/public/arrow-down.svg';
import arrowDownThird from '@/public/arrow-up-3.svg';

import { fakeData } from '@/components/page-modules/home/data/home.repository';
import Flash from '@/components/common/icons/flash';
import Diagram from '@/components/common/icons/diagram';
import ShopingCart from '@/components/common/icons/shoping-cart';
import Eco from '@/components/common/icons/eco';
import Diamonds from '@/components/common/icons/diamonds';
import Flag from '@/components/common/icons/flag';
import Star from '@/components/common/icons/star';
import StarGrey from '@/components/common/icons/star-grey';
import TelegramColor from '@/components/common/icons/telegram-color';
import ArrowLeft from '@/components/common/icons/arrow-left';
import ArrowRight from '@/components/common/icons/arrow-roght';

interface Country {
  name: string;
  code: string;
}

const dropdownItems = [
  {
    label: (
      <button className={`${styles.dropdownItem} ${styles.active}`}>
        <Flash /> Trending
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Diagram /> 24h Gainers
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <ShopingCart /> By Marketcap
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Eco /> Recently Listed
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Diamonds /> Daily Top
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Flag /> Presales
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Star /> WatchList
      </button>
    ),
    icon: '',
  },
];

const Trending = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(10);

  const isMobile = useMedia({ maxWidth: 768 });

  const [trendingSpot, setTrendingSpot] = useState(false);

  // const onPageChange = (event: PaginatorPageChangeEvent) => {
  //   setFirst(event.first);
  //   setRows(event.rows);
  // };

  const menu = useRef(null);

  const countries: Country[] = [
    { name: 'Test', code: 'AU' },
    { name: 'Test', code: 'BR' },
    { name: 'Test', code: 'CN' },
    { name: 'Test', code: 'EG' },
    { name: 'Test', code: 'FR' },
    { name: 'Test', code: 'DE' },
    { name: 'Test', code: 'IN' },
    { name: 'Test', code: 'JP' },
    { name: 'Test', code: 'ES' },
    { name: 'Test', code: 'US' },
  ];

  const elements = [
    {
      text: 'Trending',
      src: <Flash />,
    },
    {
      text: '24h Gainers',
      src: <Diagram />,
    },
    {
      text: 'By Marketcap',
      src: <ShopingCart />,
    },
    {
      text: 'Recently Listed',
      src: <Eco />,
    },
    {
      text: 'Daily Top',
      src: <Diamonds />,
    },
    {
      text: 'Presales',
      src: <Flag />,
    },
    {
      text: 'WatchList',
      src: <Star />,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMenuToggle = (e: any) => {
    if (menu.current && isMobile) {
      setTrendingSpot((t) => !t);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      menu?.current.toggle(e);
    }
  };

  const getBeautyCount = (count: number) => {
    return count > 1000 ? (count / 1000).toFixed(3) : count;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedCountryTemplate = (option: Country, props: any) => {
    if (option) {
      return <div className={styles.option}>{option.name}</div>;
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: Country) => {
    return <div className={styles.option}>{option.name}</div>;
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

  const onSelectTab = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionTitleContainer}>
        <h3 onClick={onMenuToggle} className={styles.sectionTitleNormal}>
          <Image src={medal2} alt="medal2" />
          Trending Spot
        </h3>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <TieredMenu model={dropdownItems} popup ref={menu} breakpoint="768px" />
        {isMobile && (
          <Image
            src={trendingSpot ? arrowUpSecond : arrowDownThird}
            alt="arrow"
            className={styles.arrow}
          />
        )}
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {elements.map((el, i) => (
            <button
              key={i}
              onClick={() => onSelectTab(i)}
              className={`${styles.tab} ${i === selectedTab ? styles.activeTab : ''}`}
            >
              {el.src} {el.text}
            </button>
          ))}
        </div>

        <div className={styles.trendingDropdownsContainer}>
          <div className={styles.dropdown}>
            <Dropdown
              dataKey="code"
              value={selectedCountry}
              onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="Network / Chain"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="no-scrollbar"
            />
          </div>
          <div className={styles.dropdown}>
            <Dropdown
              dataKey="code"
              value={selectedCountry}
              onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="Platform"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="no-scrollbar"
            />
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className="card">
          <DataTable
            dataKey="id"
            value={fakeData}
            className={styles.tableTrend}
            lazy
            sortMode="multiple"
            // resizableColumns
            scrollable
          >
            <Column body={starBody} header="" sortable></Column>
            <Column body={nameBody} header="Name" className="table-shadow" sortable></Column>
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
        <div className={styles.paginationContainer}>
          <div className={styles.pagination}>
            <ArrowLeft />
            <div className={`${styles.pageContainer} ${styles.pageContainerActive}`}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>1</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>2</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>3</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>4</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>5</div>
              </div>
            </div>
            <div className={`${styles.pageContainer} ${styles.dots}`}>
              <div className={styles.pageItem}>
                <div className={`${styles.pageNumber}`}>...</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>24</div>
              </div>
            </div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
