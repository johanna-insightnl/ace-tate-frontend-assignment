
interface Props {
  primary: string;
  secondary?: string;
  buttonSizeClass?: string;
}

export default function AcetateColorCircle({ primary, secondary, buttonSizeClass }: Props) {
  return (
    <div className={`circle-color ${buttonSizeClass}`} style={{backgroundColor: secondary, overflow: "hidden"}}>
      <svg viewBox="0 0 64 64" fill={primary} xmlns="http://www.w3.org/2000/svg" style={{borderRadius: "50%"}}>
        <path d="M0 49.6889V64H64V43.2412C63.669 43.0677 63.086 42.8795 62.4761 42.7809C61.6127 42.6793 60.4191 42.3069 59.7841 41.9683C58.7936 41.4941 58.5143 41.0879 57.854 39.3269C56.9143 36.8889 56.3556 36.6519 55.3904 38.4127C54.1968 40.5799 53.5365 43.2551 53.3333 46.946C53.2064 48.8763 53.1809 51.0433 53.2571 51.7884C53.5873 55.0731 51.9619 59.6444 49.5239 62.2857L48.5079 63.3693L48.0508 62.5905C47.5175 61.6424 46.1968 61.236 40.8127 60.4233C39.8476 60.254 38.6793 59.8476 38.1715 59.5091C37.0032 58.6624 35.1239 56.0889 34.3619 54.2265C33.7524 52.8043 33.5745 52.6349 30.5524 51.1111L27.3777 49.4857L26.7683 45.2529L26.1333 41.0201L27.0731 39.9704C29.4349 37.3968 31.3143 35.9747 36.0889 33.1301C39.3143 31.2 40.1269 30.4551 40.8127 28.6941C41.5237 26.8656 41.4731 25.6465 40.6603 24.2244C39.2889 21.8201 38.8825 21.7185 32.8127 22.4973C31.2889 22.7005 30.9079 22.6328 29.892 21.8879C28.2667 20.7365 27.7079 18.6032 27.6317 13.2529C27.5556 8.71535 27.2 6.95451 26.0317 5.29524C25.0667 3.90688 24.2285 3.29736 22.1715 2.41694C21.1556 1.97672 20.8 1.67196 21.1048 1.53652C21.3333 1.40107 21.6381 1.33335 21.7651 1.3672C22.2984 1.53652 24.7111 0.85927 25.3715 0.351333C25.5127 0.243722 25.6417 0.126611 25.7584 3.88001e-08L0 0V5.82083C0.690992 6.67448 1.36752 7.35934 1.85397 7.63175C2.69206 8.10583 2.79364 8.10583 3.45396 7.39472C4.79999 5.93863 5.6889 5.53228 6.67937 5.87091C7.59366 6.17567 7.59365 6.20954 7.51746 8.00424C7.39048 10.6794 8.07619 12.3386 11.1492 16.6731C14.146 20.9397 14.5777 22.0911 14.2984 25.4772C14.0699 28.254 13.2064 29.9132 9.67619 34.5185C2.08254 44.4064 1.67619 45.0159 0.914281 47.8941L0.431737 49.6889H0ZM25.6 42.2392C25.6 42.4085 25.7269 42.5777 25.8793 42.5777C26.0064 42.5777 26.1333 42.4085 26.1333 42.2392C26.1333 42.036 26.0064 41.8667 25.8793 41.8667C25.7269 41.8667 25.6 42.036 25.6 42.2392ZM16.5333 2.48467C16.5333 2.68784 16.7365 2.7217 16.9905 2.55239C17.2444 2.41694 18.0571 2.17991 18.7683 2.07832C20.1651 1.84128 20.1651 1.33335 18.7683 1.33335C17.7777 1.33335 16.5333 1.97674 16.5333 2.48467Z" />
        <path d="M41.3806 0C43.5345 0.593331 44.0932 1.38542 45.1809 5.09207L46.1715 8.51218L45.5873 9.35874C43.8603 11.7968 46.654 19.7884 50.1841 22.6328C51.1237 23.3777 51.4285 23.4116 55.1111 23.2761C58.0317 23.1747 59.454 22.9715 60.546 22.4635C61.3333 22.1249 62.6286 21.8201 63.3651 21.7863C63.5979 21.7863 63.8141 21.7768 64 21.7597V0H41.3806Z" />
      </svg>
    </div>
  )
}
