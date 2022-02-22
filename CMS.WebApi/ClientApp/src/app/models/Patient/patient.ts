export class Patient {
  constructor
    (
    public patientId?: number,
    public patientName?: string,
    public address?: string,
    public age?: number,
    public checkUpDate?: Date,
    public observation?: string,
    public serviceId?: number,
    public doctorId?: number
    ) { }
}
