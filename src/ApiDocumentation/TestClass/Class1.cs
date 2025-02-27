using System.ComponentModel;

namespace TestClass
{
    /// <summary>
    /// This is a simple test
    /// </summary>
    /// <remarks>
    /// Please note that this has no useful output
    /// </remarks>
    public class TestClass1 : INotifyPropertyChanged
    {
        /// <inheritdoc/>
        public event PropertyChangedEventHandler? PropertyChanged;

        /// <summary>
        /// A test field
        /// </summary>
        public static string TestField = "TestField";

        public string? TestProperty { get; set; }

        /// <summary>
        /// Gets a string representing Test
        /// </summary>
        /// <param name="args">The format arguments</param>
        /// <returns>the formatted string</returns>
        /// <exception cref="NullReferenceException">In case <see cref="TestProperty"/> is null</exception>
        /// <remarks>Nothing else to say: <see langword="true"/></remarks>
        public string GetTestPropertyFormatted (params string[] args)
        {
            if (TestProperty is null)
            {
                throw new NullReferenceException(nameof(TestProperty));
            }
            return string.Format(TestProperty, args);
        }
    }
}
