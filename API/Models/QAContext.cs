using Microsoft.EntityFrameworkCore;

namespace QAForum.Models
{
    public class QAContext : DbContext
    {
        public QAContext(DbContextOptions<QAContext> options) : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        public DbSet<User> Users => Set<User>();
    }
}
