import { createCourse } from "../utils/utils";

export const CourseCreation = () => {
  const prerequisites = [{ id: null, name: "None" }];

  const subcategories = [
    { id: 1, name: "Python" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "GitHub" },
  ];

  const handleSubmit = async (ev) => {
    /*
    TODO: need to fix form data, wrong information currently
    */
    ev.preventDefault();
    const formdata = new FormData(ev.target);
    formdata.append("prerequisites", "[]");
    formdata.append("subcategories", "[]");
    formdata.append("difficulty", 1);
    await createCourse(formdata);
  };

  /*
    {
    "difficulty": 1,
    "title": "Foundations of Programming",
    "subcategories": [],
    "prerequisites": [],
    "course_description": "Test course
    }
  */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Course Creation
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Title"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="course title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="course_description"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Course Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="course_description"
                    name="course_description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Describe The Course
                </p>
              </div>
              <fieldset>
                {/*
                Refactor side and side idx
                */}
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Course Fields of Study
                </legend>
                <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                  {subcategories.map((side, sideIdx) => (
                    <div
                      key={sideIdx}
                      className="relative flex items-start py-4">
                      <div className="min-w-0 flex-1 text-sm leading-6">
                        <label
                          htmlFor={`side-${side.id}`}
                          className="select-none font-medium text-gray-900">
                          {side.name}
                        </label>
                      </div>
                      <div className="ml-3 flex h-6 items-center">
                        <input
                          defaultChecked={side.id === null}
                          id={`side-${side.id}`}
                          name="subcategories"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              {/* TODO: add photo element */}

              {/* <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </>
  );
};
