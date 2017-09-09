Class Item
{
    iconstructor(iname, islot, bonustyp, bonusval, iicon)
    {
    this.itemname = iname;
    this.slot = islot; //slots should be an enumerated type if js has them//
    this.bonustype = bonustyp; //what stat it boosts//
    this.bonusvalue = bonusval; //by how much//
    this.itemicon = iicon; //path to icon?//
    }
}
