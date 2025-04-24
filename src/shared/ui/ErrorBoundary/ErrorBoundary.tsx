import React, { Component, ReactNode } from 'react';

type Props = {
	children: ReactNode;
	fallback?: ReactNode;
};

type State = {
	hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false,
	};

	static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || <div>Что-то пошло не так</div>;
		}

		return this.props.children;
	}
}
