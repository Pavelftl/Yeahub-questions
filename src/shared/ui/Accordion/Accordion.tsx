import { ReactNode, useState } from 'react';

import { AccordionBody } from './AccordionBody';
import { AccordionTitle } from './AccordionTitle';

import styles from './styles.module.scss';

interface Props {
	link: ReactNode;
	body: ReactNode;
	title: string;
	children: ReactNode;
}

export const Accordion = ({ title, link, body, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<AccordionTitle title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
			<AccordionBody isOpen={isOpen} link={link} body={body}>
				{children}
			</AccordionBody>
		</div>
	);
};
