import { ReactNode } from 'react'

const sixHundred: { [key: string]: ReactNode } = {
	// #region v1.0

	// #endregion

	// #region v1.1
	// A
	add: (
		<>
			<path
				d='M16 25.6666C15.6222 25.6666 15.3055 25.5388 15.05 25.2833C14.7944 25.0277 14.6666 24.711 14.6666 24.3333V17.3333H7.66665C7.28887 17.3333 6.9722 17.2055 6.71665 16.9499C6.46109 16.6944 6.33331 16.3777 6.33331 15.9999C6.33331 15.6221 6.46109 15.3055 6.71665 15.0499C6.9722 14.7944 7.28887 14.6666 7.66665 14.6666H14.6666V7.66659C14.6666 7.28881 14.7944 6.97214 15.05 6.71659C15.3055 6.46103 15.6222 6.33325 16 6.33325C16.3778 6.33325 16.6944 6.46103 16.95 6.71659C17.2055 6.97214 17.3333 7.28881 17.3333 7.66659V14.6666H24.3333C24.7111 14.6666 25.0278 14.7944 25.2833 15.0499C25.5389 15.3055 25.6666 15.6221 25.6666 15.9999C25.6666 16.3777 25.5389 16.6944 25.2833 16.9499C25.0278 17.2055 24.7111 17.3333 24.3333 17.3333H17.3333V24.3333C17.3333 24.711 17.2055 25.0277 16.95 25.2833C16.6944 25.5388 16.3778 25.6666 16 25.6666Z'
				fill='#222343'
			/>
		</>
	),
	arrowBack: (
		<>
			<path
				d='M14.5334 25.9334L5.53336 16.9334C5.37781 16.8001 5.27225 16.6556 5.2167 16.5001C5.16114 16.3445 5.13336 16.1779 5.13336 16.0001C5.13336 15.8223 5.16114 15.6556 5.2167 15.5001C5.27225 15.3445 5.37781 15.2001 5.53336 15.0667L14.5667 6.03341C14.8334 5.76675 15.1445 5.63897 15.5 5.65008C15.8556 5.66119 16.1556 5.80008 16.4 6.06675C16.6667 6.33341 16.8 6.64452 16.8 7.00008C16.8 7.35564 16.6667 7.66675 16.4 7.93341L9.6667 14.6667H25.0334C25.4111 14.6667 25.7278 14.7945 25.9834 15.0501C26.2389 15.3056 26.3667 15.6223 26.3667 16.0001C26.3667 16.3779 26.2389 16.6945 25.9834 16.9501C25.7278 17.2056 25.4111 17.3334 25.0334 17.3334H9.6667L16.4334 24.1001C16.7 24.3667 16.8278 24.6723 16.8167 25.0167C16.8056 25.3612 16.6667 25.6667 16.4 25.9334C16.1334 26.2001 15.8223 26.3334 15.4667 26.3334C15.1111 26.3334 14.8 26.2001 14.5334 25.9334Z'
				fill='#222343'
			/>
		</>
	),
	arrowForward: (
		<>
			<path
				d='M15.0667 25.9C14.8223 25.6555 14.7 25.3499 14.7 24.9833C14.7 24.6166 14.8223 24.2999 15.0667 24.0333L21.8 17.3333H6.43336C6.05558 17.3333 5.74447 17.2055 5.50003 16.95C5.25558 16.6944 5.13336 16.3777 5.13336 16C5.13336 15.6222 5.25558 15.3055 5.50003 15.05C5.74447 14.7944 6.05558 14.6666 6.43336 14.6666H21.8L15.0667 7.93328C14.8223 7.68884 14.7 7.37773 14.7 6.99995C14.7 6.62217 14.8223 6.31106 15.0667 6.06662C15.3334 5.82217 15.65 5.69995 16.0167 5.69995C16.3834 5.69995 16.6889 5.82217 16.9334 6.06662L25.9667 15.0666C26.1 15.2 26.2 15.3444 26.2667 15.5C26.3334 15.6555 26.3667 15.8222 26.3667 16C26.3667 16.1555 26.3334 16.3166 26.2667 16.4833C26.2 16.65 26.1 16.7999 25.9667 16.9333L16.9334 25.9333C16.6889 26.2 16.3834 26.3222 16.0167 26.3C15.65 26.2777 15.3334 26.1444 15.0667 25.9Z'
				fill='currentColor'
			/>
		</>
	),
	arrowNorthEast: (
		<>
			<path
				d='M5.80002 26.1999C5.53336 25.9333 5.40002 25.6221 5.40002 25.2666C5.40002 24.911 5.53336 24.5999 5.80002 24.3333L21.1667 8.99992H13.1334C12.7556 8.99992 12.4389 8.87214 12.1834 8.61659C11.9278 8.36103 11.8 8.04436 11.8 7.66659C11.8 7.28881 11.9278 6.97214 12.1834 6.71659C12.4389 6.46103 12.7556 6.33325 13.1334 6.33325H24.3334C24.7111 6.33325 25.0278 6.46103 25.2834 6.71659C25.5389 6.97214 25.6667 7.28881 25.6667 7.66659V18.8666C25.6667 19.2444 25.5389 19.561 25.2834 19.8166C25.0278 20.0721 24.7111 20.1999 24.3334 20.1999C23.9556 20.1999 23.6389 20.0721 23.3834 19.8166C23.1278 19.561 23 19.2444 23 18.8666V10.8333L7.66669 26.1999C7.42225 26.4666 7.11669 26.5999 6.75002 26.5999C6.38336 26.5999 6.06669 26.4666 5.80002 26.1999Z'
				fill='#222343'
			/>
		</>
	),
	arrowNorth: (
		<>
			<path
				d='M16 29.6666C15.6222 29.6666 15.3056 29.5388 15.05 29.2833C14.7945 29.0277 14.6667 28.711 14.6667 28.3333V7.23327L8.96668 12.9333C8.70001 13.2222 8.3889 13.361 8.03335 13.3499C7.67779 13.3388 7.37779 13.1999 7.13335 12.9333C6.84446 12.6888 6.70001 12.3888 6.70001 12.0333C6.70001 11.6777 6.84446 11.3666 7.13335 11.0999L15.0667 3.13327C15.2 2.99993 15.3445 2.90549 15.5 2.84993C15.6556 2.79438 15.8222 2.7666 16 2.7666C16.1778 2.7666 16.3445 2.79438 16.5 2.84993C16.6556 2.90549 16.8 2.99993 16.9333 3.13327L24.9 11.0999C25.1667 11.3666 25.3 11.6777 25.3 12.0333C25.3 12.3888 25.1667 12.6888 24.9 12.9333C24.6333 13.1777 24.3222 13.3055 23.9667 13.3166C23.6111 13.3277 23.3 13.1999 23.0333 12.9333L17.3333 7.23327V28.3333C17.3333 28.711 17.2056 29.0277 16.95 29.2833C16.6945 29.5388 16.3778 29.6666 16 29.6666Z'
				fill='#222343'
			/>
		</>
	),
	arrowNorthWeast: (
		<>
			<path
				d='M24.3333 26.1999L8.99998 10.8333V18.8666C8.99998 19.2444 8.8722 19.561 8.61665 19.8166C8.36109 20.0721 8.04442 20.1999 7.66665 20.1999C7.28887 20.1999 6.9722 20.0721 6.71665 19.8166C6.46109 19.561 6.33331 19.2444 6.33331 18.8666V7.66659C6.33331 7.28881 6.46109 6.97214 6.71665 6.71659C6.9722 6.46103 7.28887 6.33325 7.66665 6.33325H18.8666C19.2444 6.33325 19.5611 6.46103 19.8166 6.71659C20.0722 6.97214 20.2 7.28881 20.2 7.66659C20.2 8.04436 20.0722 8.36103 19.8166 8.61659C19.5611 8.87214 19.2444 8.99992 18.8666 8.99992H10.8333L26.2 24.3333C26.4666 24.5999 26.6 24.911 26.6 25.2666C26.6 25.6221 26.4666 25.9333 26.2 26.1999C25.9333 26.4666 25.6222 26.5999 25.2666 26.5999C24.9111 26.5999 24.6 26.4666 24.3333 26.1999Z'
				fill='#222343'
			/>
		</>
	),
	arrowSouth: (
		<>
			<path
				d='M16 29.1333C15.8222 29.1333 15.6556 29.1055 15.5 29.05C15.3445 28.9944 15.2 28.8888 15.0667 28.7333L7.13335 20.7666C6.84446 20.5 6.70001 20.1888 6.70001 19.8333C6.70001 19.4777 6.84446 19.1666 7.13335 18.9C7.37779 18.6333 7.67779 18.5 8.03335 18.5C8.3889 18.5 8.70001 18.6333 8.96668 18.9L14.6667 24.6333V3.49995C14.6667 3.1444 14.7945 2.83884 15.05 2.58328C15.3056 2.32773 15.6222 2.19995 16 2.19995C16.3778 2.19995 16.6945 2.32773 16.95 2.58328C17.2056 2.83884 17.3333 3.15551 17.3333 3.53328V24.6333L23.0333 18.9C23.2778 18.6555 23.5833 18.5277 23.95 18.5166C24.3167 18.5055 24.6333 18.6333 24.9 18.9C25.1667 19.1666 25.3 19.4777 25.3 19.8333C25.3 20.1888 25.1667 20.5 24.9 20.7666L16.9333 28.7333C16.8 28.8888 16.6556 28.9944 16.5 29.05C16.3445 29.1055 16.1778 29.1333 16 29.1333Z'
				fill='#222343'
			/>
		</>
	),

	// C
	chevronBack: (
		<>
			<path
				d='M20.7172 28.6332L9.01719 16.9332C8.88385 16.7999 8.78385 16.6555 8.71719 16.4999C8.65052 16.3443 8.61719 16.1777 8.61719 15.9999C8.61719 15.8221 8.65052 15.6555 8.71719 15.4999C8.78385 15.3443 8.88385 15.1999 9.01719 15.0666L20.7172 3.36657C21.0283 3.05546 21.4172 2.8999 21.8839 2.8999C22.3505 2.8999 22.7283 3.05546 23.0172 3.36657C23.3505 3.67768 23.5172 4.06657 23.5172 4.53324C23.5172 4.9999 23.3505 5.3999 23.0172 5.73324L12.7505 15.9999L23.0172 26.2666C23.3505 26.5999 23.5172 26.9943 23.5172 27.4499C23.5172 27.9055 23.3616 28.2888 23.0505 28.5999C22.7172 28.9332 22.3227 29.0999 21.8672 29.0999C21.4116 29.0999 21.0283 28.9443 20.7172 28.6332Z'
				fill='#222343'
			/>
		</>
	),
	chevronDown: (
		<>
			<path
				d='M16 20.3999C15.8222 20.3999 15.6556 20.3666 15.5 20.2999C15.3445 20.2333 15.2 20.1333 15.0667 19.9999L8.46669 13.3999C8.22225 13.1555 8.10558 12.8444 8.11669 12.4666C8.1278 12.0888 8.25558 11.7777 8.50002 11.5333C8.78891 11.2444 9.10558 11.1166 9.45002 11.1499C9.79447 11.1833 10.1 11.3222 10.3667 11.5666L16 17.1999L21.6334 11.5666C21.8778 11.3222 22.1945 11.1888 22.5834 11.1666C22.9722 11.1444 23.2889 11.2777 23.5334 11.5666C23.8222 11.8111 23.95 12.1166 23.9167 12.4833C23.8834 12.8499 23.7445 13.1666 23.5 13.4333L16.9334 19.9999C16.8 20.1333 16.6556 20.2333 16.5 20.2999C16.3445 20.3666 16.1778 20.3999 16 20.3999Z'
				fill='#222343'
			/>
		</>
	),
	chevronDownward: (
		<>
			<path
				d='M3.33285 8.94993C3.66618 8.63882 4.05507 8.47771 4.49951 8.4666C4.94396 8.45549 5.33285 8.6166 5.66618 8.94993L15.9328 19.2166L26.1995 8.94993C26.5106 8.63882 26.894 8.47771 27.3495 8.4666C27.8051 8.45549 28.1995 8.6166 28.5328 8.94993C28.8662 9.23882 29.0384 9.6166 29.0495 10.0833C29.0606 10.5499 28.8995 10.9388 28.5662 11.2499L16.8662 22.9833C16.7328 23.1166 16.5884 23.2166 16.4328 23.2833C16.2773 23.3499 16.1106 23.3833 15.9328 23.3833C15.7551 23.3833 15.5884 23.3499 15.4328 23.2833C15.2773 23.2166 15.1328 23.1166 14.9995 22.9833L3.29951 11.2833C2.9884 10.9722 2.83285 10.5888 2.83285 10.1333C2.83285 9.67771 2.99951 9.28327 3.33285 8.94993Z'
				fill='#222343'
			/>
		</>
	),
	chevronForward: (
		<>
			<path
				d='M8.96666 28.5334C8.65555 28.2 8.49444 27.8111 8.48333 27.3667C8.47221 26.9223 8.63333 26.5334 8.96666 26.2L19.2333 15.9334L8.96666 5.6667C8.65555 5.35559 8.49444 4.97226 8.48333 4.5167C8.47221 4.06114 8.63333 3.6667 8.96666 3.33337C9.25555 3.00003 9.63333 2.82781 10.1 2.8167C10.5667 2.80559 10.9555 2.9667 11.2667 3.30003L23 15C23.1333 15.1334 23.2333 15.2778 23.3 15.4334C23.3667 15.5889 23.4 15.7556 23.4 15.9334C23.4 16.1111 23.3667 16.2778 23.3 16.4334C23.2333 16.5889 23.1333 16.7334 23 16.8667L11.3 28.5667C10.9889 28.8778 10.6055 29.0334 10.15 29.0334C9.69444 29.0334 9.29999 28.8667 8.96666 28.5334Z'
				fill='#222343'
			/>
		</>
	),
	chevronLeft: (
		<>
			<path
				d='M17.7333 23.5L11.1333 16.9C11 16.7667 10.9 16.6222 10.8333 16.4667C10.7667 16.3111 10.7333 16.1444 10.7333 15.9667C10.7333 15.7889 10.7667 15.6222 10.8333 15.4667C10.9 15.3111 11 15.1667 11.1333 15.0333L17.7667 8.4C18.0333 8.13333 18.35 8 18.7167 8C19.0833 8 19.4 8.13333 19.6667 8.4C19.9333 8.66667 20.0611 8.98889 20.05 9.36667C20.0389 9.74444 19.9 10.0667 19.6333 10.3333L14 15.9667L19.6667 21.6333C19.9333 21.9 20.0667 22.2111 20.0667 22.5667C20.0667 22.9222 19.9333 23.2333 19.6667 23.5C19.4 23.7667 19.0778 23.9 18.7 23.9C18.3222 23.9 18 23.7667 17.7333 23.5Z'
				fill='#222343'
			/>
		</>
	),
	chevronRight: (
		<>
			<path
				d='M11.5667 23.4999C11.3222 23.2111 11.1945 22.8888 11.1833 22.5333C11.1722 22.1777 11.3 21.8666 11.5667 21.5999L17.2 15.9666L11.5333 10.2999C11.2889 10.0555 11.1722 9.73884 11.1833 9.34995C11.1945 8.96106 11.3222 8.64439 11.5667 8.39995C11.8556 8.11106 12.1722 7.97217 12.5167 7.98328C12.8611 7.99439 13.1667 8.13328 13.4333 8.39995L20.0667 15.0333C20.2 15.1666 20.3 15.3111 20.3667 15.4666C20.4333 15.6222 20.4667 15.7888 20.4667 15.9666C20.4667 16.1444 20.4333 16.3111 20.3667 16.4666C20.3 16.6222 20.2 16.7666 20.0667 16.8999L13.4667 23.4999C13.2 23.7666 12.8889 23.8944 12.5333 23.8833C12.1778 23.8722 11.8556 23.7444 11.5667 23.4999Z'
				fill='#222343'
			/>
		</>
	),
	chevronUp: (
		<>
			<path
				d='M8.49997 19.9666C8.23331 19.7 8.09442 19.3889 8.08331 19.0333C8.0722 18.6777 8.19997 18.3777 8.46664 18.1333L15.0666 11.5333C15.2 11.4 15.3444 11.3 15.5 11.2333C15.6555 11.1666 15.8222 11.1333 16 11.1333C16.1778 11.1333 16.3444 11.1666 16.5 11.2333C16.6555 11.3 16.8 11.4 16.9333 11.5333L23.5333 18.1C23.8 18.3444 23.9333 18.65 23.9333 19.0166C23.9333 19.3833 23.8 19.6889 23.5333 19.9333C23.2666 20.2 22.95 20.3333 22.5833 20.3333C22.2166 20.3333 21.9 20.2 21.6333 19.9333L16 14.3333L10.3666 20C10.1222 20.2666 9.81664 20.3944 9.44997 20.3833C9.08331 20.3722 8.76664 20.2333 8.49997 19.9666Z'
				fill='#222343'
			/>
		</>
	),
	chevronUpward: (
		<>
			<path
				d='M28.55 22.8994C28.2167 23.2105 27.8278 23.3717 27.3834 23.3828C26.9389 23.3939 26.55 23.2328 26.2167 22.8994L15.95 12.6328L5.68336 22.8994C5.37225 23.2105 4.98892 23.3717 4.53336 23.3828C4.07781 23.3939 3.68336 23.2328 3.35003 22.8994C3.0167 22.6105 2.84447 22.2328 2.83336 21.7661C2.82225 21.2994 2.98336 20.9105 3.3167 20.5994L15.0167 8.8661C15.15 8.73276 15.2945 8.63276 15.45 8.5661C15.6056 8.49943 15.7723 8.4661 15.95 8.4661C16.1278 8.4661 16.2945 8.49943 16.45 8.5661C16.6056 8.63276 16.75 8.73276 16.8834 8.8661L28.5834 20.5661C28.8945 20.8772 29.05 21.2605 29.05 21.7161C29.05 22.1717 28.8834 22.5661 28.55 22.8994Z'
				fill='#222343'
			/>
		</>
	),
	close: (
		<>
			<path
				d='M16 17.8666L9.23334 24.6332C8.96668 24.8999 8.65556 25.0332 8.30001 25.0332C7.94445 25.0332 7.63334 24.8999 7.36668 24.6332C7.10001 24.3666 6.96667 24.0554 6.96667 23.6999C6.96667 23.3443 7.10001 23.0332 7.36668 22.7666L14.1333 15.9999L7.36668 9.23322C7.10001 8.96655 6.96667 8.65544 6.96667 8.29989C6.96667 7.94433 7.10001 7.63322 7.36668 7.36655C7.63334 7.09989 7.94445 6.96655 8.30001 6.96655C8.65556 6.96655 8.96668 7.09989 9.23334 7.36655L16 14.1332L22.7667 7.36655C23.0333 7.09989 23.3445 6.96655 23.7 6.96655C24.0556 6.96655 24.3667 7.09989 24.6333 7.36655C24.9 7.63322 25.0333 7.94433 25.0333 8.29989C25.0333 8.65544 24.9 8.96655 24.6333 9.23322L17.8667 15.9999L24.6333 22.7666C24.9 23.0332 25.0333 23.3443 25.0333 23.6999C25.0333 24.0554 24.9 24.3666 24.6333 24.6332C24.3667 24.8999 24.0556 25.0332 23.7 25.0332C23.3445 25.0332 23.0333 24.8999 22.7667 24.6332L16 17.8666Z'
				fill='#222343'
			/>
		</>
	),
	launch: (
		<>
			<path
				d='M6.16666 28.4667C5.45555 28.4667 4.83888 28.2056 4.31666 27.6833C3.79444 27.1611 3.53333 26.5444 3.53333 25.8333V6.16667C3.53333 5.43333 3.79444 4.80556 4.31666 4.28333C4.83888 3.76111 5.45555 3.5 6.16666 3.5H13.9667C14.3444 3.5 14.6611 3.63333 14.9167 3.9C15.1722 4.16667 15.3 4.48889 15.3 4.86667C15.3 5.22222 15.1722 5.52778 14.9167 5.78333C14.6611 6.03889 14.3444 6.16667 13.9667 6.16667H6.16666V25.8333H25.8333V18.0333C25.8333 17.6556 25.9611 17.3389 26.2167 17.0833C26.4722 16.8278 26.7889 16.7 27.1667 16.7C27.5222 16.7 27.8333 16.8278 28.1 17.0833C28.3667 17.3389 28.5 17.6556 28.5 18.0333V25.8333C28.5 26.5444 28.2389 27.1611 27.7167 27.6833C27.1944 28.2056 26.5667 28.4667 25.8333 28.4667H6.16666ZM12.2333 19.7333C11.9889 19.4889 11.8611 19.1889 11.85 18.8333C11.8389 18.4778 11.9667 18.1667 12.2333 17.9L24 6.16667H18.6333C18.2555 6.16667 17.9389 6.03889 17.6833 5.78333C17.4278 5.52778 17.3 5.21111 17.3 4.83333C17.3 4.47778 17.4278 4.16667 17.6833 3.9C17.9389 3.63333 18.2555 3.5 18.6333 3.5H27.1667C27.5222 3.5 27.8333 3.63333 28.1 3.9C28.3667 4.16667 28.5 4.47778 28.5 4.83333V13.3667C28.5 13.7444 28.3667 14.0611 28.1 14.3167C27.8333 14.5722 27.5111 14.7 27.1333 14.7C26.7778 14.7 26.4722 14.5722 26.2167 14.3167C25.9611 14.0611 25.8333 13.7444 25.8333 13.3667V8.03333L14.1 19.8C13.8555 20.0444 13.55 20.1611 13.1833 20.15C12.8167 20.1389 12.5 20 12.2333 19.7333Z'
				fill='#222343'
			/>
		</>
	),
	remove: (
		<>
			<path
				d='M7.66665 17.3334C7.28887 17.3334 6.9722 17.2056 6.71665 16.9501C6.46109 16.6945 6.33331 16.3779 6.33331 16.0001C6.33331 15.6223 6.46109 15.3056 6.71665 15.0501C6.9722 14.7945 7.28887 14.6667 7.66665 14.6667H24.3333C24.7111 14.6667 25.0278 14.7945 25.2833 15.0501C25.5389 15.3056 25.6666 15.6223 25.6666 16.0001C25.6666 16.3779 25.5389 16.6945 25.2833 16.9501C25.0278 17.2056 24.7111 17.3334 24.3333 17.3334H7.66665Z'
				fill='#222343'
			/>
		</>
	),
	// #endregion
}

export default sixHundred