declare global {
    namespace NamespaceForMerge {
        interface InterfaceForMerge {
            propertyDeclaredAtUpstream?: string;
        }
    }
    interface Window {
        declaredAsInterface?: NamespaceForMerge.InterfaceForMerge;
    }
}
export declare const echo: (msg: string) => void;
