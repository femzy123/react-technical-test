import Image from 'next/image'
import styles from './page.module.css'
import Reviews from './Reviews';

export default function ReviewPage() {
  return <div className="text-3xl font-bold">
    <Reviews />
  </div>;
}
