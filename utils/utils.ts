export const isMobile = (userAgent: string) => {
    return {
        isAndroid(): boolean {
            return !!userAgent.match(/Android/i);
        },
        isBlackBerry(): boolean {
            return !!userAgent.match(/BlackBerry/i);
        },
        isiOS(): boolean {
            return !!userAgent.match(/iPhone|iPad|iPod/i);
        },
        isOpera(): boolean {
            return !!userAgent.match(/Opera Mini/i);
        },
        isWindows(): boolean {
            return !!userAgent.match(/IEMobile/i);
        },
        isHandHeld(): boolean {
            return (this.isAndroid() || this.isBlackBerry() || this.isiOS() || this.isOpera() || this.isWindows());
        },
        isDesktop(): boolean {
            return (!this.isHandHeld());
        }
    };
};
