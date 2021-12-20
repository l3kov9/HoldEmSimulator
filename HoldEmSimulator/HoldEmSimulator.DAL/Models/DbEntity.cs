namespace HoldEmSimulator.DAL.Models
{
    using System;

    public class DbEntity
    {
        public DbEntity()
        {
            this.Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
    }
}
