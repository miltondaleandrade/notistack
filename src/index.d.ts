import * as React from 'react';
import { SnackbarProps, SnackbarClassKey } from '@material-ui/core/Snackbar';
import { SnackbarContentProps } from '@material-ui/core/SnackbarContent';

export type OptionalBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R

type NonSupportedProps = 'open' | 'message' | 'classes';
export type SnackbarKey = string | number;
export type VariantType = 'default' | 'error' | 'success' | 'warning' | 'info';
export type CloseReason = 'timeout' | 'clickaway' | 'maxsnack' | 'instructed';

export type SnackbarMessage = string | React.ReactNode;
export type SnackbarAction = SnackbarContentProps['action'] | ((key: SnackbarKey) => React.ReactNode);
export type SnackbarContent = React.ReactNode | ((key: SnackbarKey, message: SnackbarMessage) => React.ReactNode);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TransitionCloseHandler = (event: React.SyntheticEvent<any> | null, reason: CloseReason, key: SnackbarKey) => void;
export type TransitionEnterHandler = (node: HTMLElement, isAppearing: boolean, key: SnackbarKey) => void;
export type TransitionHandler = (node: HTMLElement, key: SnackbarKey) => void;
export interface TransitionHandlerProps {
    onClose: TransitionCloseHandler;
    onEnter: TransitionHandler;
    onEntering: TransitionHandler;
    onEntered: TransitionEnterHandler;
    onExit: TransitionHandler;
    onExiting: TransitionHandler;
    onExited: TransitionHandler;
}

export type ContainerClassKey =
    | 'containerAnchorOriginTopCenter'
    | 'containerAnchorOriginBottomCenter'
    | 'containerAnchorOriginTopRight'
    | 'containerAnchorOriginBottomRight'
    | 'containerAnchorOriginTopLeft'
    | 'containerAnchorOriginBottomLeft';

export type VariantClassKey = 'variantSuccess' | 'variantError' | 'variantInfo' | 'variantWarning';
export type CombinedClassKey = VariantClassKey | ContainerClassKey | SnackbarClassKey;

export type IconVariant = Record<VariantType, React.ReactNode>;

export interface ProviderContext {
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
}

export function withSnackbar<P extends ProviderContext>(component: React.ComponentType<P>):
    React.ComponentClass<Omit<P, keyof ProviderContext>> & { WrappedComponent: React.ComponentType<P> };


export function useSnackbar(): ProviderContext;

// backwards compatibility
export type WithSnackbarProps = ProviderContext;

export interface SharedProps extends Modify<Omit<SnackbarProps, NonSupportedProps>, Partial<TransitionHandlerProps>> {
    variant?: VariantType;
    preventDuplicate?: boolean;
    content?: SnackbarContent;
    action?: SnackbarAction;
}

export interface OptionsObject extends SharedProps {
    key?: SnackbarKey;
    persist?: boolean;
}

// all material-ui props, including class keys for notistack and material-ui with additional notistack props
export interface SnackbarProviderProps extends SharedProps {
    dense?: boolean;
    maxSnack?: number;
    hideIconVariant?: boolean;
    domRoot?: HTMLElement;
    classes?: Partial<ClassNameMap<CombinedClassKey>>;
    iconVariant?: Partial<IconVariant>;
}

export const SnackbarProvider: React.ComponentType<SnackbarProviderProps>;
