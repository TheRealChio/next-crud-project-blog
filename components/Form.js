function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby={formName}
      className="mt-7 flex flex-col items-start w-[50%] bg-slate-200 px-4 py-5 rounded-xl"
    >
      <label htmlFor="title" className="text-lg">
        Title
      </label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Give your post a title.."
        defaultValue={defaultData?.title}
        className="w-full rounded-xl border border-gray-300 px-2 py-1 mb-6"
        required
      />

      <label htmlFor="author" className="text-lg">
        Author
      </label>
      <input
        id="author"
        name="author"
        type="text"
        placeholder="Author name.."
        defaultValue={defaultData?.author}
        className="w-full rounded-xl border border-gray-300 px-2 py-1 mb-6"
        required
      />

      <label htmlFor="text" className="text-lg">
        Text
      </label>
      <textarea
        id="text"
        name="text"
        type="text"
        placeholder="Enter your post text here.."
        defaultValue={defaultData?.text}
        className="w-full rounded-xl border border-gray-300 px-2 py-1 mb-6 h-[200px] resize-none"
        required
      />
      <button
        type="submit"
        className="bg-slate-700 text-slate-50 py-2 px-4 rounded-xl"
      >
        {formName === "add-post" ? "Create Post" : "Edit Post"}
      </button>
    </form>
  );
}

export default Form;
