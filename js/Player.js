class Player
{
    constructor (cname)
    {
        this.playername = cname;
        this.level = 1;
        this.xp = 0;
        this.maxhp = 10;
        this.hp = this.maxhp;
        this.maxmana = 5
        this.mana = this.maxmana;
        this.weapon = "sword";
        this.damage = 6;
        this.spell = "power bolt";
        this.spelldam =  4;
        this.healpot = 1;
        this.manapot = 0;
    }
    HealMe()
    {
        if (this.healpot > 0)
        {
            this.hp = this.maxhp;
            this.healpot--;
        }
    }
    RestoreMana()
    {
        if (this.manapot > 0)
        {
            this.mana = this.maxmana;
            this.manapot--;
        }
    } 
    AddXp(sweetloot)
    {
        this.xp += sweetloot;
        if (this.xp >= this.level * 1000) 
        {
            LevelUp();
        }
    }
    LevelUp()
    {
        this.level++;
        this.xp = 0;
        this.maxhp += 5;
        this.maxmana += 3;
    }
    
}
