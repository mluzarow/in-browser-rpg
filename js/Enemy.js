class Enemy
{
    constructor (mname, mhp, mwep, mdam, challenge)
    {
        this.enemyname = mname;
        this.xp = challenge;
        this.maxhp = mhp;
        this.hp = this.maxhp;
        this.weapon = mwep;
        this.damage = mdam;
    }

    
}
