export class Doctor {
  constructor
    (
    public doctorId?: number,
    public doctorName?: string,
    public address?: string,
    public contact?: string,
    public email?: string,
    public appointed?: Date,
    public designationId?: number,
    public degree?: string,
    public specialization?: string,
    public picture?: string
    ) { }
}
