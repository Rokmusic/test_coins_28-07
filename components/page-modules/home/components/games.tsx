'use client';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import Link from 'next/link';

import styles from './home-components.module.css';

import gameboy from '@/public/gameboy.svg';
import game from '@/assets/images/game.png';
import LtcIcon from '@/components/common/icons/ltc-icon';
import Binance24 from '@/components/common/icons/binance-24';
import ArrowLeft from '@/components/common/icons/arrow-left';
import ArrowRight from '@/components/common/icons/arrow-roght';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrevArrow(props: any) {
  const { ...res } = props;
  return (
    <div {...res}>
      <ArrowLeft />
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NextArrow(props: any) {
  const { ...res } = props;
  return (
    <div {...res}>
      <ArrowRight />
    </div>
  );
}

const Games = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 385,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionTitleContainer}>
        <Image src={gameboy} alt="gameb-boy" />
        <h3 className={styles.sectionTitleNormal}>Blockchain Games</h3>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {[...new Array(12)].map((_, i) => (
            <GameItem key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const GameItem = () => {
  return (
    <Link href="#">
      <div className={styles.sliderItem}>
        <div className={styles.slideTop}>
          <Image src={game} alt="game" />
        </div>
        <div className={styles.slideTitle}>
          Stables <span className={styles.new}> NEW</span>
        </div>
        <h3 className={styles.slideDesc}>Open World</h3>
        <div className={styles.slideIcons}>
          <LtcIcon />
          <Binance24 />
        </div>
        <div className={styles.votesContainer}>
          <button className={styles.votesBtn}>
            <span className={styles.votesBtnText}>Vote</span>
            <span className={styles.votesCount}>{15.531}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Games;
