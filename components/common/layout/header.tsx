'use client';

import Image from 'next/image';

import { useMedia } from 'use-media';

import { useEffect, useRef, useState } from 'react';

// import { motion } from 'framer-motion';

import dynamic from 'next/dynamic';

import Link from 'next/link';

import { useClickOutside } from 'primereact/hooks';

import AddSquareSubmit from '../icons/add-square-submit';

import BinanceWhite from '../icons/binance-white';

import Crossmark from '../icons/crossmark';

import SearchLight from '../icons/search-light';

import styles from './header.module.css';

import binance from '@/public/binance.svg';
import etherium from '@/public/etherium.svg';
import arrows from '@/public/arrange-square.svg';
import arrowUp from '@/public/arrow-up.svg';
import arrowDown from '@/public/arrow-down.svg';
import twitter from '@/public/twitter.svg';
import telegram from '@/public/telegram.svg';
import logo from '@/public/logo.svg';
import menu from '@/public/menu.svg';
import artyfact from '@/public/artyfact.svg';

const itemsSearch = [
  {
    name: 'Artyfact',
    shortName: 'ARTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 16000,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
  {
    name: 'test',
    shortName: 'ARtestTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 160,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
  {
    name: 'test',
    shortName: 'ARtestTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 160,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
  {
    name: 'test',
    shortName: 'ARtestTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 160,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
  {
    name: 'test',
    shortName: 'ARtestTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 160,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
  {
    name: 'Artyfact',
    shortName: 'ARTY',
    imgSrc: artyfact.src,
    price: '466.10',
    contract: '0x617Cab4aAae1f8dfb3eE138698330776a1e1b324',
    liquidity: 16000,
    liquidityFrom: 'Bitcoin',
    liquidityFromImg: binance.src,
  },
];

type TItemsSearch = typeof itemsSearch;

const getSharedCount = (count: number) => {
  if (count < 1000) return count;

  return (count / 1000).toFixed(0) + 'K';
};

const getSearchedItems = (searchedItems: TItemsSearch) => {
  return searchedItems.map((item, idx) => {
    return (
      <div key={idx} className={styles.searchResult}>
        <div className={styles.coinIcon}>
          <img src={item.imgSrc} alt={item.name} />
        </div>
        <div className={styles.coinInfo}>
          <div className={styles.coinName}>
            <span>{item.name}</span>
            <span>{item.shortName}</span>
          </div>
          <span className={styles.price}>{item.price}</span>
          <div className={styles.contract}>
            <span>Contract:</span>
            <span>{item.contract}</span>
          </div>
        </div>
        <div className={styles.liquid}>
          <span>Liquidity:</span>
          <span>${getSharedCount(item.liquidity)}</span>
          <img src={item.liquidityFromImg} alt={item.liquidityFrom} />
        </div>
      </div>
    );
  });
};

const SidebarMobile = dynamic(() => import('@/components/common/layout/sidebar/mobile'));

export default function Header() {
  const isWide = useMedia({ minWidth: 992 });
  const searchResultRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const [searched, setSearched] = useState<TItemsSearch>([]);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isMobileInputOpened, setIsMobileInputOpened] = useState<boolean>(false);

  useClickOutside(searchResultRef, () => {
    setIsOpenSearch(false);
  });

  useEffect(() => {
    if (!searchText.length) return setSearched([]);
    const searchedItems = itemsSearch.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setSearched(searchedItems);
    setIsOpenSearch(true);
  }, [searchText]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onClickInputSearch = () => {
    setIsOpenSearch(true);
  };

  const searchInput = (
    <input
      value={searchText}
      onChange={onChangeSearch}
      onClick={onClickInputSearch}
      type="text"
      placeholder="Search"
      className={styles.searchInput}
    />
  );

  function onMobileHeader() {
    setVisible(true);
  }
  const searchResultContainer = () => {
    return (
      <div
        ref={searchResultRef}
        style={{ display: !searched.length ? 'none' : undefined }}
        className={styles.searchResultContainer}
      >
        {isOpenSearch && getSearchedItems(searched)}
      </div>
    );
  };

  const onClickSearchImage = () => {
    if (!isWide) {
      setIsMobileInputOpened((prev) => !prev);
    }
    setSearchText('');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={`container ${styles.headerContent}`}>
            <div className={styles.headerFrame}></div>
            <div className={`slider ${styles.headerItems}`}>
              <div className={styles.headerItem}>
                <div className={styles.currencyInfo}>
                  <BinanceWhite />
                  BNB
                  <Image src={arrows} alt="arrows" />
                  $27,181
                  <div className={styles.headerPercent}>
                    1,37%
                    <Image src={arrowUp} alt="arrow-up" />
                  </div>
                </div>
                <div className={styles.currencyInfo}>
                  <Image src={etherium} alt="binance" />
                  ETH
                  <Image src={arrows} alt="arrows" />
                  $1.746
                  <div className={styles.headerPercent} style={{ color: '#E53B35' }}>
                    1,37%
                    <Image src={arrowDown} alt="arrow-up" />
                  </div>
                </div>
              </div>
              <div className={styles.statistics}>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}>Projects Listed:</span>
                  <span className={styles.statItemCount}>1,321</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Watchlist’s: </span>
                  <span className={styles.statItemCount}>72,312</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Total Votes:</span>
                  <span className={styles.statItemCount}>917,216</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}>Users: </span>
                  <span className={styles.statItemCount}>819,721</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Support Chains:</span>
                  <span className={styles.statItemCount}>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <div className={styles.headerBottomContent}>
            <div className="container">
              <div className={styles.headerBottomItem}>
                <div className={styles.headerBottomItemContent}>
                  <Link href="/">
                    <Image src={logo} alt="logo" className={styles.logo} />
                  </Link>
                  <div className={styles.social}>
                    <Link href="#">
                      <div className={styles.socialItem}>
                        <Image src={telegram} alt="telegram" />
                        <span>{getSharedCount(1241)}</span>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className={styles.socialItem}>
                        <Image src={twitter} alt="twitter" />
                        <span>{getSharedCount(8412)}</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={styles.rightBlock}>
                  {isWide && (
                    <div className={styles.searchFull}>
                      <div className={styles.searchInputContainer}>
                        <div onClick={onClickSearchImage} className={styles.searchInputImage}>
                          {searchText ? <Crossmark /> : <SearchLight />}
                        </div>
                        {searchInput}
                        {isOpenSearch && searchResultContainer()}
                      </div>
                      <Link href={'/submit-coin'} className={styles.button}>
                        <AddSquareSubmit />
                        Submit Coin
                      </Link>
                    </div>
                  )}

                  {!isWide && (
                    <div ref={searchResultRef} className={styles.mobileSearchContainer}>
                      <div onClick={onClickSearchImage} className={styles.searchImage}>
                        {isMobileInputOpened ? <Crossmark /> : <SearchLight />}
                      </div>
                      {isMobileInputOpened && searchInput}
                      {isOpenSearch && searchResultContainer()}
                    </div>
                  )}
                  <div onClick={onMobileHeader} className={styles.mobileMenu}>
                    <Image src={menu} alt="menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidebarMobile isWide={isWide} visible={visible} setVisible={setVisible} />
        {isMobileInputOpened && <div className={styles.frame} />}
      </header>
    </>
  );
}

// interface MarqueeWrapperProps extends PropsWithChildren {
//   isWide: boolean;
// }

// const MarqueeWrapper: FC<MarqueeWrapperProps> = (props) => {
//   const { isWide, children } = props;

//   return isWide ? (
//     children
//   ) : (
//     <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
//       <motion.div
//         animate={{ x: '-100%' }}
//         transition={{
//           repeat: Infinity,
//           duration: 5,
//           ease: 'linear',
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };
