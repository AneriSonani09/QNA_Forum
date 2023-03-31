namespace QAForum.Models
{
    public class Question
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
 
        //public virtual ApplicationUser User { get; set; }

        //public virtual ICollection<Answer> Answers { get; set; }
        //public virtual ICollection<Tag> Tags { get; set; }
    }
}
