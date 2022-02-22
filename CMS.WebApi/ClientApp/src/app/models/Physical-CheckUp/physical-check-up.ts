export class PhysicalCheckUp {
  constructor
    (
    public physicalCheckUpId?: number,
    public patientName?: string,
    public patientAddress?: string,
    public checkUpDate?: Date,
    public doctorId?: number,
    public serviceId?: number,
    public pressure?: string,
    public heartBeat?: string,
    public weight?: string,
    public observation?: string,
    public testGiven?: string,
    public medicine?: string,
    public advice?: string
  ) { }
}
