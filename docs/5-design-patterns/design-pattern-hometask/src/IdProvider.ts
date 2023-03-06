export class IdProvider {
  private static IdProvider: IdProvider;
  private static ID: number = 0;

  private constructor() {}

  public static getInstance(): IdProvider {
    if (!IdProvider.IdProvider) {
      IdProvider.IdProvider = new IdProvider();
    }

    return IdProvider.IdProvider;
  }

  public getShipmentId(): number {
    return IdProvider.ID++
  }
}