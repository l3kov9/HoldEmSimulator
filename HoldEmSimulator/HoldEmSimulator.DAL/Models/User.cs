﻿using System;

namespace HoldEmSimulator.DAL.Models
{
    public class User : DbEntity
    {
        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime BirthDate { get; set; }
    }
}
