export const isMobile = (userAgent: string) => {
    return {
        isAndroid(): boolean {
            return userAgent.match(/Android/i) != null;
        },
        isBlackBerry(): boolean {
            return userAgent.match(/BlackBerry/i) != null;
        },
        isiOS(): boolean {
            return userAgent.match(/iPhone|iPad|iPod/i) != null;
        },
        isOpera(): boolean {
            return userAgent.match(/Opera Mini/i) != null;
        },
        isWindows(): boolean {
            return userAgent.match(/IEMobile/i) != null;
        },
        isHandHeld(): boolean {
            return (this.isAndroid() || this.isBlackBerry() || this.isiOS() || this.isOpera() || this.isWindows());
        },
        isDesktop(): boolean {
            return (!this.isHandHeld());
        }
    };
};
