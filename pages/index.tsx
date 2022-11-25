import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Header from '../components/header/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Use namespace as argument. This is crutual. Without namespace translations won't work
  const { t } = useTranslation('common')
  const sportsmenuerror = t('sports-menu-error')

  return (
    <>
      <Header />
      <h2>Just some of our keys for testing:</h2>
      <p>sports-menu-error :  {sportsmenuerror}</p>
      <p>sports-menu-title :  {t('sports-menu-title')}</p>
      <p>success :  {t('success')}</p>
      <p>success--wait-for-confirmation :  {t('success--wait-for-confirmation')}</p>
      <p>tehran :  {t('tehran')}</p>
      <p>you-are-not-allowed-to-withdraw-by-wirecard-because-you-have-not-deposited-by-wirecard-so-far :  {t('you-are-not-allowed-to-withdraw-by-wirecard-because-you-have-not-deposited-by-wirecard-so-far')}</p>
      <p>you-have-reached-your-daily-responsible-gambling-limit-of-s-s- :  {t('you-have-reached-your-daily-responsible-gambling-limit-of-s-s-')}</p>
      <p>you-have-reached-your-weekly-responsible-gambling-limit-of-s-s- :  {t('you-have-reached-your-weekly-responsible-gambling-limit-of-s-s-')}</p>
      <p>you-have-successfully-requested-cpsbankcard-for-withdraw-when-your-bank-confirms-the-transaction-your-account-will-be-credited- :  {t('you-have-successfully-requested-cpsbankcard-for-withdraw-when-your-bank-confirms-the-transaction-your-account-will-be-credited-')}</p>
      <p>your-cpsbankcard-withdraw-was-successful- :  {t('your-cpsbankcard-withdraw-was-successful-')}</p>
      <Link href={'/pokemons'}>
        <a>
          <h3>Go to pokemons page</h3>
        </a>
      </Link>

    </>
  )
}
