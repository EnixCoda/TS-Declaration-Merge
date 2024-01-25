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

export const echo = (msg: string) => {
  console.log(msg);
  console.log(window.declaredAsInterface?.propertyDeclaredAtUpstream);
};
