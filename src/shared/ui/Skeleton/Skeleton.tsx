import styles from './styles.module.scss';

interface SkeletonProps {
	height?: string;
	width?: string;
	borderRadius?: string;
	marginBottom?: string;
}

export const Skeleton = ({
	height = '16px',
	width = '100%',
	borderRadius = '4px',
	marginBottom = '0',
}: SkeletonProps) => {
	return (
		<div
			className={styles.skeleton}
			style={{ height, width, borderRadius, marginBottom }}
		/>
	);
};
