function FormComment() {
  return (
    <form className="flex flex-col gap-6 items-start">
      <h2 className="text-xl text-blue-950 w-full">Leave a comments</h2>
      <textarea
        className="py-2 px-3 bg-gray-50 text-gray-600 rounded-sm w-full"
        name=""
        id=""
        cols="10"
        rows="5"
        placeholder="Comments"
      ></textarea>
      <div className="grid grid-cols-3 gap-2 w-full">
        <input
          type="text"
          className="py-2 px-3 bg-gray-50 text-gray-600 rounded-sm"
          placeholder="Name"
        />
        <input
          type="email"
          className="py-2 px-3 bg-gray-50 text-gray-600 rounded-sm"
          placeholder="Email"
        />
        <input
          type="text"
          className="py-2 px-3 bg-gray-50 text-gray-600 rounded-sm"
          placeholder="Website"
        />
      </div>
      <input
        type="submit"
        className="py-2 px-8 rounded-sm text-white text-sm shadow-md shadow-[#4040a1] bg-[#4040a1]"
        value="Submit"
      />
    </form>
  );
}

export default FormComment;
