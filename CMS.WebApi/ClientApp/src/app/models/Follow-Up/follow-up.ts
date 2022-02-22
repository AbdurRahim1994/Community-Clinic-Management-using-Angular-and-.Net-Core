export class FollowUp {
  constructor
    (
    public followUpId?: number,
    public followUpDate?: Date,
    public physicalCheckUpId?: number,
    public checkUpDate?: Date,
    public testGiven?: string,
    public previousMedicine?: string,
    public testResult?: string,
    public observation?: string,
    public updatedMedicine?: string,
    public advice?: string
    ) { }
}
